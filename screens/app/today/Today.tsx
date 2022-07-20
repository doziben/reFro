import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ScrollView, View } from "react-native";
import { todayScreens } from "../../../types/navigation";
import TodayCTA from "../../../components/reports/TodayCTA";
import useAppSelector from "../../../hooks/useAppSelector";

type TodayScreen = NativeStackScreenProps<todayScreens, "Today">;

const Today = ({ navigation, route }: TodayScreen) => {
  //** Managing Report State *//
  const todayReport = useAppSelector((store) => {
    return store.report.value;
  });

  let notSet = todayReport === "";
  const todayReportStatus = notSet ? false : true;

  //** Dispatching report-related actions */
  function reportHandler() {
    const navType = notSet ? "create" : "edit";
    navigation.navigate("Report", {
      type: navType,
      value: todayReport,
      date: new Date(),
    });
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ExpoStatusBar style="dark" />

      {/* Today CTA */}
      <View>
        <TodayCTA
          done={todayReportStatus}
          values={todayReport}
          onPress={reportHandler}
        />
      </View>

      {/* Reports List */}
      <View>
        <View>
          {
            //heading and periodDropdown
          }
        </View>

        <View>
          {
            //report List
            //Render report data in flatlist here
          }
        </View>
      </View>
    </ScrollView>
  );
};

export default Today;
