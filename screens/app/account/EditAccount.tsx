import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { accountScreens } from "../../../types/navigation";

type EditAccountScreenProps = NativeStackScreenProps<
  accountScreens,
  "EditAccount"
>;

const EditAccount = ({ navigation, route }: EditAccountScreenProps) => {
  return <View></View>;
};

export default EditAccount;
