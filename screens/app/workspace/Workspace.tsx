import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { workspaceScreens } from "../../../types/navigation";
import { View } from "react-native";

type WorkspaceScreen = NativeStackScreenProps<workspaceScreens, "Workspace">;

const Workspace = ({}: WorkspaceScreen) => {
  return <View></View>;
};

export default Workspace;
