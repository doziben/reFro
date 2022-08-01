import { Feather } from "@expo/vector-icons";
import React, { useRef } from "react";
import { StyleSheet, View, Text, Pressable, ViewComponent } from "react-native";
import colors from "../../styles/colors";
import dateUtil from "../../utils/dateUtil";
import getDayName from "../../utils/getDayName";
import isCurrentDay from "../../utils/isCurrentDay";
import isLaterDay from "../../utils/isLaterDay";

interface ReportItemProps {
  date: Date;
  value: string;
  id: string;
  staff?: boolean;
}

const ReportItem = ({ date, value, id, staff }: ReportItemProps) => {
  const wrapperRef = useRef<ViewComponent>();

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
  let pinBodyHeight = 100;

  if (noUpdates) {
    valueText = "No updates given...";
    backgroundColor = "#F3EFE2";
  } else if (laterDay) {
    valueText = "Upcoming";
    backgroundColor = "#F3F3F3";
    pinBodyHeight = 70;
  } else if (currentDay) {
    dateColor = colors.Accent[200];
  }

  return (
    <View style={styles.wrapper}>
      {/* Left Side / Day Wrapper */}
      <View style={styles.dayWrapper}>
        <Text style={styles.dayNametext}>{dayName}</Text>

        {/* Pin */}
        <View style={styles.pinWrapper}>
          <View style={[styles.pinCircle, { borderColor: dateColor }]}></View>
          <View
            style={[
              styles.pinBody,
              { height: pinBodyHeight },
              laterDay && { borderStyle: "dashed" },
            ]}
          ></View>
        </View>
      </View>

      {/* Value Wrapper */}
      <View style={[styles.valueWrapper, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.dateNumberText, { color: dateColor }]}>
          {dateNumber}
        </Text>
        <View style={styles.valueTextWrapper}>
          <Text style={[styles.valueText, laterDay && styles.upcomingText]}>
            {valueText}
          </Text>

          {/* Edit Icon */}
          {noUpdates && !staff && (
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
    flexDirection: "row",
  },
  dayWrapper: {
    flexDirection: "row",
    marginRight: 8,
  },
  pinWrapper: {
    marginHorizontal: 4,
    alignItems: "center",
  },
  valueWrapper: {
    borderRadius: 12,
    minWidth: 273,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    width: "82%",
    justifyContent: "space-between",
  },
  pinCircle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 200,
  },
  pinBody: {
    borderColor: colors.Primary[100],
    borderWidth: 0.5,
    borderRadius: 1,
  },
  dateNumberText: {
    fontWeight: "bold",
  },
  dayNametext: {
    minWidth: 32,
  },
  valueTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  valueText: {
    fontSize: 16,
  },
  upcomingText: {
    color: colors.Text[100],
    fontStyle: "italic",
  },
});
export default ReportItem;
