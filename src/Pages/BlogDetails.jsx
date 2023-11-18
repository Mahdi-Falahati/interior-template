import MainHeader from "../components/MainHeader";
import CustomTheme from "../components/CustomTheme";
import Qout from "../components/Qout";
import { BigButton, SimpleBtn } from "../components/Buttons";

import {
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  Link,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import banner from "../assets/blogDetails/banner.jpg";
import pic1 from "../assets/blogDetails/pic1.png";
import pic2 from "../assets/blogDetails/pic2.png";

export default function BlogDetails() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <CustomTheme>
      <MainHeader Show={false} banner={banner} />
      <Container>
        <Box sx={{ flexGrow: 1, margin: "50px 0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} padding="10px">
              <Stack>
                <Typography variant="h3" my={3}>
                  Let’s Get Solution for Building Construction Work
                </Typography>
                <CardMedia
                  component="img"
                  image={pic1}
                  alt="LastPost"
                  sx={{ borderRadius: "40px", height: "350px" }}
                />
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="space-between"
                  my={5}
                >
                  <Typography variant="h6">26 December,2022 </Typography>
                  <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link underline="hover" color="inherit" href="#">
                        Interior
                      </Link>
                      <Link underline="hover" color="inherit" href="/">
                        Design
                      </Link>
                      <Link underline="hover" color="inherit" href="#">
                        Home
                      </Link>
                      <Typography color="text.primary">Decore</Typography>
                    </Breadcrumbs>
                  </div>
                </Stack>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpmaximus.posuere in.Contrary to popular belief.There are
                  many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by
                  injecthumour, or randomised words which don't look even
                  slightly believable.
                </Typography>
                <Typography variant="body1" mt={3}>
                  Embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary.
                </Typography>
              </Stack>
              <Qout title="The details are not the details. They make the design." />
              <Typography variant="h4">Design sprints are great</Typography>
              <Typography variant="body1" fontSize={18} my={1}>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </Typography>
              <Typography variant="body1" fontSize={18} my={2}>
                <Typography variant="button" color="orangered" ml={1}>
                  1 .
                </Typography>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </Typography>
              <Typography variant="body1" fontSize={18} my={2}>
                <Typography variant="button" color="orangered" ml={1}>
                  2 .
                </Typography>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </Typography>
              <Typography variant="body1" fontSize={18} my={2}>
                <Typography variant="button" color="orangered" ml={1}>
                  3 .
                </Typography>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </Typography>
              <CardMedia
                component="img"
                image={pic2}
                alt="LastPost"
                sx={{ borderRadius: "40px", height: "350px" }}
              />
              <Typography variant="body1" fontSize={18} my={2}>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in. Contrary to popular belief.There are
                many variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="Button"
                      fontWeight="bold"
                      fontSize="25px"
                    >
                      Tags
                    </Typography>

                    <SimpleBtn title="Kitchen" variant="contained" />
                    <SimpleBtn title="Bedroom" />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
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
                  </Grid>
                </Grid>
              </Box>
              <Box
                mt={10}
                mb={5}
                sx={{
                  flexGrow: 1,
                }}
              >
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
                  <Grid item xs={12}>
                    <Checkbox />
                    <Typography variant="caption" color="orangered">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <BigButton
                      title="Start Now"
                      color="grey"
                      icon={<ArrowForwardIcon />}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box my={2} textAlign="center">
                <TextField label="Search" color="warning" />
                <Button
                  sx={{
                    marginLeft: "10px",
                    borderRadius: "15px",
                  }}
                  color="warning"
                  variant="outlined"
                >
                  <SearchIcon sx={{ fontSize: "40px" }} />
                </Button>
              </Box>
              <Box my={4}>
                <Typography variant="h4" mb={4}>
                  Latest News
                </Typography>
                <Typography variant="h5">
                  We Focus On Comfort And Gorgeous
                </Typography>
                <Typography fontWeight="bold" textAlign="right">
                  06/02/2020
                </Typography>
                <Divider />

                <Typography variant="h5">
                  We Focus On Comfort And Gorgeous
                </Typography>
                <Typography fontWeight="bold" textAlign="right">
                  06/02/2020
                </Typography>
                <Divider />

                <Typography variant="h5">
                  We Focus On Comfort And Gorgeous
                </Typography>
                <Typography fontWeight="bold" textAlign="right">
                  06/02/2020
                </Typography>
                <Divider />
              </Box>
              <Box
                mt={8}
                mb={4}
                sx={{
                  background: "#F4F0EC",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <Typography variant="h4" mb={4}>
                  Categories
                </Typography>

                <Typography variant="h5" my={2}>
                  Decoration
                </Typography>
                <Divider />
                <Typography variant="h5" my={2}>
                  Door Windows
                </Typography>
                <Divider />
                <Typography variant="h5" my={2}>
                  Home Land
                </Typography>
                <Divider />
                <Typography variant="h5" my={2}>
                  Roof Installation
                </Typography>
              </Box>
              <Box mt={8} mb={4}>
                <Typography variant="h4" mb={4}>
                  Tags
                </Typography>

                <SimpleBtn title="Kitchen" variant="contained" />
                <SimpleBtn title="Bedroom" />
                <SimpleBtn title="Building" />
                <SimpleBtn title="Architecture" />
                <SimpleBtn title="Kitchen Planning" />
                <SimpleBtn title="Bedroom" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CustomTheme>
  );
}
