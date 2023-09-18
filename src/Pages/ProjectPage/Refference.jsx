import {
  Checkbox,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import CustomizeTextField from "../../Components/CustomizeTextField";

const Refference = () => {
  const { control, errors } = useFormContext(); // retrieve all hook methods
  const [refer, setRefer] = useState(false);

  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="baseline">
        <Checkbox
          value={refer}
          checked={refer}
          onClick={() => setRefer(!refer)}
        />
        <Typography mt={5} mb={2} variant="h4">
          Additional Information
        </Typography>
      </Stack>
      {refer && (
        <Grid container spacing={3} maxWidth={900} mx="auto">
          {/* First name */}
          <Grid item xs={12} md={6}>
            <Controller
              name="additionalInfo.referredBy"
              control={control}
              render={({field}) => (
                <Select
                {...field}
                  fullWidth
                  defaultValue={"Friend"}
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
          <CustomizeTextField
            name="additionalInfo.comments"
            control={control}
            type="text"
            label="Comments"
          />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Refference;
