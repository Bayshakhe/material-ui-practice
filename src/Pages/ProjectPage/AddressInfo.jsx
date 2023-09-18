import { Grid, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import CustomizeTextField from "../../Components/CustomizeTextField";

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
          <CustomizeTextField
            name="addressInformation.street"
            control={control}
            type="text"
            label="Street"
          />
        </Grid>
        {/* city */}
        <Grid item xs={12} md={6}>
          <CustomizeTextField
            name="addressInformation.city"
            control={control}
            type="text"
            label="City"
          />
        </Grid>
        {/* State */}
        <Grid item xs={12} md={6}>
          <CustomizeTextField
            name="addressInformation.state"
            control={control}
            type="text"
            label="State"
          />
        </Grid>
        {/* ZipCode */}
        <Grid item xs={12} md={6}>
          <CustomizeTextField
            name="addressInformation.zipCode"
            control={control}
            type="number"
            label="Zip Code"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressInfo;
