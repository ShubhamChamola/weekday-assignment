import { Box, Stack } from "@mui/material";
import React from "react";
import SelectInputComponent from "../../components/inputComponents/SelectInputComponent";
import {
  RolesOption,
  NoOfEmployeesOption,
  ExperienceOption,
  MinBasePayOption,
} from "../../utils/constants";
import TextInputComponent from "../../components/inputComponents/TextFieldInputComponent";

export default function JobFilter() {
  return (
    <Stack direction="row" sx={{ width: 1, flexWrap: "wrap", gap: "1.25em" }}>
      <SelectInputComponent
        inputLabel={"Roles"}
        options={RolesOption}
        isMultiSelectInput={true}
        minWidth="150px"
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
    </Stack>
  );
}
