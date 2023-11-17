import MainHeader from '../components/MainHeader';
import PictureText from "../components/PictureText";

import { Stack, Typography, Container, Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import banner from "../assets/aboutus/Banner.png";
import p1 from "../assets/aboutus/p1.jpg";
import p2 from "../assets/aboutus/p2.jpg";
import pepole1 from "../assets/aboutus/pepole1.png";
import pepole2 from "../assets/aboutus/pepole2.png";
import pepole3 from "../assets/aboutus/pepole3.png";

import CustomTheme from "../components/CustomTheme";

export default function AboutUs() {
  return (
    <CustomTheme>
      <MainHeader banner={banner} />
      <Container>
        <Stack
          flexDirection="column"
          alignItems="center"
          sx={{
            margin: "100px",
            textAlign: "center",
          }}
          my={4}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              border: "15px solid #F4F0EC",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <Typography variant="h3">“</Typography>
            <Typography variant="h5" fontStyle="italic">
              I like an interior that defies labeling. I don't really want
              someone to walk into a room and know that I did it
            </Typography>
            <Typography variant="caption">-BUNNY WILLIAMS</Typography>
          </Box>
        </Stack>
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
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          textAlign="center"
        >
          {People?.map((pic, id) => {
            if (pic === "text") {
              return (
                <Stack
                  key={id}
                  justifyContent="space-around"
                  sx={{
                    width: "180px",
                    borderRadius: "40px",
                    height: "300px",
                    margin: "0px 10px",
                    background: "#fff",
                  }}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      Nattasha Julie
                    </Typography>
                    <Typography variant="caption">Design, Australia</Typography>
                  </Box>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-around"
                    flexWrap="wrap"
                  >
                    <Box variant="a" href="#">
                      <FacebookIcon />
                    </Box>
                    <Box variant="a" href="#">
                      <TwitterIcon />
                    </Box>
                    <Box variant="a" href="#">
                      <LinkedInIcon />
                    </Box>
                    <Box variant="a" href="#">
                      <InstagramIcon />
                    </Box>
                  </Stack>
                  <Box>
                    <Typography variant="caption">+1 (378) 400-1234</Typography>
                    <Typography variant="caption">julie@email.com</Typography>
                  </Box>
                </Stack>
              );
            }
            return (
              <Box
                key={id}
                component="img"
                sx={{
                  width: "180px",
                  borderRadius: "40px",
                  height: "300px",
                  margin: "0px 10px",
                }}
                alt="kichen"
                src={pic}
              />
            );
          })}
        </Stack>
      </Box>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "60%", md: "40%" },
            flexGrow: 1,
            textAlign: "center",
            margin: "70px 0px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Creative project? Let's have</Typography>
              <Typography variant="h4">a productive talk.</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ margin: "10px 0px", width: "100%" }}
                id="standard-multiline-flexible"
                label="Name"
                multiline
                maxRows={4}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ margin: "10px 0px", width: "100%" }}
                id="standard-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ margin: "10px 0px", width: "100%" }}
                id="standard-multiline-flexible"
                label="Hello Iam Intrested in.."
                multiline
                rows={4}
                variant="standard"
              />
            </Grid>
          </Grid>
        </Box>
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
