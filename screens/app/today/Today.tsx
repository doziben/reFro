import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { todayScreens } from "../../../types/navigation";
import TodayCTA from "../../../components/reports/TodayCTA";
import useAppSelector from "../../../hooks/useAppSelector";
import ReportList from "../../../components/reports/ReportList";
import { text } from "../../../styles/text";
import { useState } from "react";
import SelectOption, {
  SelectOptionItemProps,
} from "../../../components/modals/SelectOption";
import { mockReportData } from "../../../utils/mockData";

type TodayScreen = NativeStackScreenProps<todayScreens, "Today">;
type PeriodFilterView = "week" | "month" | "year";

const Today = ({ navigation, route }: TodayScreen) => {
  //** Managing Period Filter State */
  const [periodState, setPeriodState] = useState<PeriodFilterView>("week");

  //** Managing Report State */
  const todayReport = useAppSelector((store) => {
    return store.report.value;
  });

  let notSet = todayReport === "";
  const todayReportStatus = notSet ? false : true;

  //** Check Report State and clear it if it's set and the date value is not equal to current Date */

  //** Dispatching report-related actions */
  function reportHandler() {
    const navType = notSet ? "create" : "edit";
    const reportDate = new Date().toLocaleString();

    navigation.navigate("Report", {
      type: navType,
      value: todayReport,
      date: reportDate,
    });
  }
  const selectOptionsData: SelectOptionItemProps[] = [];
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ExpoStatusBar style="dark" />

      {/* Today CTA */}
      <View style={styles.marginHelper}>
        <TodayCTA
          done={todayReportStatus}
          values={todayReport}
          onPress={reportHandler}
        />
      </View>

      {/* Reports List */}
      <View style={styles.marginHelper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.subHeading}>Reports</Text>
          <SelectOption options={selectOptionsData} title="" />
        </View>

        <View>
          <ReportList view={periodState} data={mockReportData} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  marginHelper: {
    marginTop: 28,
  },
  headingWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeading: {
    fontSize: text.subHeading.fontSize,
    fontWeight: "bold",
  },
});

export default Today;
