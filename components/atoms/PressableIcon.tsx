import { Feather } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import colors, { color } from "../../styles/colors";

interface PressableIconProps {
  name: keyof typeof Feather.glyphMap;
  onPress: (e: GestureResponderEvent) => void;
  color?: color;
}

const PressableIcon = ({ name, onPress, color }: PressableIconProps) => {
  const customColor = color !== undefined;
  const colorValue = customColor ? color : colors.Primary[100];
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <Feather name={name} size={24} color={colorValue} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.3,
  },
});
export default PressableIcon;
