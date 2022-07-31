import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { teamListScreens } from "../../../../types/navigation";

type TeammemberScreens = NativeStackScreenProps<teamListScreens, "Teammembers">;

const TeamMember = ({ navigation, route }: TeammemberScreens) => {
  const { id, name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, [name]);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default TeamMember;
