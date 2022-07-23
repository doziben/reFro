import { GestureResponderEvent } from "react-native";

//will dispatch the action to show modal for options
export interface SelectOptionItemProps {
  name: string;
  function: (e: GestureResponderEvent) => void;
}

export interface SelectOptionProps {
  options: SelectOptionItemProps[];
  title: string;
}
