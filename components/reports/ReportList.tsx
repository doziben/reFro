import { StyleSheet, View } from "react-native";
import { staffReport } from "../../utils/mockData";
import WeekView from "./WeekView";

interface ReportListProps {
  data: staffReport[];
  view: "week" | "month" | "year";
}

const ReportList = ({ data, view }: ReportListProps) => {
  const weekView = view === "week";
  const monthView = view === "month";
  const yearView = view === "year";

  return (
    <View style={styles.wrapper}>
      {weekView && <WeekView data={data} />}
      {
        // monthView && render month component
      }
      {
        // yearView && render year component
      }
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: "white",
  },
});
export default ReportList;
