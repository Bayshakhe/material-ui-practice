import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import Education from "./Education";
import Employment from "./Employment";
import Refference from "./Refference";
import Cgpa from "./Cgpa";
import schema from "./YupValidation";
import { useState } from "react";

const ProjectPage = () => {
  const [data, setData] = useState({})

// const setValues = {
//   personalInformation: {
//     firstName: data?.personalInformation?.firstName
//   }
// }
  const methods = useForm({ resolver: yupResolver(schema), mode: "onChage", defaultValues:{
    personalInformation: {
      firstName: "hello"
    }
  } });


  const handleForm = (data) => {
    const cgpa = structuredClone(data.cgpa);
    // console.log({ cgpa });
    data.cgpa = cgpa.reduce((acc, curr) => {
      acc[curr.class_name] = curr.point;
      return acc;
    }, {});
    setData(data);
  };
  console.log(JSON.stringify(data))

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods?.handleSubmit(handleForm)}>
        {/* personal information */}
        <PersonalInfo />

        {/* address information */}
        <AddressInfo />

        {/* education */}
        <Education />

        {/* CGPA */}
        <Cgpa />

        {/* Employment History */}
        <Employment />

        {/* Refference */}
        <Refference />

        <Box>
        <Button type="submit" variant="contained" sx={{ marginTop: "20px", marginRight: "5px" }}>
          Submit
        </Button>
        <Button color="warning" variant="contained" sx={{ marginTop: "20px", marginLeft: "5px" }}>
          Edit
        </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default ProjectPage;
