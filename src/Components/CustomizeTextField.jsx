import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomizeTextField = ({name, control, type, label}) => {
    return (
        <Controller
            name={name && name}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  type={type}
                  fullWidth
                  variant="outlined"
                  error={Boolean(error)}
                  label={label}
                  helperText={error?.message}
                />
                {/* {error && (
                  <Typography variant="body2" align="left" color="error">
                    {error.message}
                  </Typography>
                )} */}
              </>
            )}
          />
    );
};

export default CustomizeTextField;