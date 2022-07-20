import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import HeadingText from "../../components/atoms/HeadingText";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import ToastModal from "../../components/atoms/ToastModal";
import SignUpForm, {
  signUpFormValues,
} from "../../components/forms/SignUpForm";
import useAppDispatch from "../../hooks/useAppDispatch";
import { AppSlice } from "../../store/AppSlice";
import { authScreens } from "../../types/navigation";

type SignUpScreen = NativeStackScreenProps<authScreens, "SignUp">;

const SignUp = ({ navigation, route }: SignUpScreen) => {
  const [formValues, setFormValues] = useState<signUpFormValues>();
  const [formErr, setFormErr] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const newUser = route.params?.newUser;

  const formIsValid =
    (formValues?.firstName && formValues.lastName && formValues.password) !==
    "";

  useEffect(() => {
    !newUser && navigation.replace("Login");
  }, [newUser]);

  const signUpHandler = () => {
    formIsValid
      ? (dispatch(
          AppSlice.actions.logIn({
            name: "Emeka",
            company: "Frolancer",
            newUser: false,
            uid: "FRO19J1155",
          })
        ),
        setFormErr(false))
      : setFormErr(true);
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

        {/* SignUp form */}
        <KeyboardAvoidingView>
          <SignUpForm submitHandler={(values) => setFormValues(values)} />

          {/* Error Toast Modal */}
          {formErr && (
            <ToastModal
              yourMessage="Jeez c'mon, we need ALL your details to sign you up.."
              type="warning"
            />
          )}
        </KeyboardAvoidingView>

        {/* SignUp Button */}
        <View style={[formErr ? styles.errState : styles.buttonWrapper]}>
          <PrimaryButton
            onPress={() => {
              signUpHandler();
            }}
            title="Continue"
            type="full"
          />
        </View>
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
    marginTop: 60,
  },
  errState: {
    marginTop: 16,
  },
});

export default SignUp;
