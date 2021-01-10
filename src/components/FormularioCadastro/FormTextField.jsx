import React from 'react'
import { TextField } from '@material-ui/core'

const FormTextField = (props) => {
  const textFieldProps = Object.assign({}, props);
  textFieldProps.fullWidth = !textFieldProps.noFullWidth
  delete textFieldProps.noFullWidth
  return (
    <TextField
      {...textFieldProps}
      variant="outlined"
      margin="normal"
      required
    />
  );
}

export default FormTextField
