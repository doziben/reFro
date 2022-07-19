import { useEffect, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

interface textBoxProps {
  type: "form" | "regular";
  placeHolder: string;
  rounded: "all" | "top" | "bottom" | "none";
  onChangeText: (value: string | number) => void;
  extraInputOptions: TextInputProps;
  extraStyling: StyleProp<ViewStyle>;
}

// form and no shadow, regular with shadow
const TextBox = ({
  type,
  placeHolder,
  rounded,
  onChangeText,
  extraInputOptions,
}: textBoxProps) => {
  const [inputValue, setInputValue] = useState<number | string>("");

  //* Passing the new text to parent for every change *//
  useEffect(() => {
    onChangeText(inputValue);
  }, [inputValue]);

  return (
    <View>
      <TextInput
        onChangeText={(text) => {
          return setInputValue(text);
        }}
        {...extraInputOptions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  form: {},
  regular: {},
  rounded: {},
  topRounded: {},
  bottomRounded: {},
});

export default TextBox;
