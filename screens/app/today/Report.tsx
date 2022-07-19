import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { todayScreens } from "../../../types/navigation";
import { View } from "react-native";

type ReportScreen = NativeStackScreenProps<todayScreens, "Report">;

const Report = ({}: ReportScreen) => {
  return <View></View>;
};

export default Report;
