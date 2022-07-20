import { GlyphMap } from "@expo/vector-icons/build/createIconSet";
import Ionicons from "@expo/vector-icons/Feather";
import { StyleSheet, View, Text, ColorValue } from "react-native";
import colors from "../../styles/colors";

interface toastModalProps {
  yourMessage: string;
  type: "info" | "success" | "warning";
}

const ToastModal = ({ yourMessage, type }: toastModalProps) => {
  //* Breaking down the prop types *//
  const info = type === "info";
  const success = type === "success";
  const warning = type === "warning";

  //* Defining Color states *//
  type color = ColorValue | undefined;
  let ToastColor: color = "#FAFAFA";
  let ToastTextColor: color = "#000000";
  let ToastIconName: keyof typeof Ionicons.glyphMap = "alert-triangle";

  if (info) {
    ToastColor = colors.info[100];
    ToastTextColor = colors.info[200];
    ToastIconName = "gift";
  } else if (success) {
    ToastColor = colors.success[100];
    ToastTextColor = colors.success[200];
    ToastIconName = "check";
  } else if (warning) {
    ToastColor = colors.warning[100];
    ToastTextColor = colors.warning[200];
    ToastIconName = "alert-triangle";
  }

  return (
    <View style={[styles.wrapper, { backgroundColor: ToastColor }]}>
      <Text style={{ color: ToastTextColor }}>{yourMessage}</Text>
      <View>
        <Ionicons
          style={{}}
          name={ToastIconName}
          color={ToastTextColor}
          size={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    marginVertical: 16,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default ToastModal;
