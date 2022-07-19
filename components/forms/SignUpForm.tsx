import { View } from "react-native";

interface signUpFormValues {
  firstName: string;
  lastName: string;
  password: string;
}
interface signUpFormProps {
  submitHandler: (values: signUpFormValues) => void;
}

const SignUpForm = ({}: signUpFormProps) => {
  //parent form passes state to the currentPage
  //Sets the states of the data into an object like values

  return <View></View>;
};

export { signUpFormValues };

export default SignUpForm;
