import Dashboard from "./pages/Dashboard";
import NavBar from "./components/layouts/NavBar";
import "./style.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./lib/mui/theme";
import Container from "@mui/material/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container maxWidth="xl" sx={{ height: 1 }}>
          <NavBar />
          <Dashboard />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
