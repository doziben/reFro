import Ionicons from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../styles/colors";
import { appScreens } from "../../types/navigation";
import _Account from "./account/_Account";
import _Today from "./today/_Today";
import _Workspace from "./workspace/_Workspace";

const AppTabNav = createBottomTabNavigator<appScreens>();

const _App = () => {
  return (
    <AppTabNav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.Primary[100],
        tabBarShowLabel: false,
      }}
    >
      <AppTabNav.Screen
        name="_Today"
        component={_Today}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="zap" color={color} size={size} />;
          },
        }}
      />
      <AppTabNav.Screen
        name="_Workspace"
        component={_Workspace}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="briefcase" color={color} size={size} />;
          },
        }}
      />
      <AppTabNav.Screen
        name="_Account"
        component={_Account}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="user" color={color} size={size} />;
          },
        }}
      />
    </AppTabNav.Navigator>
  );
};

export default _App;
