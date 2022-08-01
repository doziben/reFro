import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CompanyInfo from "../../../components/account/CompanyInfo";
import ThemeSelector from "../../../components/account/ThemeSelector";
import UserInfo from "../../../components/account/UserInfo";
import PressableIcon from "../../../components/atoms/PressableIcon";
import Switch from "../../../components/atoms/Switch";
import colors from "../../../styles/colors";
import { text } from "../../../styles/text";
import { accountScreens } from "../../../types/navigation";

//* Get the name and id of the user from the appState  */
//* then fetch their details from backend and populate their detals here */

const companyEmail = "admin@refro.com";
const companyName = "frolancer";
const userAvatarUrl = require("../../../assets/avatars/3.png");
const userName = "Sola Sandra";
const userRole = "Designer";

type AccountScreen = NativeStackScreenProps<accountScreens, "Account">;
const Account = ({ navigation, route }: AccountScreen) => {
  //* Edit Account Handler */
  function editAccountHandler() {}

  //* Change Password Handler */
  function changePasswordHandler() {}

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {/* User Details */}
      <View style={[styles.marginHelper, styles.userDetailsWrapper]}>
        <UserInfo avatarUrl={userAvatarUrl} name={userName} role={userRole} />
        <PressableIcon name="edit-2" onPress={editAccountHandler} />
      </View>

      {/* Company Settings */}
      <View style={[styles.marginHelper]}>
        <Text style={styles.subHeadingtext}>Company</Text>
        <CompanyInfo
          email={companyEmail}
          name={companyName}
          // companyAvatarUrl={}
        />
      </View>

      {/* Misc Settings */}
      <View style={[styles.marginHelper]}>
        <Text style={styles.subHeadingtext}>Misc</Text>
        {/* CHange Password Button */}
        <Pressable
          onPress={changePasswordHandler}
          style={({ pressed }) => [pressed && styles.pressed]}
        >
          <View style={styles.changePasswordButton}>
            <MaterialCommunityIcons
              name="form-textbox-password"
              color={colors.Accent[200]}
              size={24}
            />
            <Text style={styles.changePasswordText}>Change Password</Text>
          </View>
        </Pressable>

        {/* Theme Toggler */}
        <ThemeSelector />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  marginHelper: {
    marginVertical: 12,
    marginHorizontal: 20,
  },
  userDetailsWrapper: {
    alignItems: "center",
  },
  subHeadingtext: {
    fontSize: text.subHeading.fontSize,
    fontWeight: "bold",
    marginBottom: 12,
  },
  changePasswordButton: {
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderWidth: 1,
    borderColor: colors.Border[100],
  },
  changePasswordText: {
    fontSize: 17,
    color: colors.Accent[200],
  },
  pressed: {
    opacity: 0.5,
  },
});

export default Account;
