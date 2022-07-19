import { ColorValue } from "react-native";

type color = string | ColorValue | undefined;

interface colorObj {
  100: color;
  200?: color;
  300?: color;
  400?: color;
}
interface colors {
  Primary: colorObj;
  Accent: colorObj;
  Bg: colorObj;
  Text: colorObj;
}

const colors: colors = {
  Primary: {
    100: "#352069",
  },
  Accent: {
    100: "#15E186",
    200: "#5D84E8",
    300: "#07B8F8",
  },
};

export default colors;
