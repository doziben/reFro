import {
  View,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Feather";
import colors from "../../styles/colors";

interface ButtonProps {
  title: string;
  type: "full" | "aside";
  icon?: keyof typeof Ionicons.glyphMap;
  styling?: StyleProp<ViewStyle>;
  onPress: (e: GestureResponderEvent) => void;
}

const PrimaryButton = ({
  title,
  type,
  icon,
  styling,
  onPress,
}: ButtonProps) => {
  let aside = type === "aside";
  let full = type === "full";

  return (
    <View style={[styles.mainWrapper, aside && styles.asideMainWrapper]}>
      <Pressable
        style={({ pressed }) => [
          styles.wrapper,
          styling,
          aside && styles.asideWrapper,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{title}</Text>
          {icon && (
            <Ionicons name={icon} size={24} color={colors.Primary[100]} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    width: "100%",
  },
  asideMainWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  wrapper: {
    padding: 16,
    backgroundColor: colors.Accent[100],
  },
  asideWrapper: {
    maxWidth: 200,
    borderRadius: 12,
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    justifyContent: "space-between",
  },
  noIcon: {},
  text: { color: colors.Primary[100], fontWeight: "bold" },
  pressed: {},
});

export default PrimaryButton;
