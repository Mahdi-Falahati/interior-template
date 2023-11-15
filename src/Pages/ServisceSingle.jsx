import { Box, Container, Grid, Typography } from "@mui/material";

import MainHeader from "../components/MainHeder";
import WebsiteInfo from "../components/WebsiteInfo";
import banner from "../assets/serviseSingle/banner.jpg";
import RenderBrands from "../components/RenderBrands";
import PictureText from "../components/PictureText";
import CustomTheme from "../components/CustomTheme";

import b1 from "../assets/Brand/01.svg";
import b2 from "../assets/Brand/02.svg";
import b3 from "../assets/Brand/03.svg";
import b4 from "../assets/Brand/04.svg";
import b5 from "../assets/Brand/05.svg";
import video from "../assets/serviseSingle/video.mp4";
import pic from "../assets/serviseSingle/p1.jpg";
import VideoPlayer from "../components/VideoPlayer";

export default function ServiceSingle() {
  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <CustomTheme>
          <Box
            sx={{
              flexGrow: 1,
              margin: "80px 0px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={0} sm={2} />
              <Grid item xs={12} sm={3}>
                <Typography variant="h4">
                  We set the trends of modern living Services.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant="body1" mb={2} color="orange">
                  It is a long established fact that a reader will be distracted
                  by the of readable content of a page
                </Typography>
                <Typography variant="body1" my={2}>
                  when lookings at its layouts the points spriof using that it
                  has a more less normal.A wonderful serenity has taken
                  pgossession of my entire soul, like thesce sweet morndsings of
                  sphring which I enjoy with my forwhole heart. I am alone, and
                  feel the charm of excgistence in this spot, which was created
                  for the bliss of souls like mine.
                </Typography>
                <Typography variant="body1" mt={2}>
                  when lookings at its layouts the points spriof using that it
                  has a more less normal.A wonderful serenity has taken
                  pgossession of my entire soul, like thesce sweet morndsings of
                  sphring which I enjoy with my forwhole heart. I am alone, and
                  feel the charm of excgistence in this spot, which was created
                  for the bliss of souls like mine.
                </Typography>
              </Grid>
              <Grid item xs={0} sm={2} />
            </Grid>
          </Box>
          <RenderBrands Brands={Brands} />

          <Box
            sx={{
              flexGrow: 1,
              margin: "80px 0px",
            }}
          >
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <VideoPlayer video={video} />
              </Grid>
              <Grid item xs={0} sm={1.5} />
              <Grid item xs={12} sm={4.5}>
                <Typography variant="h4">Use of Interior</Typography>
                {UseOfInterior?.map((para, index) => (
                  <Typography
                    display="block"
                    key={index}
                    variant="button"
                    my={1}
                  >
                    {index} . {para}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={12} sm={4.5}>
                <Typography variant="h4">Make An Art</Typography>
                {MakeAnArt?.map((para, index) => (
                  <Typography
                    display="block"
                    key={index}
                    variant="button"
                    my={1}
                  >
                    {index} . {para}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={0} sm={1.5} />
            </Grid>
          </Box>

          <PictureText
            pic={pic}
            text={{
              title: "We love design.That's how we got here.",
              info: "It is a long established fact that a reader will be distracted by the of readable content .",
            }}
            btn={{ text: "Our Portfolio", color: "grey" }}
            dir="row"
          />
        </CustomTheme>
      </Container>

      <WebsiteInfo />
    </>
  );
}

const Brands = [b1, b2, b3, b4, b5];

const UseOfInterior = [
  "We provide high quality design services.",
  "Project on time and Latest Design.",
  "Scientific Skills For getting a better result.",
  "Renovations Benefit of Service",
  "We are confident about our projects.",
];

const MakeAnArt = [
  "We provide high quality design services.",
  "Project on time and Latest Design.",
  "Scientific Skills For getting a better result.",
  "Renovations Benefit of Service",
  "We are confident about our projects.",
];
