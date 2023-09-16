import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import DatePickerCompo from "../Components/DatePickerCompo";
import SpeedDialCompo from "../Components/SpeedDialCompo";

const TabPage = () => {
  const [value, setValue] = useState(0);

  function TabPanel(props) {
    const { children, value, index } = props;
    return value === index && children;
  }
  return (
    <Box>
      <Tabs sx={{marginBottom: "20px"}} value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="Speed Dial">Speed Dial</Tab>
        <Tab label="Breadcrumbs">Breadcrumbs</Tab>
        <Tab label="Badge">Badge</Tab>
        <Tab label="List">List</Tab>
        <Tab label="Chip">Chip</Tab>
        <Tab label="Tooltip">Tooltip</Tab>
        <Tab label="Date Picker">Date Picker</Tab>
      </Tabs>
        
      <TabPanel value={value} index={0}>
      <SpeedDialCompo></SpeedDialCompo>
      </TabPanel>
      <TabPanel value={value} index={1}>
        hello 1
      </TabPanel>
      <TabPanel value={value} index={2}>
        hello 2
      </TabPanel>
      <TabPanel value={value} index={3}>
        hello 2
      </TabPanel>
      <TabPanel value={value} index={4}>
        hello 2
      </TabPanel>
      <TabPanel value={value} index={5}>
        hello 2
      </TabPanel>
      <TabPanel value={value} index={6}>
        <DatePickerCompo></DatePickerCompo>
      </TabPanel>
      <TabPanel value={value} index={7}></TabPanel>
    </Box>
  );
};

export default TabPage;
