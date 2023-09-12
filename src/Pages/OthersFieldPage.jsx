import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

const OthersFieldPage = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [gender, setGender] = useState("");
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleCountries = (e) => {
    setCountries(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleCheckbox = (e) => {
    setAccept(e.target.checked);
  };
  const handleSkills = (e) => {
    const index = skills.indexOf(e.target.value)
    if(index === -1){
        setSkills([...skills, e.target.value])
    }
    else{
        const filterSkills = skills.filter(skill => skill !== e.target.value)
        setSkills(filterSkills)
    }
  }
    console.log({skills})

  return (
    <Box mt={3}>
      <Stack direction="row">
        <Box>
          <Select
            labelId="country"
            label="Country"
            value={country && country}
            onChange={handleCountry}
          >
            <MenuItem value="Bangladesh">Bangladesh</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
          </Select>
        </Box>

        {/* select multiple */}
        <TextField
          fullWidth
          // labelId="country"
          label="Country"
          select
          value={countries}
          onChange={handleCountries}
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="Bangladesh">Bangladesh</MenuItem>
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Germany">Germany</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
        </TextField>
      </Stack>

      <Stack direction="column" spacing={3} mt={3}>
        {/* radio button */}
        <FormControl>
          <RadioGroup
            defaultValue="female"
            value={gender}
            onChange={handleGender}
          >
            <FormControlLabel value="male" control={<Radio />} label="male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="female"
            />
            <FormControlLabel value="other" control={<Radio />} label="other" />
          </RadioGroup>
        </FormControl>

        {/* Checkbox button */}
        <FormControlLabel
          label="I accept all the terms and conditions"
          control={
            <Checkbox checked={accept} onChange={handleCheckbox}></Checkbox>
          }
        />
        {/* Checkbox icon button */}
        <Stack direction="row">
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={accept}
            onChange={handleCheckbox}
          />
        </Stack>

        {/* multiple checkbox select */}
          <FormControl>
            <FormGroup>
                <FormControlLabel label="html" value="html" control={<Checkbox checked={skills.includes('html')}/>} onChange={handleSkills}/>
                <FormControlLabel label="css" value="css" control={<Checkbox checked={skills.includes('css')}/>} onChange={handleSkills}/>
                <FormControlLabel label="javascript" value="javascript" control={<Checkbox checked={skills.includes('javascript')}/>} onChange={handleSkills}/>
            </FormGroup>
          </FormControl>
      </Stack>
    </Box>
  );
};

export default OthersFieldPage;
