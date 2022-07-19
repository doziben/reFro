import useAppSelector from "../hooks/useAppSelector";
import { NavigationContainer } from "@react-navigation/native";
import _Auth from "../screens/auth/_Auth";
import _App from "../screens/app/_App";

const AuthManager = () => {
  const AppState = useAppSelector((store) => {
    return store.app;
  });

  const isLoggedIn = AppState.auth;

  return (
    <NavigationContainer>
      {isLoggedIn ? <_App /> : <_Auth />}
    </NavigationContainer>
  );
};

export default AuthManager;
