import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SelectInputComponent({
  isMultiSelectInput = false,
  options,
  inputLabel,
  inputPlaceholder,
}) {
  return (
    <Autocomplete
      multiple={isMultiSelectInput}
      options={options}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={inputLabel}
          placeholder={inputPlaceholder}
        />
      )}
    />
  );
}
