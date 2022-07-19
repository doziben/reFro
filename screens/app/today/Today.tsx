import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { todayScreens } from "../../../types/navigation";

type TodayScreen = NativeStackScreenProps<todayScreens, "Today">;

const Today = ({}: TodayScreen) => {
  return <View></View>;
};

export default Today;
