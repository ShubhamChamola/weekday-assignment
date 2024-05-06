import Dashboard from "./pages/Dashboard";
import NavBar from "./components/layouts/NavBar";
import "./style.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./lib/mui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
