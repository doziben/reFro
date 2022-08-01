import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PressableIcon from "../../../components/atoms/PressableIcon";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { AppSlice } from "../../../store/AppSlice";
import colors from "../../../styles/colors";
import { accountScreens } from "../../../types/navigation";
import Account from "./Account";
import ChangePassword from "./ChangePassword";
import EditAccount from "./EditAccount";

const AccountStackNav = createNativeStackNavigator<accountScreens>();

const _Account = () => {
  const dispatch = useAppDispatch();

  //** LogOut Handler */
  function logOutHandler() {
    dispatch(AppSlice.actions.logOut());
  }
  return (
    <AccountStackNav.Navigator>
      <AccountStackNav.Screen
        name="Account"
        component={Account}
        options={{
          headerLargeTitle: true,
          headerStyle: { backgroundColor: "#F3F3F3" },
          headerRight: ({}) => {
            return (
              <PressableIcon
                name="log-out"
                onPress={logOutHandler}
                color={colors.warning[200]}
              />
            );
          },
        }}
      />

      <AccountStackNav.Group
        screenOptions={{
          presentation: "modal",
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <AccountStackNav.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ title: "Change Password" }}
        />
        <AccountStackNav.Screen
          name="EditAccount"
          component={EditAccount}
          options={{ title: "Edit Account" }}
        />
      </AccountStackNav.Group>
    </AccountStackNav.Navigator>
  );
};

export default _Account;
