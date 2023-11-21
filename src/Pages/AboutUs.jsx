import MainHeader from "../components/MainHeader";
import PictureText from "../components/PictureText";

import { Stack, Typography, Container, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import banner from "../assets/aboutus/Banner.png";
import p1 from "../assets/aboutus/p1.jpg";
import p2 from "../assets/aboutus/p2.jpg";
import pepole1 from "../assets/aboutus/pepole1.png";
import pepole2 from "../assets/aboutus/pepole2.png";
import pepole3 from "../assets/aboutus/pepole3.png";

import CustomTheme from "../components/CustomTheme";
import Qout from "../components/Qout";
import Members from "../components/Members";
import ConcatMe from "../components/ConcatMe";

export default function AboutUs() {
  return (
    <CustomTheme>
      <MainHeader banner={banner} />
      <Container>
        <Qout
          title=" I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it"
          caption="BUNNY WILLIAMS"
        />
        <Stack>
          {PictureTexts?.map((item) => (
            <PictureText
              key={item.id}
              pic={item.pic}
              text={item.text}
              btn={item.btn}
              dir={item.dir}
            />
          ))}
        </Stack>
      </Container>
      <Box
        sx={{ background: "#F4F0EC", padding: "80px 0px", margin: "40px 0px" }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          What the People Thinks
        </Typography>
        <Typography mb={5} variant="h5" textAlign="center" fontWeight="bold">
          About Us
        </Typography>
        <Members People={People} />
      </Box>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ConcatMe
          title={["Creative project? Let's have", "a productive talk."]}
        />
      </Container>
    </CustomTheme>
  );
}

const PictureTexts = [
  {
    id: 1,
    pic: p1,
    text: {
      title: "What We Do",
      info: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    },
    dir: "row",
    btn: {
      color: "grey",
      text: "Our Concept",
    },
  },
  {
    id: 2,
    pic: p2,
    text: {
      title: "The End Result",
      info: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    },
    dir: "row-reverse",
    btn: {
      color: "grey",
      text: "Our Portfolio",
    },
  },
];

const People = [pepole1, pepole2, "text", pepole3];
