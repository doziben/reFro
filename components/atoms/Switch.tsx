import { useState } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import colors from "../../styles/colors";

interface SwitchProps {
  on: boolean;
  onHandler: (e: GestureResponderEvent) => void;
  offHandler: (e: GestureResponderEvent) => void;
}

const Switch = ({ on, onHandler, offHandler }: SwitchProps) => {
  const [switchState, setSwitchState] = useState<boolean>(on);
  return (
    <Pressable
      onPress={() => {
        setSwitchState((prev) => !prev);
      }}
    >
      <View style={[styles.wrapper, switchState && styles.onState]}>
        <View style={styles.switchKnob}></View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: 72,
    borderRadius: 100,
    padding: 6,
    backgroundColor: colors.Bg[100],
  },
  switchKnob: {
    borderRadius: 50,
    backgroundColor: colors.Primary[100],
    width: 24,
    height: 24,
  },
  onState: {
    backgroundColor: colors.Accent[100],
    justifyContent: "flex-end",
  },
});

export default Switch;
