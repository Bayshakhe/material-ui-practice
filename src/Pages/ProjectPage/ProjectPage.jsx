import {
  Box,
  Button,
} from "@mui/material";
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
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("ZipCode is required"),
});

const ProjectPage = () => {
  const methods = useForm({ resolver: yupResolver(schema),mode:'onChage' });
  const [interests, setInterests] = useState([])

  const handleInterests = ({target: {checked, value}}) => {
    if(checked){
      setInterests([...interests, value])
    }
    else{
      const filteredInterests = interests.filter(interest => interest !== value)
      setInterests(filteredInterests)
    }
  }
  // console.log(interests)

  const handleForm = (e) => {
    
    console.log({...e,interests});
  };

  console.log(methods.watch());

  return (
    <FormProvider {...methods}><Box onSubmit={methods.handleSubmit(handleForm)} mt={3} component="form">
        {/* personal information */}
        <PersonalInfo  interests={interests} setInterests={setInterests} handleInterests={handleInterests} />

        {/* address information */}
        <AddressInfo  />

        {/* education */}
        <Education  />

        {/* Employment History */}
        <Employment />

        {/* Refference */}
        <Refference  />

      <Button type="submit" variant="contained" sx={{ marginTop: "20px" }}>
        Submit
      </Button>
    </Box></FormProvider>
    
  );
};

export default ProjectPage;
