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
        {done ? (
          <Octicons name="verified" color={colors.Primary[100]} size={24} />
        ) : (
          <AntDesign name="rocket1" color={colors.Primary[100]} size={24} />
        )}
        <Text style={styles.titleText}>{titleText}</Text>
      </View>

      {/* Button */}
      <View>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.valueText}>{valueText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
  titleWrapper: {
    padding: 10,
    borderRadius: 16,
    flexDirection: "row",
  },
  button: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 8,
  },
  pressed: {
    opacity: 0.5,
  },
  titleText: {
    color: colors.Primary[100],
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  valueText: {
    fontSize: 18,
    fontStyle: "italic",
    color: colors.Text[200],
    fontWeight: "300",
  },
});

export default TodayCTA;
