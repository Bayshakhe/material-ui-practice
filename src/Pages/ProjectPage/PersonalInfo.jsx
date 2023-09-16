import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";

const PersonalInfo = ({
  register,
  control,
  errors,
  interests,
  setInterests,
  handleInterests,
}) => {
  
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
            render={(field) => (
              <TextField
                {...register("firstName")}
                {...field}
                type="text"
                fullWidth
                variant="outlined"
                label="First Name"
              />
            )}
          />
          {errors.firstName && (
            <Typography variant="body2" align="left" color="error">
              {errors.firstName.message}
            </Typography>
          )}
        </Grid>
        {/* Last name */}
        <Grid item xs={12} md={6}>
          <Controller
            name="lastName"
            control={control}
            render={(field) => (
              <TextField
                {...register("lastName")}
                {...field}
                type="text"
                fullWidth
                variant="outlined"
                label="Last Name"
              />
            )}
          />
          {errors.lastName && (
            <Typography variant="body2" align="left" color="error">
              {errors.lastName.message}
            </Typography>
          )}
        </Grid>
        {/* Date Of Birth */}
        <Grid item xs={12} md={6}>
          <Controller
            name="dateOfBirth"
            control={control}
            render={(field) => (
              <TextField
                {...register("dateOfBirth")}
                {...field}
                type="date"
                fullWidth
                variant="outlined"
                // label="Last Name"
              />
            )}
          />
          {errors.dateOfBirth && (
            <Typography variant="body2" align="left" color="error">
              {errors.dateOfBirth.message}
            </Typography>
          )}
        </Grid>
        {/* Gender */}
        <Grid item xs={12} md={6}>
          <Typography align="left">Gender</Typography>
          <Controller
            name="gender"
            control={control}
            render={(field) => (
              <RadioGroup {...field} defaultValue="male" row>
                <FormControlLabel
                  {...register("gender")}
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  {...register("gender")}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  {...register("gender")}
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            )}
          />
          {errors.gender && (
            <Typography variant="body2" align="left" color="error">
              {errors.gender.message}
            </Typography>
          )}
        </Grid>
        {/* Email */}
        <Grid item xs={12} md={6}>
          <Controller
            name="email"
            control={control}
            render={(field) => (
              <TextField
                {...register("email")}
                {...field}
                type="email"
                fullWidth
                variant="outlined"
                label="Email"
              />
            )}
          />
          {errors.email && (
            <Typography variant="body2" align="left" color="error">
              {errors.email.message}
            </Typography>
          )}
        </Grid>
        {/* Phone */}
        <Grid item xs={12} md={6}>
          <Controller
            name="phone"
            control={control}
            render={(field) => (
              <TextField
                {...field}
                {...register('phone')}
                type="number"
                fullWidth
                variant="outlined"
                label="Phone"
              />
            )}
          />
          {errors.phone && (
            <Typography variant="body2" align="left" color="error">
              {errors.phone.message}
            </Typography>
          )}
        </Grid>
        {/* Interests */}
        <Grid item xs={12} md={6}>
          <Controller
            name="interests"
            control={control}
            render={({field}) => (
              <FormGroup {...field} >
                <FormControlLabel label="Reading" control={<Checkbox value="Reading" checked={interests.includes('Reading')}/>} onChange={handleInterests}/>
                <FormControlLabel label="Hiking" control={<Checkbox value="Hiking" checked={interests.includes('Hiking')}/>} onChange={handleInterests}/>
                <FormControlLabel label="Cooking" control={<Checkbox value="Cooking" checked={interests.includes('Cooking')}/>} onChange={handleInterests}/>
            </FormGroup>
            )}
          />
          {/* {errors.phone && (
            <Typography variant="body2" align="left" color="error">
              {errors.phone.message}
            </Typography>
          )} */}
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalInfo;
