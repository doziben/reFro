import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import TeamMemberAvatar from "../../../../components/workplace/TeamMember";
import { teamListScreens } from "../../../../types/navigation";
import { mockTeamAvatarData } from "../../../../utils/mockData";

export type TeamlistScreenProps = NativeStackScreenProps<
  teamListScreens,
  "Teamlist"
>;

const Teamlist = ({ navigation, route }: TeamlistScreenProps) => {
  //* For handling the user presses */
  function userOnPressHandler(id: string, name: string, role: string) {
    navigation.navigate("Teammembers", { name: name, id: id, role: role });
  }

  return (
    <FlatList
      style={styles.wrapper}
      contentInsetAdjustmentBehavior="automatic"
      keyExtractor={(item) => item.id}
      data={mockTeamAvatarData}
      renderItem={({ item }) => {
        const { avatarUrl, name, id, role } = item;
        return (
          <TeamMemberAvatar
            avatarUrl={avatarUrl}
            name={name}
            id={id}
            onPress={() => {
              userOnPressHandler(id, name, role);
            }}
          />
        );
      }}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
});
export default Teamlist;
