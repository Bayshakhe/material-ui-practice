import { Delete } from "@mui/icons-material";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";

const Cgpa = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cgpa", // Use "education" as the field name
  });
  return (
    <>
      <Typography mt={5} mb={2} variant="h4">
        CGPA
      </Typography>
      {fields.map((item, index) => (
        <Box key={item.id} component={"li"} sx={{ listStyleType: "none" }}>
          <Grid container spacing={3} maxWidth={900} mx="auto">
            {/* Class */}
            <Grid item xs={12} md={6}>
              <Stack>
                <Controller
                  name={`cgpa[${index}].class_name`} // Use array syntax
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                    <TextField
                      {...field}
                      type="text"
                      fullWidth
                      variant="outlined"
                      label="Class"
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
            {/* cgpa */}
            <Grid item xs={12} md={6}>
              <Stack>
                <Controller
                  name={`cgpa[${index}].point`} // Use array syntax
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                    <TextField
                      {...field}
                      type="text"
                      fullWidth
                      variant="outlined"
                      label="CGPA"
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
          </Grid>
          <Box display={"flex"} justifyContent={'center'} mt={1} mb={3}>
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
      <Stack maxWidth={880} mx={'auto'}>
      <Button
        variant="outlined"
        color="primary"
        type="button"
        onClick={() => append({class_name:"", point: ""})}
      >
        Add CGPA
      </Button>
      </Stack>
    </>
  );
};

export default Cgpa;
