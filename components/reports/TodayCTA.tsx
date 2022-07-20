import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
import colors from "../../styles/colors";

interface todayCTAProps {
  done: boolean;
  values: string | undefined;
  onPress: (e: GestureResponderEvent) => void;
}

const TodayCTA = ({ done, values, onPress }: todayCTAProps) => {
  let titleText: string | undefined = "What did you achieve today?";
  let valueText: string | undefined = "Tell us..";
  let titleWrapperColor = colors.Accent[300];

  if (done) {
    titleText = "You achieved";
    valueText = values;
    titleWrapperColor = colors.Accent[100];
  }
  return (
    <View style={[styles.wrapper]}>
      {/* Title */}
      <View
        style={[styles.titleWrapper, { backgroundColor: titleWrapperColor }]}
      >
        <Text style={styles.titleText}>{titleText}</Text>
        {done ? (
          <Octicons name="verified" color={colors.Primary[100]} size={24} />
        ) : (
          <AntDesign name="rocket1" color={colors.Primary[100]} size={24} />
        )}
      </View>

      {/* Button */}
      <View>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text>{valueText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
  titleWrapper: {},
  button: {},
  pressed: {},
  titleText: {},
  valueText: {},
});

export default TodayCTA;
