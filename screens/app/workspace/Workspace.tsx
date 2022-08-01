import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { workspaceScreens } from "../../../types/navigation";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import DaySelect from "../../../components/workplace/DaySelect";
import TeamReportCount from "../../../components/workplace/TeamReportCount";
import TeamReportList from "../../../components/reports/TeamReportList";
import { mockTeamReportData } from "../../../utils/mockData";

export type WorkspaceScreenProps = NativeStackScreenProps<
  workspaceScreens,
  "Workplace"
>;

const Workspace = ({ navigation, route }: WorkspaceScreenProps) => {
  const currentDayIndex = new Date().getDay();
  const [dayIndex, setDayIndex] = useState<number>(currentDayIndex);

  //filter teamreports with value > ""
  const reportedValuesNumber = 2;
  const totalTeamMembers = 17;

  //** Set the data to return only reports that the day matches the dayIndex */

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {/* Top Wrapper */}
      <View style={styles.topWrapper}>
        <DaySelect dayIndex={dayIndex} setDayIndex={setDayIndex} />
        <TeamReportCount
          totalValue={totalTeamMembers}
          currValue={reportedValuesNumber}
        />
      </View>

      {/* Workplace members reports */}
      <TeamReportList data={mockTeamReportData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  topWrapper: {
    flexDirection: "row",
    marginVertical: 28,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default Workspace;
