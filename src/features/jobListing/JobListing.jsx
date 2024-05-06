import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../../services/jobListingService";
import { selectJobListingStates } from "./jobListingSlice";
import { Status } from "../../utils/constants";
import JobCard from "../../components/ui/JobCard";

export default function JobListing() {
  const dispatch = useDispatch();

  const { jobs, status, error } = useSelector(selectJobListingStates);

  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getJobsData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  return (
    <Grid container spacing={5}>
      {jobs.map((job) => (
        <Grid key={job.id} item xs={12} sm={6} md={4} lg={3}>
          <JobCard {...job} />
        </Grid>
      ))}
    </Grid>
  );
}
