import { Box, Stack, Typography } from "@mui/material";
import p1 from "../assets/OurProjects/p1.png";
import p2 from "../assets/OurProjects/p2.png";
import p3 from "../assets/OurProjects/p3.png";
import p4 from "../assets/OurProjects/p4.png";
import CardProject from "./CardProject";

export default function OurProjects() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Follow Our Projects</Typography>
      <Typography variant="body1" sx={{ width: { xs: "100%", md: "50%" } }}>
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </Typography>
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-around">
        {Projects?.map((project) => (
          <CardProject
            key={project.id}
            img={project.img}
            name={project.name}
            subject={project.subject}
          />
        ))}
      </Stack>
    </Box>
  );
}

const Projects = [
  {
    id: 1,
    name: "Modern Kitchan",
    img: p1,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 2,
    name: "Modern Kitchan",
    img: p2,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 3,
    name: "Modern Kitchan",
    img: p3,
    subject: ["Decor", "Artchitecture"],
  },
  {
    id: 4,
    name: "Modern Kitchan",
    img: p4,
    subject: ["Decor", "Artchitecture"],
  },
];
