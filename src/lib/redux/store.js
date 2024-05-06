import { configureStore } from "@reduxjs/toolkit";
import jobFilterSlice from "../../features/jobFilter/jobFilterSlice";

const store = configureStore({
  reducer: {
    jobFilter: jobFilterSlice,
  },
});

export default store;
