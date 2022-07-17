import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { authScreens } from "../../types/navigation";

type SignUpScreen = NativeStackScreenProps<authScreens, "SignUp">;
const SignUp = ({ navigation, route }: SignUpScreen) => {
  const newUser = route.params?.newUser;
  //If it's a new user, render signup ELSE route to login
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;
