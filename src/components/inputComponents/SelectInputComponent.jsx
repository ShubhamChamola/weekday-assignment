import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SelectInputComponent({
  isMultiSelectInput = false,
  options,
  inputLabel,
  filterSelected = true,
  minWidth = null,
}) {
  return (
    <Autocomplete
      sx={{
        ".MuiFormLabel-root": {
          fontSize: "0.8rem",
        },
      }}
      filterSelectedOptions={filterSelected}
      multiple={isMultiSelectInput}
      options={options}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          variant="outlined"
          label={inputLabel}
          sx={{ minWidth: minWidth ?? `calc(${inputLabel.length}ch + 80px)` }}
        />
      )}
    />
  );
}
