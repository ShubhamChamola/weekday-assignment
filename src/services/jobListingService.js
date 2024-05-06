import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../lib/axios/api";
import URL from "../utils/url";
import store from "../lib/redux/store";

export const getJobsData = createAsyncThunk(
  "jobListing/getJobDataService",
  async () => {
    try {
      let offset = store.getState().jobListing.offset;

      let requestBody = {
        limit: 12,
        offset: offset,
      };

      let response = await Api.post(URL.jobListig.getJobData, requestBody);

      let jobData =
        response.data?.jdList?.map((job, index) => ({
          id: job?.jdUid ?? index,
          link: job?.jdLink ?? null,
          description: job?.jobDetailsFromCompany ?? null,
          maxSalary: job?.maxJdSalary ?? null,
          minSalary: job?.minJdSalary ?? null,
          currenyCode: job?.salaryCurrencyCode ?? null,
          location: job?.location ?? null,
          minExperience: job?.minExp ?? null,
          maxExperience: job?.maxExp ?? null,
          role: job?.jobRole ?? null,
          company: job?.companyName ?? null,
          logo: job?.logoUrl ?? null,
        })) ?? [];

      return jobData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
