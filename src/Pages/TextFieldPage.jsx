import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const TextFieldPage = () => {
  const [value, setValue] = useState("");
  return (
    <Box spacing={4} mt={3}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>

      <Stack mt={5} direction="column" spacing={5}>
        <TextField
          label="Name"
          variant="outlined"
          defaultValue="Enter your name"
          color="secondary"
        ></TextField>
        <TextField
          label="Phone No"
          variant="outlined"
          defaultValue="+880 173456789"
          inputProps={{ readOnly: true }}
          color="secondary"
        ></TextField>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          defaultValue="Enter your email"
        ></TextField>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        ></TextField>
      </Stack>

      <Stack mt={5} direction="row" spacing={2}>
        <TextField
          label="Price"
          variant="outlined"
          color="success"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="Weight"
          variant="outlined"
          color="success"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Box>
  );
};

export default TextFieldPage;
