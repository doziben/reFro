import { ColorValue } from "react-native";

export type color = string | ColorValue | undefined;

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
  Border: colorObj;
  info: colorObj;
  success: colorObj;
  warning: colorObj;
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
  Bg: { 100: "#F3F3F3", 200: "#F3EFE2" },
  Text: {
    100: "#7D849D",
    200: "#3D3D3D",
  },
  Border: { 100: "#EDEDED" },
  info: { 100: "#D5EDFB", 200: "#5D84E8" },
  success: { 100: "#E3FCF1", 200: "#0FA060" },
  warning: { 100: "#FCE6E5", 200: "#E87E5D" },
};

export default colors;
