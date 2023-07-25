import TextField, {TextFieldProps} from "@mui/material/TextField";

export default function InputBorderBottom(props: TextFieldProps) {
  return (
    <TextField variant="standard" fullWidth {...props} />
  );
}