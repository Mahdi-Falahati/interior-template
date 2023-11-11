import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import p1 from "../assets/OurProjects/p1.png";
import p2 from "../assets/OurProjects/p2.png";
import p3 from "../assets/OurProjects/p3.png";
import p4 from "../assets/OurProjects/p4.png";

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
          <Card
            key={project.id}
            sx={{ width: { xs: "90%", sm: "40%" }, margin: "20px" }}
          >
            <CardMedia
              component="img"
              height="194"
              image={project.img}
              alt="Paella dish"
            />
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box textAlign="left">
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="button">{project.subject.join(" / ")}</Typography>
              </Box>
              <ChevronRightIcon
                sx={{
                  background: "#999",
                  height: "30px",
                  width: "30px",
                  color: "#fff",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </CardContent>
          </Card>
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
