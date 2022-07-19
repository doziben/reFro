import {
  View,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../styles/colors";

interface ButtonProps {
  title: string;
  type: "full" | "aside";
  icon?: keyof typeof Ionicons.glyphMap;
  styles?: StyleProp<ViewStyle>;
  onPress: (e: GestureResponderEvent) => void;
}

const PrimaryButton = ({ title, type, icon, styles, onPress }: ButtonProps) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <View>
          <Text>{title}</Text>
          {icon && (
            <Ionicons name={icon} size={24} color={colors.Accent[100]} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
