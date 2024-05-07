import Box from "@mui/material/Box";
import LogoImage from "../../assets/logo.png";

function LogoContainer() {
  return (
    <Box
      sx={{
        width: "150px",
        mx: "auto",
        img: {
          width: 1,
          height: 1,
        },
      }}
    >
      <img src={LogoImage} alt="Weekday" />
    </Box>
  );
}

export default function NavBar() {
  return (
    <Box sx={{ mb: "40px" }}>
      <LogoContainer />
    </Box>
  );
}
