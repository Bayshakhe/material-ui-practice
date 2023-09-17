import {
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const Refference = () => {

  const { register, control, errors } = useFormContext(); // retrieve all hook methods


  return (
    <>
      <Typography mt={5} mb={2} variant="h4">
        Additional Information
      </Typography>
      <Grid container spacing={3} maxWidth={900} mx="auto">
        {/* First name */}
        <Grid item xs={12} md={6}>
          <Controller
            name="referredBy"
            control={control}
            render={(field) => (
              <Select
                fullWidth
                defaultValue={"Friend"}
                {...field}
                {...register("referredBy")}
              >
                <MenuItem value="Friend">Friend</MenuItem>
                <MenuItem value="Gurdian">Gurdian</MenuItem>
                <MenuItem value="Relative">Relative</MenuItem>
              </Select>
            )}
          />
          {errors?.referredBy && (
            <Typography variant="body2" align="left" color="error">
              {errors?.referredBy.message}
            </Typography>
          )}
        </Grid>
        {/* Last name */}
        <Grid item xs={12} md={6}>
          <Controller
            name="comments"
            control={control}
            render={(field) => (
              <TextField
                {...register("comments")}
                {...field}
                type="text"
                fullWidth
                variant="outlined"
                label="Comments"
              />
            )}
          />
          {errors?.comments && (
            <Typography variant="body2" align="left" color="error">
              {errors?.comments.message}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Refference;
