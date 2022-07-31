import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../styles/colors";

//will dispatch the action to show modal for options
//Create the UI and use in report list in today screen
//OnClick fn to dispatch modal action in the authmanager screen
//Render modal in authmanager

export interface SelectOptionItemProps {
  name: string;
  function: (e: GestureResponderEvent) => void;
}

export interface SelectOptionProps {
  options: SelectOptionItemProps[];
  title: string;
}

const SelectOption = ({}: SelectOptionProps) => {
  return (
    <View>
      <Pressable>
        <View style={styles.innerWrapper}>
          <Text>This Week</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  innerWrapper: {
    padding: 8,
    borderRadius: 100,
    borderColor: colors.Text[100],
    borderWidth: 1,
  },
  pressable: {},
});

export default SelectOption;
