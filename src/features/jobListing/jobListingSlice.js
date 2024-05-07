import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../utils/constants";
import { getJobsData } from "../../services/jobListingService";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  status: Status.Idle,
  error: null,
  jobs: [],
  offset: 0,
  totalJobs: null,
};

export const jobFilterSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    triggerJobFetch: (state) => {
      if (state.status === Status.Succeeded) {
        console.log("djnsf");
        state.status = Status.Idle;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobsData.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getJobsData.fulfilled, (state, action) => {
        if (action.payload.jobData.length > 0) {
          state.jobs = state.jobs.concat(action.payload.jobData);
        }
        state.totalJobs = action.payload.totalJobs;

        state.status = Status.Succeeded;
        state.offset = state.jobs.length;
      })
      .addCase(getJobsData.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.error;
      });
  },
});

export const selectJobListingStates = createSelector(
  (state) => state.jobFilter,
  (state) => state.jobListing.jobs,
  (state) => state.jobListing.status,
  (state) => state.jobListing.error,
  (state) => state.jobListing.offset,
  (state) => state.jobListing.totalJobs,

  (filter, jobs, status, error, offset, totalJobs) => {
    // console.log(filter);
    let filteredJobs = jobs.filter((job) => {
      // Filter by company
      if (
        filter.company &&
        filter.company.trim().length > 0 &&
        job.company.toLowerCase() !== filter.company.toLowerCase()
      ) {
        return false;
      }

      // Filter by experience
      // if (filter.experience && job.experience !== filter.experience) {
      //   return false;
      // }

      // // Filter by jobPreference
      // if (filter.jobPreference && job.jobPreference !== filter.jobPreference) {
      //   return false;
      // }

      // // Filter by location
      // if (
      //   filter.location.length > 0 &&
      //   !filter.location.includes(job.location)
      // ) {
      //   return false;
      // }

      // // Filter by pay
      // if (filter.pay && job.pay !== filter.pay) {
      //   return false;
      // }

      // // Filter by roles
      // if (
      //   filter.roles.length > 0 &&
      //   !filter.roles.some((role) => job.roles.includes(role))
      // ) {
      //   return false;
      // }

      // // Filter by techStack
      // if (
      //   filter.techStack.length > 0 &&
      //   !filter.techStack.some((stack) => job.techStack.includes(stack))
      // ) {
      //   return false;
      // }

      return true; // Job matches all filters
    });
    return {
      jobs: filteredJobs,
      status,
      error,
      offset,
      totalJobs,
    };
  }
);

export const { triggerJobFetch } = jobFilterSlice.actions;

export default jobFilterSlice.reducer;
