import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { accountScreens } from "../../../types/navigation";

type ChangePasswordScreenProps = NativeStackScreenProps<
  accountScreens,
  "ChangePassword"
>;

const ChangePassword = ({ navigation, route }: ChangePasswordScreenProps) => {
  return <View></View>;
};

export default ChangePassword;
