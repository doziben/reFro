import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";
import { text } from "../../styles/text";

interface DaySelectProps {
  dayIndex: number;
  setDayIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DaySelect = ({ dayIndex, setDayIndex }: DaySelectProps) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayIndexDay = days[dayIndex];
  const isCurrentDayIndex = new Date().getDay() === dayIndex;

  //* Conditionals */
  let backgroundColor = colors.Accent[300];
  if (isCurrentDayIndex) {
    backgroundColor = colors.Accent[100];
    dayIndexDay = "Today";
  }
  return (
    <View>
      <Pressable
        onPress={() => {
          // Show the Select modal and the options when clicked
          // will set day index .bind(this, number)
        }}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <View
          style={[styles.innerWrapper, { backgroundColor: backgroundColor }]}
        >
          <Text style={styles.titleText}>{dayIndexDay}</Text>
          <Feather name="chevron-down" color={colors.Primary[100]} size={24} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  innerWrapper: {
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: text.large.fontSize,
    color: colors.Primary[100],
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.3,
  },
});

export default DaySelect;
