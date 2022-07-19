import { TextStyle } from "react-native";

interface textObj {
  fontSize: number;
  lineHeight?: number;
}

interface text {
  heading: textObj;
  subHeading: textObj;
  large: textObj;
}

export const text: text = {
  heading: {
    fontSize: 40,
    lineHeight: 40,
  },
  subHeading: {
    fontSize: 24,
    lineHeight: 24,
  },
  large: {
    fontSize: 20,
  },
};
