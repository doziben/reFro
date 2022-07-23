import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import TextBox from "../atoms/TextBox";

interface SignInFormValues {
  companyId: string | number;
  emailAddress: string | number;
  password: string | number;
}
interface SignInFormProps {
  submitHandler: (values: SignInFormValues) => void;
}

const SignInForm = ({ submitHandler }: SignInFormProps) => {
  const [formValues, setFormValues] = useState<SignInFormValues>({
    companyId: "",
    emailAddress: "",
    password: "",
  });

  //* Passing the form values to sign up page *//
  useEffect(() => {
    submitHandler(formValues);
  }, [formValues]);

  return (
    <View style={styles.wrapper}>
      <TextBox
        placeHolder="Company ID"
        type="form"
        rounded="top"
        onChangeText={(text) =>
          setFormValues((prev) => {
            return { ...prev, companyId: text };
          })
        }
      />
      <TextBox
        placeHolder="Email Address"
        type="form"
        rounded="none"
        onChangeText={(text) =>
          setFormValues((prev) => {
            return { ...prev, emailAddress: text };
          })
        }
        extraInputOptions={{ autoCapitalize: "none", autoCorrect: false }}
      />
      <TextBox
        placeHolder="Password"
        type="form"
        rounded="bottom"
        onChangeText={(text) =>
          setFormValues((prev) => {
            return { ...prev, password: text };
          })
        }
        extraInputOptions={{
          secureTextEntry: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
});

export { SignInFormValues };

export default SignInForm;
