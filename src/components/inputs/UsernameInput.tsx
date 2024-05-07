import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextField, Box } from '@mui/material';

interface UsernameInputProps {
  name: string;
  label: string;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ name, label }) => {
  return (
    <Box>
      <Field
        name={name}
        type="text"
        label={label}
        as={TextField}
        fullWidth
        variant="outlined"
        helperText={<ErrorMessage name={name} />}
      />
    </Box>
  );
};

export default UsernameInput;