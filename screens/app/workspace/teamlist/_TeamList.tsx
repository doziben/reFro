import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import PressableIcon from "../../../../components/atoms/PressableIcon";
import {
  teamListScreens,
  workspaceScreens,
} from "../../../../types/navigation";
import Teamlist from "./TeamList";
import TeamMember from "./TeamMember";

const TeamlistStackNav = createNativeStackNavigator<teamListScreens>();
type TeamListScreenProps = NativeStackScreenProps<
  workspaceScreens,
  "_Teamlist"
>;

const _Teamlist = ({ navigation, route }: TeamListScreenProps) => {
  return (
    <TeamlistStackNav.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <TeamlistStackNav.Screen
        name="Teamlist"
        component={Teamlist}
        options={{
          title: "Team List",
          presentation: "modal",
          headerSearchBarOptions: { placeholder: "Search members" },
          headerLargeTitle: true,
          headerLeft: (props) => {
            return (
              <PressableIcon
                name="arrow-left"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            );
          },
        }}
      />
      <TeamlistStackNav.Screen
        name="Teammembers"
        component={TeamMember}
        options={{
          presentation: "modal",
        }}
      />
    </TeamlistStackNav.Navigator>
  );
};

export default _Teamlist;
