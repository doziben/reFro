import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";

interface slideProps {
  title: string;
  shade: "dark" | "light";
  image: JSX.Element;
}

const OnboardingSlide = ({ title, shade, image }: slideProps) => {
  const textIsWhite = shade === "light";

  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, textIsWhite ? styles.light : styles.dark]}>
          {title}
        </Text>
      </View>

      <View style={[styles.textWrapper]}>{image}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, marginTop: "30%" },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    maxWidth: 284,
  },
  textWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 5,
  },
  imageWrapper: {},
  dark: { color: "white" },
  light: { color: colors.Primary[100] },
});
export default OnboardingSlide;
