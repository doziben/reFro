import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { teamListScreens } from "../../../../types/navigation";

type TeammemberScreens = NativeStackScreenProps<teamListScreens, "Teammembers">;

const TeamMember = ({ navigation, route }: TeammemberScreens) => {
  const { id, name } = route.params;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default TeamMember;
