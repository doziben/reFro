import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import HeadingText from "../../components/atoms/HeadingText";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import SignUpForm, {
  signUpFormValues,
} from "../../components/forms/SignUpForm";
import { authScreens } from "../../types/navigation";

type SignUpScreen = NativeStackScreenProps<authScreens, "SignUp">;

const SignUp = ({ navigation, route }: SignUpScreen) => {
  const [formValues, setFormValues] = useState<signUpFormValues>();
  const newUser = route.params?.newUser;

  useEffect(() => {
    !newUser && navigation.replace("Login");
  }, [newUser]);

  const signUpHandler = () => {
    //dispatch redux action of setting the userInfo as form values in appslice and setting auth to true
  };

  return (
    <>
      <ScrollView style={styles.wrapper}>
        {/* Heading Text */}
        <View style={styles.textWrapper}>
          <HeadingText
            title="Get Started"
            middleWord="on"
            lastWord="reFro"
            center
          />
        </View>

        <KeyboardAvoidingView>
          {/* SignUp form */}
          <SignUpForm submitHandler={(values) => setFormValues(values)} />

          {/* Button */}
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              onPress={() => {
                signUpHandler();
              }}
              title="Continue"
              type="full"
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  textWrapper: {
    marginVertical: 24,
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  buttoWrapper: {},
});

export default SignUp;
