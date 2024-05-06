import TextField from "@mui/material/TextField";

export default function TextInputComponent({ inputLabel, minWidth }) {
  return (
    <TextField
      sx={{ minWidth: minWidth ?? `calc(${inputLabel.length}ch + 80px)` }}
      label={inputLabel}
      variant="outlined"
    />
  );
}
