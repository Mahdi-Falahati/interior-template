import MainHeder from "../components/MainHeader";

import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import SimpleAccordion from "../components/SimpleAccordion";

import banner from "../assets/FAQS/banner.jpg";
import p1 from "../assets/FAQS/p1.jpg";
import p2 from "../assets/FAQS/p2.png";

export default function FAQ() {
  return (
    <>
      <MainHeder banner={banner} />
      <Container>
        <Box sx={{ flexGrow: 1, margin: "100px 0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" mb={2} textAlign="center">
                Every Question Answered
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SimpleAccordion data={data} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardMedia
                sx={{
                  margin: "10px",
                  borderRadius: "20px",
                  height: "300px",
                }}
                component="img"
                image={p1}
                alt="Every Question Answered"
              />
            </Grid>

            <Grid item xs={12} marginTop={10}>
              <Typography mb={2} variant="h2" textAlign="center">
                Project related questions
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{
                  margin: "10px",
                  borderRadius: "20px",
                  height: "300px",
                }}
                component="img"
                image={p2}
                alt="Project related questions"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SimpleAccordion data={data2} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

const data = [
  {
    title: "What is the Hipcouch Interior Design Service?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "So, how exactly does this work?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "What cities do you currently operate in?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "Hipcouch Interior Design Service?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "What kind of interior designers do you have?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
];

const data2 = [
  {
    title: "How long does it take?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "Can I use my existing furnishings?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "I put into redesigning my interior?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "What do your services cost?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
  {
    title: "Do you offer free consultations?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
  },
];
