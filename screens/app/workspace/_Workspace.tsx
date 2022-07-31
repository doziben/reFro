import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PressableIcon from "../../../components/atoms/PressableIcon";
import { appScreens, workspaceScreens } from "../../../types/navigation";
import _Teamlist from "./teamlist/_TeamList";
import Workspace from "./Workspace";

const WorkspaceStackNav = createNativeStackNavigator<workspaceScreens>();

type workspaceScreensProps = BottomTabScreenProps<
  workspaceScreens,
  "Workplace"
>;
const _Workspace = ({}) => {
  const navigation = useNavigation<workspaceScreensProps["navigation"]>();
  return (
    <WorkspaceStackNav.Navigator>
      <WorkspaceStackNav.Screen
        name="Workplace"
        component={Workspace}
        options={{
          headerLargeTitle: true,
          headerStyle: { backgroundColor: "#F3F3F3" },
          contentStyle: { backgroundColor: "#F3F3F3" },
          headerRight: () => {
            return (
              <PressableIcon
                name="users"
                onPress={() => {
                  navigation.navigate("_Teamlist");
                }}
              />
            );
          },
        }}
      />
      <WorkspaceStackNav.Screen
        name="_Teamlist"
        component={_Teamlist}
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
        }}
      />
    </WorkspaceStackNav.Navigator>
  );
};

export default _Workspace;
