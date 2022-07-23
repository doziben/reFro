import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { todayScreens } from "../../../types/navigation";
import { Text, View } from "react-native";
import { useLayoutEffect } from "react";
import useAppSelector from "../../../hooks/useAppSelector";

type ReportScreen = NativeStackScreenProps<todayScreens, "Report">;

const Report = ({ navigation, route }: ReportScreen) => {
  //* Getting the name of the current user */
  const userName = useAppSelector((store) => {
    return store.app.user?.name;
  });

  const { date, type, value } = route.params;

  let create = type === "create";
  let PageTitle = create ? "Create Report" : "Edit Report";
  let messageDay = create ? `today` : `that day`;

  //* Setting Header Based on type */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: PageTitle,
    });
  }, [type, PageTitle]);

  //* SaveReportHandler */
  //Dispatches to reportslice

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Report;
