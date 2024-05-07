import { Stack, Box } from "@mui/material";
import JobFilter from "../features/jobFilter/JobFilter";
import JobListing from "../features/jobListing/JobListing";

export default function Dashboard() {
  return (
    <Stack sx={{ gap: "50px", width: 1, height: 1 }}>
      <JobFilter />
      <JobListing />
    </Stack>
  );
}
