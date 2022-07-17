import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { authScreens } from "../../types/navigation";

//OnboardingSlides Component
//Will take in Title, TextColor="dark" | "light"

//Status Component
//props OnEnd => PageSlidingFn , Active={pageState === 1}
//When active? Increase width of inner bar, when innerBarWidth === outerBarWidth, run onEndfn

//Background, State===3? bg-dark : bg-light
type OnboardingScreen = NativeStackScreenProps<authScreens, "Onboarding">;

const Onboarding = ({}: OnboardingScreen) => {
  return (
    <>
      <View></View>
    </>
  );
};

export default Onboarding;
