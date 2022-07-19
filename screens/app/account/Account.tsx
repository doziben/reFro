import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { accountScreens } from "../../../types/navigation";

type AccountScreen = NativeStackScreenProps<accountScreens, "Account">;
const Account = ({}: AccountScreen) => {
  return <View></View>;
};

export default Account;
