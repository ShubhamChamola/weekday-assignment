import { Stack } from "@mui/material";
import React from "react";
import SelectInputComponent from "../../components/inputComponents/SelectInputComponent";
import {
  RolesOption,
  JobPrefOption,
  ExperienceOption,
  MinBasePayOption,
} from "../../utils/constants";
import TextInputComponent from "../../components/inputComponents/TextInputComponent";
import store from "../../lib/redux/store";
import { setJobFilters } from "./jobFilterSlice";

export default function JobFilter() {
  function filterChangeHandler(filterId, value) {
    store.dispatch(setJobFilters({ filterId, value }));
  }

  return (
    <Stack direction="row" sx={{ width: 1, flexWrap: "wrap", gap: "1em" }}>
      <SelectInputComponent
        id="roles"
        inputLabel={"Roles"}
        options={RolesOption}
        isMultiSelectInput={true}
        minWidth="150px"
        allowCustomValue={true}
        onChangeHandler={filterChangeHandler}
      />
      <SelectInputComponent
        id="experience"
        inputLabel={"Experience"}
        options={ExperienceOption}
        filterSelected={false}
        minWidth="120px"
        onChangeHandler={filterChangeHandler}
      />
      <SelectInputComponent
        id="pay"
        inputLabel={"Min Base Pay"}
        options={MinBasePayOption}
        filterSelected={false}
        minWidth="150px"
        onChangeHandler={filterChangeHandler}
      />
      <TextInputComponent
        id="company"
        inputLabel="Company Name"
        minWidth="150px"
        onChangeHandler={filterChangeHandler}
      />
      <SelectInputComponent
        id="jobPreference"
        inputLabel="Job Preference"
        isMultiSelectInput={true}
        options={JobPrefOption}
        minWidth="150px"
        onChangeHandler={filterChangeHandler}
      />
      <SelectInputComponent
        id="location"
        allowCustomValue={true}
        isMultiSelectInput={true}
        inputLabel="Location"
        options={[]}
        minWidth="150px"
        onChangeHandler={filterChangeHandler}
      />
      <SelectInputComponent
        id="techStack"
        allowCustomValue={true}
        isMultiSelectInput={true}
        inputLabel="Tech Stack"
        options={[]}
        minWidth="250px"
        onChangeHandler={filterChangeHandler}
      />
    </Stack>
  );
}
