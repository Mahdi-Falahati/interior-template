import { Box, Container, Stack, Typography } from "@mui/material";
import MainHeader from "../components/MainHeader";
import HowWework from "../components/HowWework";
import SimpleCard from "../components/SimpleCard";
import Join from "../components/Join";

import banner from "../assets/services/banner.jpg";
import w1 from "../assets/services/w1.jpg";
import w2 from "../assets/services/w2.jpg";
import w3 from "../assets/services/w3.jpg";
import w4 from "../assets/services/w4.jpg";
import i1 from "../assets/services/i1.png";
import i2 from "../assets/services/i2.png";
import i3 from "../assets/services/i3.png";
import i4 from "../assets/services/i4.png";

export default function Services() {
  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <Stack
          my={5}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          {Cards?.map(({ title, description, btnText }, id) => (
            <SimpleCard
              key={id}
              title={title}
              description={description}
              btnText={btnText}
            />
          ))}
        </Stack>
        <Box
          sx={{
            background: "#F4F0EC",
            borderRadius: "20px",
            padding: "100px 20px",
            margin: "0px 0px 75px 0px",
          }}
        >
          <Typography
            textAlign="center"
            fontStyle="italic"
            variant="h4"
            mb={2}
            fontWeight="bold"
          >
            How We Work
          </Typography>
          <Typography textAlign="center" variant="subtitle2">
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>
          {Works?.map(({ pic, text, dir, icon }, index) => (
            <HowWework
              key={index}
              number={index}
              pic={pic}
              text={text}
              dir={dir}
              icon={icon}
            />
          ))}
        </Box>
        <Join />
      </Container>
    </>
  );
}

const Cards = [
  {
    title: "Project Plan",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    btnText: "Read More",
  },
  {
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    btnText: "Read More",
  },
  {
    title: "Retail Design",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    btnText: "Read More",
  },
  {
    title: "2d/3d Art Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    btnText: "Read More",
  },
  {
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    btnText: "Read More",
  },
  {
    title: "Decoration Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    btnText: "Read More",
  },
];

const Works = [
  {
    dir: "row",
    pic: w1,
    text: {
      title: "Concept & Details",
      info: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
    },
    icon: i1,
  },
  {
    dir: "row-reverse",
    pic: w2,
    text: {
      title: "Idea for Work",
      info: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    icon: i2,
  },
  {
    dir: "row",
    pic: w3,
    text: {
      title: "Design",
      info: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    icon: i3,
  },
  {
    dir: "row-reverse",
    pic: w4,
    text: {
      title: "Perfection",
      info: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    icon: i4,
  },
];
