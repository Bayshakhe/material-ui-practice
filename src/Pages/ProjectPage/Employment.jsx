import { Delete } from "@mui/icons-material";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Employment = () => {
  const { control, errors, setValue } = useFormContext(); // retrieve all hook methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: "employmentHistory", // Use "education" as the field name
  });

  return (
    <>
      <Typography mt={5} mb={2} variant="h4">
        Employment History
      </Typography>
      {fields.map((item, index) => (
        <Box key={item.id} component={"li"} sx={{ listStyleType: "none" }}>
          <Grid container spacing={3} maxWidth={900} mx="auto">
            {/* Degree */}
            <Grid item xs={12} md={6}>
              <Stack>
                <Controller
                  name={`employmentHistory[${index}].company`} // Use array syntax
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        {...field}
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Company"
                      />
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
            {/* Institution */}
            <Grid item xs={12} md={6}>
              <Stack>
                <Controller
                  name={`employmentHistory[${index}].position`} // Use array syntax
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        {...field}
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Position"
                      />
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
            {/* Graduation Year */}
            <Grid item xs={12} md={6}>
              <Stack>
                <Controller
                  name={`employmentHistory[${index}].startDate`} // Use array syntax
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={field.value}
                          onChange={(newValue) =>
                            setValue(
                              `employmentHistory[${index}].startDate`,
                              newValue?.$d
                            )
                          }
                          label="Start Date"
                        />
                      </LocalizationProvider>
                      {error && (
                        <Typography variant="body2" align="left" color="error">
                          {error.message}
                        </Typography>
                      )}
                    </>
                    // <TextField
                    //   {...field}
                    //   type="text"
                    //   fullWidth
                    //   variant="outlined"
                    //   label="Start Date"
                    // />
                  )}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
            <Stack>
                <Controller
                  name={`employmentHistory[${index}].endDate`} // Use array syntax
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={field.value}
                          onChange={(newValue) =>
                            setValue(
                              `employmentHistory[${index}].endDate`,
                              newValue?.$d
                            )
                          }
                          label="End Date"
                        />
                      </LocalizationProvider>
                      {error && (
                        <Typography variant="body2" align="left" color="error">
                          {error.message}
                        </Typography>
                      )}
                    </>
                    // <TextField
                    //   {...field}
                    //   type="text"
                    //   fullWidth
                    //   variant="outlined"
                    //   label="Start Date"
                    // />
                  )}
                />
              </Stack>
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent={"center"} mt={1} mb={3}>
            <Button
              align="left"
              variant="contained"
              color="error"
              type="button"
              onClick={() => remove(index)}
            >
              <Delete />
            </Button>
          </Box>
        </Box>
      ))}
      <Stack maxWidth={880} mx={"auto"}>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={() => append({})}
        >
          Add Education
        </Button>
      </Stack>
    </>
  );
};

export default Employment;
