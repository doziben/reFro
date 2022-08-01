//* Smart component that manages theme state in the app */

import { View, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import Switch from "../atoms/Switch";

const ThemeSelector = () => {
  const darkModeEnabled = false;
  let status = darkModeEnabled ? "Off" : "On";

  //* DarkMode */
  function darkModeToggler() {}
  return (
    <View style={styles.wrapper}>
      {/* Text Wrapper */}
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>Dark Theme</Text>
        <Text style={styles.statusText}>{status}</Text>
      </View>

      <Switch
        on={darkModeEnabled}
        onHandler={darkModeToggler}
        offHandler={darkModeToggler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: "white",
    borderColor: colors.Border[100],
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textWrapper: {},
  titleText: {
    fontSize: 17,
  },
  statusText: {
    color: colors.Text[100],
  },
});

export default ThemeSelector;
