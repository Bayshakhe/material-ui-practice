import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("This field is required"),
    email: yup.string().email("Please enter a valid Email").required("This field is required"),
    password: yup.string().min(4, "Minimum length 4").max(8, "Maximum length 8").required("This field is required"),
    confirmPassword: yup.string().min(4, "Minimum length 4").max(8, "Maximum length 8").required("This field is required").oneOf([yup.ref("password")], "Confirm password does not matched"),
});

const FormPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleform = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <Typography variant="h3" mb={5} mt={2}>
        Register Form
      </Typography>
      <Paper>
        <form onSubmit={handleSubmit(handleform)} action="">
          <Stack
            direction="column"
            spacing={3}
            width={500}
            justifyContent={"center"}
          >
            <Stack>
              <Controller
                name="name"
                control={control}
                render={(field) => (
                  <TextField
                    {...register("name")}
                    {...field}
                    label="Name"
                  />
                )}
              />
              {errors.name && (
                <Typography
                  variant="body2"
                  color="error"
                  align="left"
                >
                  {errors.name.message}
                </Typography>
              )}
            </Stack>
            <Stack>
              <Controller
                name="email"
                control={control}
                render={(field) => (
                  <TextField
                    {...register("email")}
                    {...field}
                    label="Email"
                  />
                )}
              />
              {errors.email && (
                <Typography
                  variant="body2"
                  color="error"
                  align="left"
                >
                  {errors.email.message}
                </Typography>
              )}
            </Stack>
            <Stack>
              <Controller
                name="password"
                control={control}
                render={(field) => (
                  <TextField
                    {...register("password")}
                    {...field}
                    label="Password"
                    type="password"
                  />
                )}
              />
              {errors.password && (
                <Typography
                  variant="body2"
                  color="error"
                  align="left"
                >
                  {errors.password.message}
                </Typography>
              )}
            </Stack>
            <Stack>
              <Controller
                name="confirmPassword"
                control={control}
                render={(field) => (
                  <TextField
                    {...register("confirmPassword")}
                    {...field}
                    type="password"
                    label="Confirm Password"
                  />
                )}
              />
              {errors.confirmPassword && (
                <Typography
                  variant="body2"
                  color="error"
                  align="left"
                >
                  {errors.confirmPassword.message}
                </Typography>
              )}
            </Stack>

            <Button type="submit" variant="contained" sx={{ width: "auto" }}>
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default FormPage;
