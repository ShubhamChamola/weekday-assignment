import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";

export default function SelectInputComponent({
  id,
  isMultiSelectInput = false,
  options,
  inputLabel,
  filterSelected = true,
  minWidth = null,
  allowCustomValue = false,
  onChangeHandler,
}) {
  return (
    <Autocomplete
      freeSolo={allowCustomValue}
      filterSelectedOptions={filterSelected}
      multiple={isMultiSelectInput}
      options={options}
      getOptionLabel={(option) => option}
      onChange={(_, value) => {
        onChangeHandler(id, value);
      }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option}>
            {option}
          </li>
        );
      }}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip {...getTagProps({ index })} key={option} label={option} />
        ));
      }}
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
