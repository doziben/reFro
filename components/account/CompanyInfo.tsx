import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../styles/colors";
import PressableIcon from "../atoms/PressableIcon";

interface CompanyInfoProps {
  companyAvatarUrl?: ImageSourcePropType;
  name: string;
  email: string;
}

const CompanyInfo = ({ email, name, companyAvatarUrl }: CompanyInfoProps) => {
  const defaultAvatarUrl = require("../../assets/avatars/defaultCompanyAvatar.png");
  const avatarUrl = companyAvatarUrl ? companyAvatarUrl : defaultAvatarUrl;
  return (
    <View style={styles.wrapper}>
      {/* Details Wrapper */}
      <View style={styles.detailsWrapper}>
        <Image source={avatarUrl} style={styles.companyAvatar} />
        {/* Name Wrapper */}
        <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.emailText}>{email}</Text>
        </View>
      </View>

      {/* Icon Wrapper */}
      <View style={styles.iconWrapper}>
        <PressableIcon
          name="message-square"
          onPress={() => {}}
          color={colors.Accent[200]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.Border[100],
  },
  detailsWrapper: {
    flexDirection: "row",
  },
  nameWrapper: {
    marginLeft: 8,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.Border[100],
  },
  companyAvatar: {
    width: 40,
    height: 40,
  },
  nameText: {
    fontSize: 17,
  },
  emailText: {
    color: colors.Text[100],
  },
});

export default CompanyInfo;
