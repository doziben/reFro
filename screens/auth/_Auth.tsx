import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authScreens } from "../../types/navigation";
import Login from "./Login";
import Onboarding from "./Onboarding";
import SignUp from "./SignUp";

const AuthStackNav = createNativeStackNavigator<authScreens>();

const _Auth = () => {
  return (
    <AuthStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStackNav.Screen name="Onboarding" component={Onboarding} />
      <AuthStackNav.Screen name="SignUp" component={SignUp} />
      <AuthStackNav.Screen name="Login" component={Login} />
    </AuthStackNav.Navigator>
  );
};

export default _Auth;
