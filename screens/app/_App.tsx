import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { appScreens } from "../../types/navigation";

const AppTabNav = createBottomTabNavigator<appScreens>();

const _App = () => {
  return (
    <AppTabNav.Navigator>
      <AppTabNav.Screen name="Today" component={} />
      <AppTabNav.Screen name="Workspace" component={} />
      <AppTabNav.Screen name="Account" component={} />
    </AppTabNav.Navigator>
  );
};

export default _App;
