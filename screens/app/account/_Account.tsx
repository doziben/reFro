import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { accountScreens } from "../../../types/navigation";
import Account from "./Account";

const AccountStackNav = createNativeStackNavigator<accountScreens>();

const _Account = () => {
  return (
    <AccountStackNav.Navigator>
      <AccountStackNav.Screen
        name="Account"
        component={Account}
        options={{
          headerLargeTitle: true,
        }}
      />
    </AccountStackNav.Navigator>
  );
};

export default _Account;
