import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../utils/constants";
import { getJobsData } from "../../services/jobListingService";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  status: Status.Idle,
  error: null,
  jobs: [],
  offset: 0,
};

export const jobFilterSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    triggerJobFetch: (state, action) => {
      if (state.status === Status.Succeeded && state.status !== Status.Failed) {
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
        if (action.payload.length > 0) {
          state.jobs = state.jobs.concat(action.payload);
        }

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
  (state) => state.jobListing.jobs,
  (state) => state.jobListing.status,
  (state) => state.jobListing.error,

  (jobs, status, error) => {
    return {
      jobs,
      status,
      error,
    };
  }
);

export const { triggerJobFetch } = jobFilterSlice.actions;

export default jobFilterSlice.reducer;
