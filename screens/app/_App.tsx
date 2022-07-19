import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { appScreens } from "../../types/navigation";
import _Account from "./account/_Account";
import _Today from "./today/_Today";
import _Workspace from "./workspace/_Workspace";

const AppTabNav = createBottomTabNavigator<appScreens>();

const _App = () => {
  return (
    <AppTabNav.Navigator>
      <AppTabNav.Screen name="_Today" component={_Today} />
      <AppTabNav.Screen name="_Workspace" component={_Workspace} />
      <AppTabNav.Screen name="_Account" component={_Account} />
    </AppTabNav.Navigator>
  );
};

export default _App;
