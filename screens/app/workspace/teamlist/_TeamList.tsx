import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { teamListScreens } from "../../../../types/navigation";
import Teamlist from "./TeamList";
import TeamMember from "./TeamMember";

const TeamlistStackNav = createNativeStackNavigator<teamListScreens>();

const _Teamlist = () => {
  return (
    <TeamlistStackNav.Navigator>
      <TeamlistStackNav.Screen name="Teamlist" component={Teamlist} />
      <TeamlistStackNav.Screen name="Teammembers" component={TeamMember} />
    </TeamlistStackNav.Navigator>
  );
};

export default _Teamlist;
