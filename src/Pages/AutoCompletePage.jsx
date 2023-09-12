import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const AutoCompletePage = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);

  const skills = ["html", "css", "javascript", "React"];
  const skillOptions = skills.map((skill,i) => ({
    id: i +1, label: skill
  }))
  console.log({value, skill});
  return (
    <Stack>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default AutoCompletePage;
