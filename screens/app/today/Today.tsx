import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ScrollView } from "react-native";
import { todayScreens } from "../../../types/navigation";

type TodayScreen = NativeStackScreenProps<todayScreens, "Today">;

//TodayCTA component will take in props done = true/false, onPress, values)
//Render report data in flatlist here

const Today = ({}: TodayScreen) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ExpoStatusBar style="dark" />
    </ScrollView>
  );
};

export default Today;
