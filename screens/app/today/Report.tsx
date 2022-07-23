import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { dateType, todayScreens } from "../../../types/navigation";
import { StyleSheet, Text, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import { text } from "../../../styles/text";
import colors from "../../../styles/colors";
import TextBox from "../../../components/atoms/TextBox";
import PrimaryButton from "../../../components/atoms/PrimaryButton";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { ReportSlice } from "../../../store/ReportSlice";

type ReportScreen = NativeStackScreenProps<todayScreens, "Report">;

const Report = ({ navigation, route }: ReportScreen) => {
  const dispatch = useAppDispatch();

  //* Getting the name of the current user */
  const userName = useAppSelector((store) => {
    return store.app.user?.name;
  });

  const { date, type, value } = route.params;
  const reportDate: dateType = date!;

  let today = new Date().toDateString() === new Date(reportDate).toDateString();
  let create = type === "create";
  let PageTitle = create ? "Create Report" : "Edit Report";
  let messageDay = create || today ? `today` : `that day`;
  let placeHolder = create ? "Your report..." : value;

  //* Setting Header Based on type */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: PageTitle,
    });
  }, [type, PageTitle]);

  //** Managing Report Input State */
  const [inputValue, setInputValue] = useState<string | number>("");

  //* SaveReportHandler */
  function saveReportHandler() {
    let valusIsValid = inputValue !== "";
    valusIsValid
      ? (dispatch(
          ReportSlice.actions.setReport({
            date: reportDate,
            value: inputValue.toString(),
          })
        ),
        navigation.goBack())
      : null;
  }

  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.headingText}>
          Hey {userName} {"\n"}
          What did you do {"\n"}
          <Text style={styles.highlightedText}>{messageDay}</Text>?
        </Text>

        <TextBox
          placeHolder={placeHolder}
          rounded="all"
          type="regular"
          onChangeText={(text) => setInputValue(text)}
          extraStyling={styles.textBox}
          extraInputOptions={{
            numberOfLines: 5,
            style: { minHeight: 100, textAlignVertical: "top" },
            multiline: true,
          }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <PrimaryButton onPress={saveReportHandler} title="Save" type="full" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginTop: 28,
  },
  headingText: {
    fontSize: text.heading.fontSize,
    lineHeight: text.heading.lineHeight,
    fontStyle: "italic",
    fontWeight: "100",
  },
  highlightedText: {
    color: colors.Accent[200],
  },
  textBox: {
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 32,
  },
});

export default Report;
