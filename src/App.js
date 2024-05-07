import Dashboard from "./pages/Dashboard";
import NavBar from "./components/layouts/NavBar";
import "./style.scss";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./lib/mui/theme";
import Container from "@mui/material/Container";
import { useEffect } from "react";

function ScrollToTop() {
  return (
    <Button
      id="scroll-to-top"
      variant="contained"
      sx={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        borderRadius: "50%",
        overflow: "hidden",
        width: "50px",
        height: "60px",
        opacity: 0,
        pointerEvents: "none",
        transition: "all linear 0.3s",

        "&.show": {
          opacity: 1,
          pointerEvents: "all",
        },

        svg: {
          width: 1,
        },
      }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <svg viewBox="0 0 24 24">
        <path d="M6.41,16H17.59a1,1,0,0,0,.7-1.71L12.71,8.71a1,1,0,0,0-1.42,0L5.71,14.29A1,1,0,0,0,6.41,16Z" />
      </svg>
    </Button>
  );
}

function App() {
  useEffect(() => {
    function handleScroll() {
      var amountScrolled = 500;
      var backToTopButton = document.getElementById("scroll-to-top");

      if (window.scrollY > amountScrolled) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container maxWidth="xl">
          <NavBar />
          <Dashboard />
          <ScrollToTop />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
