import {
  Delete,
  Email,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Send,
  VolunteerActivism,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

const ButtonPage = () => {
  const [color, setColor] = useState("primary");
  const [formatText, setFormatText] = useState("");

  const clicked = () => {
    setColor("secondary");
  };
  console.log(formatText)
  return (
    <Stack direction="column" spacing={4}>
      {/* variant of button */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color={color} onClick={clicked}>
          Contained Button
        </Button>
        <Button endIcon={<Delete />} variant="outlined" color="success">
          Outline Button
        </Button>
        <Button variant="text" color="warning">
          Text Button
        </Button>
      </Stack>

      {/* color of button */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="secondary">
          secondary Button
        </Button>
        <Button variant="contained" color="success">
          success Button
        </Button>
        <Button variant="contained" color="warning">
          warning Button
        </Button>
        <Button variant="contained" color="info">
          info Button
        </Button>
        <Button variant="contained" color="inherit">
          inherit Button
        </Button>
        <Button variant="contained" color="error">
          error Button
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://www.google.com/"
        >
          Link Button
        </Button>
      </Stack>

      {/* size of button */}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" size="small">
          Small button
        </Button>
        <Button variant="outlined" size="medium">
          {" "}
          medium button
        </Button>
        <Button variant="outlined" size="large">
          large button
        </Button>
      </Stack>

      {/* using Icon on button */}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<Email />}>
          Email
        </Button>
        <Button variant="outlined" endIcon={<Send />}>
          {" "}
          Send
        </Button>
        <IconButton>
          <VolunteerActivism color="error" variant="text" />
        </IconButton>
      </Stack>

      {/* using button group */}
      <Stack direction="row">
        <ButtonGroup orientation="vertical" color="success">
          <Button onClick={() => alert("Left Button Clicked")}>
            Left Button
          </Button>
          <Button>Middle Button</Button>
          <Button>Right Button</Button>
        </ButtonGroup>
      </Stack>

      {/* using button group */}
      <Stack direction="row">
        <ToggleButtonGroup orientation="vertical" color="success">
          <ToggleButton onClick={()=>setFormatText("bold")}>
            <FormatBold />
          </ToggleButton>
          <ToggleButton onClick={()=>setFormatText("italic")}>
            <FormatItalic />
          </ToggleButton>
          <ToggleButton onClick={()=>setFormatText("underlined")}>
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default ButtonPage;
