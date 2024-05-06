import { Box, Button, Stack, Typography } from "@mui/material";
import { toCapitalize } from "../../utils/helperFunctions";

export default function JobCard({
  logo,
  company,
  role,
  location,
  currenyCode,
  minSalary,
  maxSalary,
  description,
  link,
  minExperience,
}) {
  return (
    <Stack
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
        borderRadius: "20px",
        padding: "20px",
        height: 1,
        transition: "all linear 0.3s",

        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      {/* About Company & Role */}
      <Stack direction={"row"} sx={{ gap: "20px" }}>
        <Box
          sx={{ width: "60px", img: { borderRadius: "5px", display: "block" } }}
        >
          <img src={logo} alt={company} />
        </Box>
        <Box>
          <Typography variant="h4">{company}</Typography>
          <Typography variant="body1">{toCapitalize(role)}</Typography>
          <Typography variant="body2">{toCapitalize(location)}</Typography>
        </Box>
      </Stack>
      {/* Salary, About Comapny & Experience */}
      <Stack direction={"column"} sx={{ gap: "10px", mt: "20px" }}>
        <Typography variant="h5">
          Estimated Salary: {currenyCode === "USD" ? "$" : "\u20B9"}
          {minSalary && `${minSalary}${currenyCode === "USD" ? "K" : "L"} - `}
          {maxSalary && `${maxSalary}${currenyCode === "USD" ? "K" : "L"}`}
        </Typography>
        <Typography variant="h3" sx={{ mb: "-5px" }}>
          About Company
        </Typography>
        <Box
          sx={{
            maskImage:
              "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
            maxHeight: "250px",
          }}
        >
          <Typography variant="body2">{description}</Typography>
        </Box>
        <a href={link}>View job</a>
        {minExperience && (
          <Box sx={{ mt: "10px" }}>
            <Typography variant="h4" sx={{ fontWeight: 400 }}>
              Minimum Experience
            </Typography>
            <Typography variant="body1">{minExperience} years</Typography>
          </Box>
        )}
      </Stack>
      <Box
        sx={{
          flexGrow: 1,
          mt: "20px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Button
          disableElevation
          variant="contained"
          sx={{
            a: {
              color: "black",
              fontWeight: 400,
              fontSize: "1rem",
            },
          }}
        >
          <a href={link}>{"\u26A1"} Easy Apply</a>
        </Button>
      </Box>
    </Stack>
  );
}
