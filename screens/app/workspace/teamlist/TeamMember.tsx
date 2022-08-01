import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import WeekView from "../../../../components/reports/WeekView";
import colors from "../../../../styles/colors";
import { text } from "../../../../styles/text";
import { teamListScreens } from "../../../../types/navigation";
import { mockReportData, mockTeamAvatarData } from "../../../../utils/mockData";

type TeammemberScreens = NativeStackScreenProps<teamListScreens, "Teammembers">;

const TeamMember = ({ navigation, route }: TeammemberScreens) => {
  const { id, name, role } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, [name]);

  //* Fetch the report data of the team member via id */
  const defaultAvatarUrl = require("../../../../assets/avatars/3.png");
  const user = mockTeamAvatarData.find(
    (item) => item.id === id || item.name === name
  );
  const userAvatar = (user && user.avatarUrl) || defaultAvatarUrl;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {/* User Card */}
      <View style={styles.userCardWrapper}>
        <Image style={styles.userAvatar} source={userAvatar} />
        {/* Name Wrapper */}
        <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.roleText}>{role.toUpperCase()}</Text>
        </View>
      </View>

      {/* User Report Section*/}
      <View style={styles.userReportWrapper}>
        <Text style={styles.subHeadingText}>This Week</Text>
        <WeekView data={mockReportData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userCardWrapper: {
    padding: 16,
    backgroundColor: colors.Bg[100],
    margin: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.Border[100],
    flexDirection: "row",
    alignItems: "center",
  },
  nameWrapper: {
    marginLeft: 12,
  },
  userReportWrapper: {
    marginHorizontal: 20,
  },
  userAvatar: {
    width: 56,
    height: 56,
  },
  subHeadingText: {
    fontSize: text.subHeading.fontSize,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 20,
  },
  roleText: {
    color: colors.Text[100],
  },
});

export default TeamMember;
