import { StyleSheet, View } from "react-native";
import { teamReport } from "../../types/teamReport";
import TeamReportItem from "./TeamReportItem";

interface TeamReportListProps {
  data: teamReport[];
}

const TeamReportList = ({ data }: TeamReportListProps) => {
  return (
    <View style={styles.wrapper}>
      {data.map((item) => {
        const { avatarUrl, date, id, staffName, value } = item;
        return (
          <TeamReportItem
            key={id}
            value={value}
            avatarUrl={avatarUrl}
            date={date}
            id={id}
            staffName={staffName}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
});

export default TeamReportList;
