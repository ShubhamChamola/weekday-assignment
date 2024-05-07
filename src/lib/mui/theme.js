import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Lexend", sans-serif',
    h3: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "black",
      marginBottom: "0.25em",
    },
    h4: {
      fontSize: "0.9rem",
      fontWeight: 600,
      color: "rgb(139, 139, 139)",
      marginBottom: "0.15em",
    },
    h5: {
      fontSize: "0.9rem",
      fontWeight: 400,
      color: "rgb(77, 89, 106)",
      marginBottom: "0.15em",
    },
    body1: {
      fontSize: "1rem",
      color: "black",
      fontWeight: 300,
      marginBottom: "0.2em",
    },
    body2: {
      fontSize: "0.85rem",
      color: "black",
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          borderRadius: "5px",
          width: "100%",
          gap: "5px",
          fontSize: "0.8rem",
          padding: "10px 10px",
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
          padding: "10px 10px",
          borderRadius: "5px !important",
          height: "100%",
          input: {
            padding: "8px 10px !important",
            fontSize: "0.8rem",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontWeight: 400,
          fontSize: "1rem",
          width: "100%",
          padding: "10px 20px",

          "&:hover": {
            backgroundColor: "rgb(85, 239, 196)",
          },
        },
        contained: {
          backgroundColor: "rgb(85, 239, 196)",
          color: "black",
        },
      },
    },
  },
});

export default theme;
