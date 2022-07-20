import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { todayScreens } from "../../../types/navigation";
import { Text, View } from "react-native";
import { useLayoutEffect } from "react";

type ReportScreen = NativeStackScreenProps<todayScreens, "Report">;

const Report = ({ navigation, route }: ReportScreen) => {
  const value = route.params.value;
  const type = route.params.type;

  let create = type === "create";
  let PageTitle = create ? "Create Report" : "Edit Report";

  //* Setting Header Based on type */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: PageTitle,
    });
  }, [type, PageTitle]);

  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default Report;
