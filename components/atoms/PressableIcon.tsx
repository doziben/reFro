import { Feather } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import colors from "../../styles/colors";

interface PressableIconProps {
  name: keyof typeof Feather.glyphMap;
  onPress: (e: GestureResponderEvent) => void;
}

const PressableIcon = ({ name, onPress }: PressableIconProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <Feather name={name} size={24} color={colors.Primary[100]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.3,
  },
});
export default PressableIcon;
