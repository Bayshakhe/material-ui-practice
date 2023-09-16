import { Grid, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const AddressInfo = ({ register, control, errors }) => {
  return (
    <>
    <Typography mt={5} mb={2} variant="h4">Address Information</Typography>
    <Grid container spacing={3} maxWidth={900} mx="auto">
      {/* Street */}
      <Grid item xs={12} md={6}>
        <Controller
          name="street"
          control={control}
          render={(field) => (
            <TextField
              {...register("street")}
              {...field}
              type="text"
              fullWidth
              variant="outlined"
              label="Street"
            />
          )}
        />
        {errors.street && (
          <Typography variant="body2" align="left" color="error">
            {errors.street.message}
          </Typography>
        )}
      </Grid>
      {/* city */}
      <Grid item xs={12} md={6}>
        <Controller
          name="city"
          control={control}
          render={(field) => (
            <TextField
              {...register("city")}
              {...field}
              type="text"
              fullWidth
              variant="outlined"
              label="City"
            />
          )}
        />
        {errors.city && (
          <Typography variant="body2" align="left" color="error">
            {errors.city.message}
          </Typography>
        )}
      </Grid>
      {/* state */}
      <Grid item xs={12} md={6}>
        <Controller
          name="state"
          control={control}
          render={(field) => (
            <TextField
              {...register("state")}
              {...field}
              type="text"
              fullWidth
              variant="outlined"
              label="State"
            />
          )}
        />
        {errors.state && (
          <Typography variant="body2" align="left" color="error">
            {errors.state.message}
          </Typography>
        )}
      </Grid>
      {/* ZipCode */}
      <Grid item xs={12} md={6}>
        <Controller
          name="zipCode"
          control={control}
          render={(field) => (
            <TextField
              {...register("zipCode")}
              {...field}
              type="text"
              fullWidth
              variant="outlined"
              label="Zip Code"
            />
          )}
        />
        {errors.zipCode && (
          <Typography variant="body2" align="left" color="error">
            {errors.zipCode.message}
          </Typography>
        )}
      </Grid>
      </Grid>
    </>
  );
};

export default AddressInfo;
