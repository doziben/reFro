import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { todayScreens } from "../../../types/navigation";
import Report from "./Report";
import Today from "./Today";

const TodayStackNav = createNativeStackNavigator<todayScreens>();

const _Today = () => {
  return (
    <TodayStackNav.Navigator>
      <TodayStackNav.Screen name="Today" component={Today} />
      <TodayStackNav.Screen name="Report" component={Report} />
    </TodayStackNav.Navigator>
  );
};

export default _Today;
