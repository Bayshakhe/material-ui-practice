import {
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CustomizeTextField from "../../Components/CustomizeTextField";
import CusatomizeCheckbox from "../../Components/CusatomizeCheckbox";

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
          <CustomizeTextField
            name="personalInformation.firstName"
            control={control}
            type="text"
            label="First Name"
          />
        </Grid>
        {/* Last name */}
        <Grid item xs={12} md={6}>
          <CustomizeTextField
            name="personalInformation.lastName"
            control={control}
            type="text"
            label="Last Name"
          />
        </Grid>
        {/* Email */}
        <Grid item xs={12} md={6}>
          <CustomizeTextField
            name="personalInformation.email"
            control={control}
            type="email"
            label="Email"
          />
        </Grid>
        {/* Phone */}
        <Grid item xs={12} md={6}>
          <Controller
            name="personalInformation.phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <PhoneInput
                  {...field}
                  inputStyle={{
                    width: "100%",
                    height: "55px",
                  }}
                  country="RU"
                  value={field.value}
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
              name="personalInformation.dateOfBirth"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      value={field.value}
                      label="Date of birth"
                      slotProps={{
                        textField:{
                          error: !!error,
                          helperText: error?.message
                        }
                      }}
                    />
                  </LocalizationProvider>
                </>
              )}
            />
          </Stack>
        </Grid>
        {/* Gender */}
        <Grid item xs={12} md={6}>
          <Typography align="left">Gender</Typography>
          <Controller
            name="personalInformation.gender"
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
                    {error?.message}
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
                  <CusatomizeCheckbox
                    label="Reading"
                    value="Reading"
                    field={field}
                  />
                  <CusatomizeCheckbox
                    label="Hiking"
                    value="Hiking"
                    field={field}
                  />
                  <CusatomizeCheckbox
                    label="Cooking"
                    value="Cooking"
                    field={field}
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
