import { configureStore } from "@reduxjs/toolkit";
import jobFilterSlice from "../../features/jobFilter/jobFilterSlice";
import jobListingSlice from "../../features/jobListing/jobListingSlice";

const store = configureStore({
  reducer: {
    jobFilter: jobFilterSlice,
    jobListing: jobListingSlice,
  },
});

export default store;
