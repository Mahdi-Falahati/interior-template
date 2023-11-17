import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            display: "inline-block",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #CDA274",
          }}
        >
          <TabList
            indicatorColor="inherit"
            textColor="inherit"
            onChange={handleChange}
          >
            <Tab
              sx={{
                margin: "0px 10px",
                background: "#CDA274",
                color: "#FFF",
                borderRadius: "15px",
                padding: "5px 30px",
              }}
              label="Item One"
              value="1"
            />
            <Tab
              sx={{
                margin: "0px 10px",
                background: "#CDA274",
                color: "#FFF",
                borderRadius: "15px",
                padding: "5px 30px",
              }}
              label="Item Two"
              value="2"
            />
            <Tab
              sx={{
                margin: "0px 10px",
                background: "#CDA274",
                color: "#FFF",
                borderRadius: "15px",
                padding: "5px 30px",
              }}
              label="Item Three"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
