import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";

const PersonalInfo = () => {
  const { control } = useFormContext(); // retrieve all hook methods
  return (
    <>
      <Typography mt={5} mb={2} variant="h4">
        Personal Information
      </Typography>
      <Grid container spacing={3} maxWidth={900} mx="auto">
        {/* First name */}
        <Grid item xs={12} md={6}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  variant="outlined"
                  label="First Name"
                />
                {error && (
                  <Typography variant="body2" align="left" color="error">
                    {error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>
        {/* Last name */}
        <Grid item xs={12} md={6}>
          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                />
                {error && (
                  <Typography variant="body2" align="left" color="error">
                    {error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>
        {/* Email */}
        <Grid item xs={12} md={6}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  type="email"
                  fullWidth
                  variant="outlined"
                  label="Email"
                />
                {error && (
                  <Typography variant="body2" align="left" color="error">
                    {error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>
        {/* Phone */}
        <Grid item xs={12} md={6}>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  type="tel"
                  fullWidth
                  variant="outlined"
                  label="Phone"
                />
                {error && (
                  <Typography variant="body2" align="left" color="error">
                    {error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>
        {/* Date Of Birth */}
        <Grid item xs={12} md={6}>
          <Stack>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      value={field.value}
                      label="Date of birth"
                    />
                  </LocalizationProvider>
                  {error && (
                    <Typography variant="body2" align="left" color="error">
                      {error.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Stack>
        </Grid>
        {/* Gender */}
        <Grid item xs={12} md={6}>
          <Typography align="left">Gender</Typography>
          <Controller
            name="gender"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <RadioGroup {...field} defaultValue="male" row>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                {error && (
                  <Typography variant="body2" align="left" color="error">
                    {error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>
        {/* Interests */}
        <Grid item xs={12} md={6}>
          <Typography align="left">Interests</Typography>
          <Controller
            name="interests"
            control={control}
            defaultValue={[]}
            render={({ field, fieldState: { error } }) => (
              <>
                <FormGroup
                  {...field}
                  onChange={({ target: { value, checked } }) => {
                    if (checked) {
                      return field.onChange([...field.value, value]);
                    }
                    field.onChange(
                      field.value.filter((interest) => interest != value)
                    );
                  }}
                  row
                >
                  <FormControlLabel
                    label="Reading"
                    control={
                      <Checkbox
                        value="Reading"
                        checked={field.value.includes("Reading")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Hiking"
                    control={
                      <Checkbox
                        value="Hiking"
                        checked={field.value.includes("Hiking")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Cooking"
                    control={
                      <Checkbox
                        value="Cooking"
                        checked={field.value.includes("Cooking")}
                      />
                    }
                  />
                </FormGroup>
                {error && (
                  <Typography variant="body2" align="left" color="error">
                    {error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalInfo;
