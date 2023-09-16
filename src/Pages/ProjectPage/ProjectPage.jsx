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
  dateOfBirth: yup.string().required("Date of birth is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup.string().required("Phone no is required"),
  // address information
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  State: yup.string().required("State is required"),
  zipCode: yup
    .number()
    .min(5, "Minimun 5 Digit")
    .required("ZipCode is required"),

  degree: yup.string().required("State is required"),
  graduationYear: yup.string().required("State is required"),
  institution: yup.string().required("State is required"),

  company: yup.string().required("State is required"),
  startDate: yup.date().default(() => new Date()),
  endDate: yup.date().default(() => new Date()),
  position: yup.string().required("State is required"),

  interests: yup.string().required("State is required"),
});

const ProjectPage = () => {
  const methods = useForm({ resolver: yupResolver(schema), mode: "onChage" });
  const [interests, setInterests] = useState([]);

  const handleInterests = ({ target: { checked, value } }) => {
    if (checked) {
      setInterests([...interests, value]);
    } else {
      const filteredInterests = interests.filter(
        (interest) => interest !== value
      );
      setInterests(filteredInterests);
    }
  };
  // console.log(interests)

  const handleForm = (e) => {
    console.log(e);
  };


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleForm)} >
        {/* personal information */}
        <PersonalInfo
          interests={interests}
          setInterests={setInterests}
          handleInterests={handleInterests}
        />

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
      </form>
    </FormProvider>
  );
};

export default ProjectPage;
