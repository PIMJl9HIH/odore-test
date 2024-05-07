import React from "react";
import * as Yup from "yup";
import UsernameInput from "../../components/inputs/UsernameInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import UserForm from "../../components/forms/UserForm";
import {submitSignUpForm} from '../../helpers'

const SignUpForm: React.FC= () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values: typeof initialValues) => {
    await submitSignUpForm("API_ENDPOINT_URL_1", values);
    console.log("values", values);
  };

  return (

<UserForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
<UsernameInput name="username" label="Username" />
<PasswordInput name="password" label="Password" />
</UserForm>
  );
};

export default SignUpForm;
