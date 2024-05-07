
import React from "react";
import * as Yup from "yup";
import {UsernameInput, GenderSelector, PasswordInput} from '../../components/inputs'
import {UserForm} from '../../components/forms'
import { submitSignUpForm } from "../../helpers.ts";
import {SignUpFormData} from '../../types/general.ts'

const SignUpFormExtended: React.FC = () => {
  const initialValues = {
    username: "",
    password: "",
    gender: "", 
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    gender: Yup.string().required("Gender is required"), // Include gender in validation schema
  });

  const onSubmit = async (values: SignUpFormData) => {
    await submitSignUpForm("API_ENDPOINT_URL_2", values);
  };

  return (
    <UserForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <UsernameInput name="username" label="Username" />
      <PasswordInput name="password" label="Password" />
      <GenderSelector name="gender" label="Gender" />
    </UserForm>
  );
};

export default SignUpFormExtended;
