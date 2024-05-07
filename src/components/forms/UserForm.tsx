import React from "react";
import { Button, Box } from "@mui/material";
import { FormikProvider, Form, useFormik, FormikHelpers } from "formik";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import { SignUpFormData } from "../../types/general";

interface UserFormProps {
  initialValues: SignUpFormData; // Define the type for initial values
  validationSchema: Yup.ObjectSchema<any>; // Define the type for validation schema
  onSubmit: (
    values: SignUpFormData,
    actions: FormikHelpers<SignUpFormData>
  ) => Promise<void>; // Define the type for onSubmit function
  children: React.ReactNode;
}

const UserForm: React.FC<UserFormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        await onSubmit(values, actions);
        enqueueSnackbar("Form submitted successfully", { variant: "success" });
      } catch (error) {
        actions.setSubmitting(false); // Reset form submission state
        enqueueSnackbar("Failed to submit form " + JSON.stringify(values), {
          variant: "error",
        });
      } finally {
        actions.setSubmitting(false); // Reset form submission state
        actions.resetForm(); // Reset form inputs
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Box sx={{ margin: "20px" }}>{children}</Box>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Submit
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default UserForm;
