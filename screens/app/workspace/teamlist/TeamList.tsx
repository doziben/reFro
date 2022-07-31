import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, ScrollView } from "react-native";
import { teamListScreens } from "../../../../types/navigation";

type TeamlistScreens = NativeStackScreenProps<teamListScreens, "Teamlist">;

const Teamlist = ({ navigation, route }: TeamlistScreens) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Button
        title="Text Link"
        onPress={() => [
          navigation.navigate("Teammembers", { name: "Emeka", id: "haha" }),
        ]}
      />
    </ScrollView>
  );
};

export default Teamlist;
