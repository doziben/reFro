import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text, Pressable } from "react-native";
import colors from "../../styles/colors";
import dateUtil from "../../utils/dateUtil";
import getDayName from "../../utils/getDayName";
import isCurrentDay from "../../utils/isCurrentDay";
import isLaterDay from "../../utils/isLaterDay";

interface ReportItemProps {
  date: Date;
  value: string;
  id: string;
}

const ReportItem = ({ date, value, id }: ReportItemProps) => {
  const valueIsNotSet = value === "" || undefined;
  const currentDay: boolean = isCurrentDay({ date });
  const laterDay: boolean = isLaterDay({ date });
  const dayName = getDayName({ date });
  const dateNumber = date.getDate() + 1;
  const noUpdates = valueIsNotSet && !laterDay;

  //* Conditionals */
  let backgroundColor = "#E6F8FE";
  let dateColor = colors.Primary[100];
  let valueText = value;

  if (noUpdates) {
    valueText = "No updates given...";
    backgroundColor = "#F3EFE2";
  } else if (laterDay) {
    valueText = "Upcoming";
    backgroundColor = "#F3F3F3";
  } else if (currentDay) {
    dateColor = colors.Accent[100];
  }

  return (
    <View style={styles.wrapper}>
      {/* Left Side / Day Wrapper */}
      <View>
        <Text>{dayName}</Text>

        {/* Pin */}
        <View>
          <View style={styles.pinCircle}></View>
          <View style={styles.pinBody}></View>
        </View>
      </View>

      {/* Value Wrapper */}
      <View style={[styles.valueWrapper, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.dateNumberText, { color: dateColor }]}>
          {dateNumber}
        </Text>
        <View style={styles.valueTextWrapper}>
          <Text style={styles.valueText}>{valueText}</Text>

          {/* Edit Icon */}
          {noUpdates && (
            <Pressable>
              <Feather name="edit-3" size={24} color={colors.Primary[100]} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
  },
  dayWrapper: {},
  valueWrapper: {
    borderRadius: 12,
  },
  pinCircle: {},
  pinBody: {},
  dateNumberText: {},
  valueTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valueText: {},
});
export default ReportItem;
