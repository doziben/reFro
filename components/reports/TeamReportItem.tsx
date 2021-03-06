import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { teamReport } from "../../types/teamReport";
import colors from "../../styles/colors";
import getTimeString from "../../utils/getTimeString";
import { useNavigation } from "@react-navigation/native";
import { WorkspaceScreenProps } from "../../screens/app/workspace/Workspace";

const TeamReportItem = ({
  avatarUrl,
  date,
  id,
  staffName,
  role,
  value,
}: teamReport) => {
  const time = getTimeString({ date });
  const navigator = useNavigation();

  //* Handles routing to the user avatar */
  function teamNavigationHandler() {
    navigator.navigate("_Teamlist", {
      screen: "Teammembers",
      params: { id, role, name: staffName },
    });
  }

  return (
    <View style={styles.wrapper}>
      {/* Top Wrapper */}
      <View style={styles.topWrapper}>
        <Pressable
          onPress={teamNavigationHandler}
          style={({ pressed }) => [pressed && styles.pressed]}
        >
          <View style={styles.nameWrapper}>
            <Image source={avatarUrl} style={styles.avatarImg} />
            <Text style={styles.staffNameText}>{staffName}</Text>
          </View>
        </Pressable>
        <Text style={styles.timeText}>{time}</Text>
      </View>

      {/* Value text */}
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.Border[100],
    marginBottom: 16,
  },
  topWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: { color: colors.Text[100] },
  nameWrapper: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
  },
  avatarImg: {
    width: 40,
    height: 40,
    marginRight: 6,
  },
  staffNameText: {
    fontSize: 17,
  },
  valueText: {
    fontStyle: "italic",
    fontSize: 17,
    color: colors.Text[100],
  },
  pressed: {
    opacity: 0.5,
  },
});

export default TeamReportItem;
