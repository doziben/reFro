import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { teamListScreens } from "../../../../types/navigation";

type TeammemberScreens = NativeStackScreenProps<teamListScreens, "Teammembers">;

const TeamMember = ({}: TeammemberScreens) => {
  return <View> </View>;
};

export default TeamMember;
