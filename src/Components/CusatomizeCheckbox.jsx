import { Checkbox, FormControlLabel } from "@mui/material";

const CusatomizeCheckbox = ({ field, label, value}) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox value={value} checked={field.value.includes(value)} />
      }
    />
  );
};

export default CusatomizeCheckbox;
