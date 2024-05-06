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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobsData.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getJobsData.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.status = Status.Succeeded;
        state.offset = action.payload.length;
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

export default jobFilterSlice.reducer;
