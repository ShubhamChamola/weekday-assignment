import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Lexend", sans-serif',
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          height: "fit-content",
        },

        inputRoot: {
          borderRadius: "5px",
          width: "100%",
          gap: "5px",
          fontSize: "0.8rem",
          padding: "5px 10px",
        },

        tag: {
          padding: "4px 6px",
          fontSize: "0.75rem",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: 0,

          ".MuiChip-label": {
            padding: 0,
          },

          ".MuiSvgIcon-root": {
            width: "18px",
            height: "18px",
            margin: 0,
          },
        },

        option: {
          fontSize: "0.8rem",
        },

        paper: {
          borderRadius: "5px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px",
          marginTop: "5px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: { fontSize: "0.8rem" },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: "5px 10px",
          borderRadius: "5px !important",
          height: "100%",
          input: {
            padding: 0,
            fontSize: "0.8rem",
          },
        },
      },
    },
  },
});

export default theme;
