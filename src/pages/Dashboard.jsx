import { Stack } from "@mui/material";
import JobFilter from "../features/jobFilter/JobFilter";

export default function Dashboard() {
  return (
    <Stack direction="column" sx={{ width: 1, height: 1, gap: "2em" }}>
      <JobFilter />
    </Stack>
  );
}
