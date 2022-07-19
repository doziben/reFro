import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { workspaceScreens } from "../../../types/navigation";
import _Teamlist from "./teamlist/_TeamList";
import Workspace from "./Workspace";

const WorkspaceStackNav = createNativeStackNavigator<workspaceScreens>();

const _Workspace = () => {
  return (
    <WorkspaceStackNav.Navigator>
      <WorkspaceStackNav.Screen name="Workspace" component={Workspace} />
      <WorkspaceStackNav.Screen name="_Teamlist" component={_Teamlist} />
    </WorkspaceStackNav.Navigator>
  );
};

export default _Workspace;
