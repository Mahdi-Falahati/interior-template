import { CardMedia, Checkbox, Container, Grid, Stack } from "@mui/material";

import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PublicIcon from "@mui/icons-material/Public";

import MainHeader from "../components/MainHeader";
import SimpleAccordion from "../components/SimpleAccordion";
import ConcatMe from "../components/ConcatMe";

import banner from "../assets/temSingle/banner.jpg";
import pepole1 from "../assets/temSingle/pepole1.png";
import pepole2 from "../assets/temSingle/pepole2.png";
import pepole3 from "../assets/temSingle/pepole3.png";
import Members from "../components/Members";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  color: "#CDA274",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "orange",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default function TeamSingle() {
  const label = { inputProps: { "aria-label": "Checkbox" } };

  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <Box sx={{ flexGrow: 1, margin: "100px 0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                sx={{
                  margin: "10px",
                  borderRadius: "20px",
                  width: "80%",
                }}
                component="img"
                image={pepole1}
                alt="Every Question Answered"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" fontWeight="bold">
                John Smith
              </Typography>
              <Typography variant="caption">Designer</Typography>
              <Typography variant="body1" my={2}>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrpobelie frandomised words which
                don't look even slightly believable.
              </Typography>
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
            <Grid item xs={12}>
              <Typography variant="h3">Short Biography​</Typography>
              <Typography variant="body1" mb={3}>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, njecthumour
                randomised words which don't look even slightly believable.
              </Typography>
              <Typography variant="body1" my={3}>
                Embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined but the
                majority have suffered alteration in some form chunks as
                necessary.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h4">Simplicity and Functionality</Typography>
              <Typography variant="body1" mb={3}>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in belief.
              </Typography>
              <Typography variant="body1" mb={3}>
                There are many variations of passages of Lorem Ipsum from
                available, but the majority have suffered alteration in some
                form, njecthumour
              </Typography>
              <Box sx={{ m: 3 }} />
              <Typography gutterBottom>Project Design</Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="Project Design"
                defaultValue={65}
              />
              <Typography gutterBottom>Team Management</Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="Team Management"
                defaultValue={95}
              />
              <Typography gutterBottom>Client Satisfaction</Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="Client Satisfaction"
                defaultValue={75}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="h3">Qustion And Answer</Typography>
              <Typography variant="body1" mb={3}>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.
              </Typography>
              <SimpleAccordion data={data} />
            </Grid>
          </Grid>
        </Box>
        <Typography
          mt={10}
          mb={5}
          variant="h5"
          textAlign="center"
          fontWeight="bold"
        >
          Our Team Members
        </Typography>
        <Members People={People} />
        <Box sx={{ mt: 10 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ConcatMe title={["Contact Me"]} />
          <Stack flexDirection="row" alignItems="center" mb={10}>
            <Checkbox {...label} />
            <Typography variant="button" color="orange">
              Save my name, email, and website in this browser for the next time
              I comment.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

const data = [
  {
    title: "Website & Mobile App Design?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.",
  },
  {
    title: "How to Easy Successful Projects?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.",
  },
  {
    title: "International Trade Experience?",
    summary:
      "Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.",
  },
];

const People = [pepole1, pepole2, "text", pepole3];
