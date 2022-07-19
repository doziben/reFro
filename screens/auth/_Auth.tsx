import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authScreens } from "../../types/navigation";
import Login from "./Login";
import Onboarding from "./Onboarding";
import SignUp from "./SignUp";

const AuthStackNav = createNativeStackNavigator<authScreens>();

const _Auth = () => {
  return (
    <AuthStackNav.Navigator screenOptions={{}}>
      <AuthStackNav.Screen
        name="Onboarding"
        options={{
          headerShown: false,
        }}
        component={Onboarding}
      />
      <AuthStackNav.Screen
        name="SignUp"
        options={{
          presentation: "modal",
          title: "Sign Up",
          contentStyle: {
            backgroundColor: "white",
          },
        }}
        component={SignUp}
      />
      <AuthStackNav.Screen
        name="Login"
        component={Login}
        options={{
          presentation: "modal",
          title: "Sign In",
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </AuthStackNav.Navigator>
  );
};

export default _Auth;
