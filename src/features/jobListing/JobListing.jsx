import { Grid, Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../../services/jobListingService";
import { selectJobListingStates } from "./jobListingSlice";
import { Status } from "../../utils/constants";
import JobCard from "../../components/ui/JobCard";
import Skeleton from "@mui/material/Skeleton";
import NoDataFound from "../../assets/no-data-found.png";

function LoadingSkeleton() {
  return (
    <Box>
      <Grid container spacing={5}>
        {Array.from({ length: 12 }, (_, index) => index + 1).map((index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
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
              <Stack
                direction={"row"}
                sx={{ gap: "20px", alignItems: "center" }}
              >
                <Skeleton
                  variant="circular"
                  sx={{ flexShrink: 0, width: "60px", height: "60px" }}
                ></Skeleton>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: 1,
                    height: "70%",
                  }}
                ></Skeleton>
              </Stack>
              <Stack
                direction={"column"}
                sx={{ gap: "10px", mt: "20px", height: "250px" }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: 1, height: 1 }}
                ></Skeleton>
              </Stack>

              <Skeleton
                sx={{
                  width: 1,
                  height: "80px",
                  mt: "20px",
                  borderRadius: "5px",
                }}
              ></Skeleton>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

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
    console.log(jobs, status);
  }, [jobs]);

  if (status !== Status.Succeeded && jobs.length === 0) {
    return <LoadingSkeleton />;
  }

  if (jobs.length === 0 && status === Status.Succeeded) {
    return (
      <Box
        sx={{
          mt: "80px",
          gap: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          img: {
            width: 1,
            maxWidth: "250px",
          },
        }}
      >
        <img src={NoDataFound} alt="No Jobs Found" />
        <Typography variant="h3" color="initial">
          No Jobs available for this category at the moment
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={5}>
        {jobs.map((job) => (
          <Grid key={job.id} item xs={12} sm={6} md={4} lg={3}>
            <JobCard {...job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
