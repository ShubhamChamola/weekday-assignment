import { Box, Stack } from "@mui/material";
import React from "react";
import SelectInputComponent from "../../components/inputComponents/SelectInputComponent";
import {
  RolesOption,
  JobPrefOption,
  ExperienceOption,
  MinBasePayOption,
} from "../../utils/constants";
import TextInputComponent from "../../components/inputComponents/TextInputComponent";

export default function JobFilter() {
  return (
    <Stack direction="row" sx={{ width: 1, flexWrap: "wrap", gap: "1em" }}>
      <SelectInputComponent
        inputLabel={"Roles"}
        options={RolesOption}
        isMultiSelectInput={true}
        minWidth="150px"
        allowCustomValue={true}
      />
      <SelectInputComponent
        inputLabel={"Experience"}
        options={ExperienceOption}
        filterSelected={false}
        minWidth="120px"
      />
      <SelectInputComponent
        inputLabel={"Min Base Pay"}
        options={MinBasePayOption}
        filterSelected={false}
        minWidth="150px"
      />
      <TextInputComponent inputLabel="Company Name" minWidth="150px" />
      <SelectInputComponent
        inputLabel="Job Preference"
        isMultiSelectInput={true}
        options={JobPrefOption}
        minWidth="150px"
      />
      <SelectInputComponent
        allowCustomValue={true}
        isMultiSelectInput={true}
        inputLabel="Location"
        options={[]}
        minWidth="150px"
      />
      <SelectInputComponent
        allowCustomValue={true}
        isMultiSelectInput={true}
        inputLabel="Tech Stack"
        options={[]}
        minWidth="250px"
      />
    </Stack>
  );
}
