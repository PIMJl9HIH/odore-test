import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextField, Box } from '@mui/material';

interface PasswordInputProps {
  name: string;
  label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, label }) => {
  return (
    <Box>
      <Field
        name={name}
        type="password"
        label={label}
        as={TextField}
        fullWidth
        variant="outlined"
        helperText={<ErrorMessage name={name} />}
      />
    </Box>
  );
};

export default PasswordInput;