import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useState } from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import OnboardingSlide from "../../components/onboarding/OnboardingSlide";
import colors from "../../styles/colors";
import { authScreens } from "../../types/navigation";

//OnboardingSlides Component
//Will take in Title, TextColor="dark" | "light"

//Status Component
//props OnEnd => PageSlidingFn , Active={pageState === 1}
//When active? Increase width of inner bar, when innerBarWidth === outerBarWidth, run onEndfn

//Background, State===3? bg-dark : bg-light

/* Create the second onboarding screen and move onto sign up */

type OnboardingScreen = NativeStackScreenProps<authScreens, "Onboarding">;
type SlideState = 1 | 2 | 3;

const Onboarding = ({}: OnboardingScreen) => {
  const [slideState, setSlideState] = useState<SlideState>(3);
  const backgroundIsDark = slideState === 3;

  const navigation = useNavigation<OnboardingScreen["navigation"]>();

  //Get the ID and status when the app is opened and if its a new user,
  //pass in true to the route params
  const getStartedHandler = () => {
    navigation.navigate("SignUp", { newUser: true });
  };

  const SlideC: JSX.Element = (
    <OnboardingSlide
      shade="dark"
      title="See reports from team members"
      image={
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="contain"
            source={require("../../assets/onboardingImgs/onboarding-3.png")}
            style={{ width: "85%", height: "85%", marginTop: -10 }}
          />
        </View>
      }
    />
  );

  return (
    <>
      {/* Page Bar */}
      <ExpoStatusBar style={backgroundIsDark ? "light" : "auto"} />
      <View
        style={[styles.wrapper, backgroundIsDark ? styles.dark : styles.light]}
      >
        {/* Slides */}
        {slideState === 3 && SlideC}

        {/* Button */}
        <View style={styles.buttonWrapper}>
          <PrimaryButton
            title="Get Started"
            icon="chevrons-right"
            onPress={getStartedHandler}
            type="aside"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  buttonWrapper: {
    top: "-8%",
    marginHorizontal: 20,
  },
  dark: {
    backgroundColor: colors.Primary[100],
  },
  light: {
    backgroundColor: "",
  },
  imageWrapper: {
    width: "100%",
    alignItems: "center",
  },
});
export default Onboarding;
