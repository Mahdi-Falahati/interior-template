import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useState } from "react";
import { TabPanel } from "@mui/lab";
import CardProject from "./CardProject";
import Pagination from "@mui/material/Pagination";

import p1 from "../assets/ourProjectPage/p1.png";
import p2 from "../assets/ourProjectPage/p2.png";
import p3 from "../assets/ourProjectPage/p3.png";
import p4 from "../assets/ourProjectPage/p4.png";
import p5 from "../assets/ourProjectPage/p5.png";
import p6 from "../assets/ourProjectPage/p6.png";
import p7 from "../assets/ourProjectPage/p7.png";
import p8 from "../assets/ourProjectPage/p8.png";
import { Grid, Stack } from "@mui/material";

export default function TabProject() {
  const [value, setValue] = useState("1");
  const title = ["Bathroom", "Bed Room", "Kitchan", "Living Area"];

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

        <Stack width="100%">
          <TabPanel value="1">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {ProjectsLeft?.map((project) => (
                    <CardProject
                      h="auto"
                      w="auto"
                      key={project.id}
                      img={project.img}
                      name={project.name}
                      subject={project.subject}
                    />
                  ))}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {ProjectsRight?.map((project) => (
                    <CardProject
                      h="auto"
                      w="auto"
                      key={project.id}
                      img={project.img}
                      name={project.name}
                      subject={project.subject}
                    />
                  ))}
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="2">Nothing Data Now (:</TabPanel>
          <TabPanel value="3">Nothing Data Now (:</TabPanel>
          <TabPanel value="4">Nothing Data Now (:</TabPanel>
        </Stack>
      </TabContext>
      <Stack spacing={2} my={4}>
        <Pagination count={10} color="warning" />
      </Stack>
    </Box>
  );
}
const ProjectsRight = [
  {
    id: 2,
    name: "Minimal Bedroom",
    img: p2,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 4,
    name: "Modern Bedroom",
    img: p4,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 6,
    name: "System Table",
    img: p6,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 8,
    name: "Modern Bedroom",
    img: p8,
    subject: ["Decor", "Artchitecture"],
  },
];

const ProjectsLeft = [
  {
    id: 1,
    name: "Minimal Bedroom",
    img: p1,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 3,
    name: "Classic Minimal Bedroom",
    img: p3,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 5,
    name: "Minimal Bedroom table",
    img: p5,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 7,
    name: "Modern Medroom",
    img: p7,
    subject: ["Decor", "Artchitecture"],
  },
];
