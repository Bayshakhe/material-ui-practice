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
import { useEffect, useState } from "react";
import EditFormData from "./EditFormData";

const ProjectPage = () => {
  const [data, setData] = useState({});

  const defaultValues = {
    personalInformation: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      phone: "",
    },
    interests: "",
    employmentHistory: "",
    education: "",
    cgpa: "",
    additionalInfo: "",
  };
  const methods = useForm({
    resolver: yupResolver(schema),
    // mode: "onChage",
    defaultValues,
  });

  const updateData = (data) => {
    fetch("http://localhost:3200/info/1", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  const handleForm = (data) => {
    const cgpa = structuredClone(data.cgpa);
    console.log({ cgpa });
    data.cgpa = cgpa?.reduce((acc, curr) => {
      acc[curr.class_name] = curr.point;
      return acc;
    }, {});
    updateData(data);
  };
  // console.log(data);

  useEffect(() => {
    if (data) {
      methods.reset({
        personalInformation: {
          firstName: data?.personalInformation?.firstName,
          lastName: data?.personalInformation?.lastName,
          email: data?.personalInformation?.email,
          // dateOfBirth: data?.personalInformation?.dateOfBirth,
          gender: data?.personalInformation?.gender,
          phone: data?.personalInformation?.phone,
        },
        addressInformation:{
          street: data?.addressInformation?.street,
          city: data?.addressInformation?.city,
          state: data?.addressInformation?.state,
          zipCode: data?.addressInformation?.zipCode,
      },
      });
    }
  }, [data, methods]);

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

        <Box display="flex" justifyContent="center" alignItems="baseline">
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "20px", marginRight: "5px" }}
          >
            Submit
          </Button>
          <EditFormData data={data} setData={setData}></EditFormData>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default ProjectPage;
