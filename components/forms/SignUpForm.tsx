import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import TextBox from "../atoms/TextBox";

interface signUpFormValues {
  firstName: string | number;
  lastName: string | number;
  password: string | number;
}
interface signUpFormProps {
  submitHandler: (values: signUpFormValues) => void;
}

const SignUpForm = ({ submitHandler }: signUpFormProps) => {
  const [formValues, setFormValues] = useState<signUpFormValues>({
    firstName: "",
    lastName: "",
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
            return { ...prev, firstName: text };
          })
        }
      />
      <TextBox
        placeHolder="Email Address"
        type="form"
        rounded="none"
        onChangeText={(text) =>
          setFormValues((prev) => {
            return { ...prev, lastName: text };
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

export { signUpFormValues };

export default SignUpForm;
