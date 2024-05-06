import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEffect } from "react";

export default function TextInputComponent({
  id,
  inputLabel,
  minWidth,
  onChangeHandler,
}) {
  const [debounceTimer, setDebounceTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleOnChange(event) {
    if (debounceTimer) clearTimeout(debounceTimer);

    let value = null;

    if (event.target.value.trim().length > 0) {
      value = event.target.value.trim();
    }

    const debounceTimeout = setTimeout(() => {
      onChangeHandler(id, value);
    }, 500);

    setDebounceTimer(debounceTimeout);
  }

  return (
    <TextField
      sx={{ minWidth: minWidth ?? `calc(${inputLabel.length}ch + 80px)` }}
      label={inputLabel}
      variant="outlined"
      onChange={handleOnChange}
    />
  );
}
