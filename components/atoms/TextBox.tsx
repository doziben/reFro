import { useEffect, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import colors from "../../styles/colors";

interface textBoxProps {
  type: "form" | "regular";
  placeHolder: string;
  rounded: "all" | "top" | "bottom" | "none";
  onChangeText: (value: string | number) => void;
  extraInputOptions?: TextInputProps;
  extraStyling?: StyleProp<ViewStyle>;
}

// form and no shadow, regular with shadow
const TextBox = ({
  type,
  placeHolder,
  rounded,
  onChangeText,
  extraInputOptions,
  extraStyling,
}: textBoxProps) => {
  const [inputValue, setInputValue] = useState<number | string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  //* Passing the new text to parent for every change *//
  useEffect(() => {
    onChangeText(inputValue);
  }, [inputValue]);

  //* Extracting all conditional styles *//
  const regular = type === "regular";
  const form = type === "form";

  const roundedAll = rounded === "all";
  const roundedTop = rounded === "top";
  const roundedBottom = rounded === "bottom";

  return (
    <View
      style={[
        styles.wrapper,
        regular && styles.regular,
        form && styles.form,
        roundedAll && styles.rounded,
        roundedBottom && styles.bottomRounded,
        roundedTop && styles.topRounded,
        extraStyling && extraStyling,
        isFocused && styles.focused,
      ]}
    >
      <TextInput
        placeholder={placeHolder}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChangeText={(text) => {
          return setInputValue(text);
        }}
        {...extraInputOptions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 16,
    backgroundColor: "white",
  },
  focused: {
    borderColor: colors.Accent[200],
  },
  form: {
    borderColor: colors.Border[100],
    borderWidth: 1,
  },
  regular: {
    elevation: 15,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  rounded: {
    borderRadius: 12,
  },
  topRounded: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  bottomRounded: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});

export default TextBox;
