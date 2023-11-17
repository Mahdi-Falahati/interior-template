import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useState } from "react";

export default function TabsSimple({ title }, children) {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        margin: "30px 0px",
        width: "100%",
        typography: "body1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
            {title?.map((title, index) => (
              <Tab
                key={index + 1}
                sx={{
                  margin: "0px 10px",
                  background: "#CDA274",
                  color: "#FFF",
                  borderRadius: "15px",
                  padding: "5px 30px",
                }}
                label={title}
                value={String(index + 1)}
              />
            ))}
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  );
}
