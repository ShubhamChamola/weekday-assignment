import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  experience: null,
  pay: null,
  company: null,
  jobPreference: null,
  location: [],
  techStack: [],
};

export const jobFilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setJobFilters: (state, action) => {
      const { filterId, value } = action.payload;
      state[filterId] = value;
    },
  },
});

export const { setJobFilters } = jobFilterSlice.actions;

export default jobFilterSlice.reducer;
