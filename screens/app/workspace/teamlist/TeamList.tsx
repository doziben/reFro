import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { teamListScreens } from "../../../../types/navigation";

type TeamlistScreens = NativeStackScreenProps<teamListScreens, "Teamlist">;

const Teamlist = ({}: TeamlistScreens) => {
  return <View> </View>;
};

export default Teamlist;
