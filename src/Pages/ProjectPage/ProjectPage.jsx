import {
  Box,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  dateOfBirth: yup.string().required("Date of birth is required"),
  //   gender: yup.string().required("Gender is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup.string().required("Phone no is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("ZipCode is required"),
});

const ProjectPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (e) => {
    console.log(e);
  };
  return (
    <Box onSubmit={handleSubmit(handleForm)} mt={3} component="form">
        {/* personal information */}
        <PersonalInfo register={register} control={control} errors={errors} />
        {/* address information */}
        <AddressInfo register={register} control={control} errors={errors} />

      <Button type="submit" variant="contained" sx={{ marginTop: "20px" }}>
        Submit
      </Button>
    </Box>
  );
};

export default ProjectPage;
