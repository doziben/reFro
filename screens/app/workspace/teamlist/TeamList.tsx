import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import { teamListScreens } from "../../../../types/navigation";

type TeamlistScreens = NativeStackScreenProps<teamListScreens, "Teamlist">;

const Teamlist = ({}: TeamlistScreens) => {
  return <ScrollView contentInsetAdjustmentBehavior="automatic"> </ScrollView>;
};

export default Teamlist;
