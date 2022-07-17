import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { authScreens } from "../../types/navigation";

//States = login | forgotPassword | requestedPassword

type LoginScreen = NativeStackScreenProps<authScreens, "Login">;
const Login = ({}: LoginScreen) => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
