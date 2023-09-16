import { Grid, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const AddressInfo = () => {
  const { control } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <Typography mt={5} mb={2} variant="h4">
        Address Information
      </Typography>
      <Grid container spacing={3} maxWidth={900} mx="auto">
        {/* Street */}
        <Grid item xs={12} md={6}>
          <Controller
            name="street"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  variant="outlined"
                  label="Street"
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
        {/* city */}
        <Grid item xs={12} md={6}>
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  variant="outlined"
                  label="City"
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
        {/* state */}
        <Grid item xs={12} md={6}>
          <Controller
            name="state"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
              <TextField
                {...field}
                type="text"
                fullWidth
                variant="outlined"
                label="State"
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
        {/* ZipCode */}
        <Grid item xs={12} md={6}>
          <Controller
            name="zipCode"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
              <TextField
                {...field}
                type="text"
                fullWidth
                variant="outlined"
                label="Zip Code"
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
      </Grid>
    </>
  );
};

export default AddressInfo;
