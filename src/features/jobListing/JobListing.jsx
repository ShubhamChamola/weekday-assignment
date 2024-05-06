import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../../services/jobListingService";
import { selectJobListingStates } from "./jobListingSlice";
import { Status } from "../../utils/constants";

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

  return <Grid container spacing={2}></Grid>;
}
