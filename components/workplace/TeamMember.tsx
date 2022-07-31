import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export interface TeamMemberAvatarProps {
  name: string;
  id: string;
  avatarUrl: ImageSourcePropType;
  onPress: (e: GestureResponderEvent) => void;
}

const TeamMemberAvatar = ({
  name,
  id,
  avatarUrl,
  onPress,
}: TeamMemberAvatarProps) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed, styles.wrapper]}
      >
        <Image style={styles.avatar} source={avatarUrl} />
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 4,
  },
  avatar: {
    width: 106,
    height: 106,
    marginBottom: 4,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default TeamMemberAvatar;
