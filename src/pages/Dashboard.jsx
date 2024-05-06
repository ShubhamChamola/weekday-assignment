import { Stack } from "@mui/material";
import JobFilter from "../features/jobFilter/JobFilter";
import JobListing from "../features/jobListing/JobListing";

export default function Dashboard() {
  return (
    <Stack direction="column" sx={{ gap: "2em" }}>
      <JobFilter />
      <JobListing />
    </Stack>
  );
}
