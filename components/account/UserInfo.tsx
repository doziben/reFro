import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../styles/colors";

interface UserInfoProps {
  name: string;
  role: string;
  avatarUrl: ImageSourcePropType;
}

const UserInfo = ({ name, role, avatarUrl }: UserInfoProps) => {
  return (
    <View style={styles.wrapper}>
      <Image source={avatarUrl} style={styles.avatar} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.roleText}>{role.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginVertical: 12,
  },
  avatar: {
    height: 80,
    width: 80,
    marginBottom: 12,
  },
  nameText: {
    fontSize: 17,
  },
  roleText: {
    color: colors.Text[100],
  },
});
export default UserInfo;
