import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import { useState } from "react";
import Education from "./Education";
import Employment from "./Employment";
import Refference from "./Refference";

const schema = yup.object({
  // personal information
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup.string().required("Phone no is required"),
  // address information
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup
    .number()
    .min(5, "Minimun 5 Digit")
    .required("ZipCode is required"),

  education: yup.array().of(yup.object({
    degree: yup.string().required("Degree is required"),
    graduationYear: yup.string().required("Graduation year is required"),
    institution: yup.string().required("Institution is required"),
  })),

  employmentHistory: yup.array().of(yup.object({
    company: yup.string().required("Company is required"),
    startDate: yup.date().required("Start date is required"),
    endDate: yup.date().required("End date is required"),
    position: yup.string().required("Position is required"),
  })),

  interests: yup.array().min(1).required('Minimum 1 interest have to select'),
});

const ProjectPage = () => {
  const methods = useForm({ resolver: yupResolver(schema), mode: "onChage" });
  
  // console.log(interests)

  const handleForm = (e) => {
    console.log(e);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods?.handleSubmit(handleForm)}>
        {/* personal information */}
        <PersonalInfo/>

        {/* address information */}
        <AddressInfo />

        {/* education */}
        <Education />

        {/* Employment History */}
        <Employment />

        {/* Refference */}
        <Refference />

        <Button type="submit" variant="contained" sx={{ marginTop: "20px" }}>
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
};

export default ProjectPage;
