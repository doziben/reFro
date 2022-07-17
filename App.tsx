import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import _App from "./screens/app/_App";
import _Auth from "./screens/auth/_Auth";

//** Navigators are prefixed with _  **/

const isLoggedIn = false;

export default function App() {
  return (
    <NavigationContainer>
      {isLoggedIn ? <_App /> : <_Auth />}
    </NavigationContainer>
  );
}
