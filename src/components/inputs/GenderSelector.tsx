import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

interface GenderSelectorProps {
  name: string;
  label: string;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({ name, label }) => {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Field name={name} as={Select} variant="outlined">
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Field>
        <ErrorMessage name={name} />
      </FormControl>
    </Box>
  );
};

export default GenderSelector;