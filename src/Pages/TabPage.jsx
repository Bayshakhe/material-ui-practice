import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const TabPage = () => {
  const [value, setValue] = useState(0);

  function TabPanel(props) {
    const { children, value, index } = props;
    return value === index && children;
  }
  return (
    <Box>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="Speed Dial">Speed Dial</Tab>
        <Tab label="Breadcrumbs">Breadcrumbs</Tab>
        <Tab label="Badge">Badge</Tab>
        <Tab label="List">List</Tab>
        <Tab label="Chip">Chip</Tab>
        <Tab label="Tooltip">Tooltip</Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        hello 0
      </TabPanel>
      <TabPanel value={value} index={1}>
        hello 1
      </TabPanel>
      <TabPanel value={value} index={2}>
        hello 2
      </TabPanel>
    </Box>
  );
};

export default TabPage;
