import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { todayScreens } from "../../../types/navigation";
import Report from "./Report";
import Today from "./Today";

const TodayStackNav = createNativeStackNavigator<todayScreens>();

const _Today = () => {
  return (
    <TodayStackNav.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#F3F3F3" },
        contentStyle: { backgroundColor: "#F3F3F3" },
      }}
    >
      <TodayStackNav.Screen
        name="Today"
        component={Today}
        options={{
          headerLargeTitle: true,
        }}
      />
      <TodayStackNav.Screen
        name="Report"
        component={Report}
        options={{
          presentation: "modal",
        }}
      />
    </TodayStackNav.Navigator>
  );
};

export default _Today;
