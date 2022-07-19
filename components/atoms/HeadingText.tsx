import { StyleSheet, Text } from "react-native";
import colors from "../../styles/colors";
import { text } from "../../styles/text";

interface headingText {
  title: string;
  middleWord?: string;
  lastWord: string;
  italics?: boolean;
  center?: boolean;
}

const HeadingText = ({
  title,
  lastWord,
  italics,
  center,
  middleWord,
}: headingText) => {
  return (
    <Text
      style={[
        styles.mainText,
        italics ? styles.italics : styles.bold,
        center && styles.center,
      ]}
    >
      {title} {middleWord && `${"\n"} ${middleWord}`} {""}
      <Text style={styles.innerText}>{lastWord}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  mainText: {
    lineHeight: text.heading.lineHeight,
    fontSize: text.heading.fontSize,
    color: colors.Primary[100],
  },
  innerText: {
    color: colors.Accent[300],
  },
  italics: {
    fontStyle: "italic",
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
});

export default HeadingText;
