import { StyleSheet, Text, View } from "react-native";

interface TeamReportCountProps {
  currValue: number;
  totalValue: number;
}

const TeamReportCount = ({ currValue, totalValue }: TeamReportCountProps) => {
  const count = `${currValue}/${totalValue}`;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 12,
  },
  count: {},
});

export default TeamReportCount;
