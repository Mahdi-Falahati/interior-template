import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import MainHeader from "../components/MainHeader";
import { BigButton } from "../components/Buttons";
import CustomTheme from "../components/CustomTheme";

import banner from "../assets/contcatUs/banner.jpg";
import MapChart from "../MapChart";

export default function ContcatUs() {
  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                mt={12}
                textAlign="center"
                fontWeight="bold"
              >
                We love meeting new people
              </Typography>
              <Typography
                variant="h4"
                mb={5}
                textAlign="center"
                fontWeight="bold"
              >
                and helping them.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              mb={10}
              sx={{
                background: "#F4F0EC",
                borderRadius: "20px",
                padding: "20px 10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stack flexDirection="row" alignItems="center" my={2}>
                <MailOutlineIcon sx={{ color: "orangered" }} />
                <Typography display="inline-block" ml={2} variant="body1">
                  info@yourdomain.com
                </Typography>
              </Stack>
              <Stack flexDirection="row" alignItems="center" my={2}>
                <CallIcon sx={{ color: "orangered" }} />
                <Typography display="inline-block" ml={2} variant="body1">
                  +1 (378) 400-1234
                </Typography>
              </Stack>
              <Stack flexDirection="row" alignItems="center" my={2}>
                <PublicIcon sx={{ color: "orangered" }} />
                <Typography display="inline-block" ml={2} variant="body1">
                  www.yourdomain.com
                </Typography>
              </Stack>
              <Stack mt={3} flexDirection="row" justifyContent="space-around">
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
            </Grid>
            <Grid item xs={12} sm={7}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4">Leave a Reply</Typography>
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
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={{ margin: "10px 0px", width: "100%" }}
                    id="standard-multiline-flexible"
                    label="Website"
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={{ margin: "10px 0px", width: "100%" }}
                    id="standard-multiline-flexible"
                    label="Phone"
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
                <Grid
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "20px 0px 100px 0px",
                  }}
                >
                  <CustomTheme>
                    <BigButton
                      color="grey"
                      title="Send Now"
                      icon={<ArrowForwardIcon />}
                    />
                  </CustomTheme>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <MapChart />
      </Container>
    </>
  );
}
