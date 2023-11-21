import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Footer() {
  return (
    <Container sx={{ flexGrow: 1 }} mt={5}>
      <Grid
        container
        spacing={2}
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            sx={{
              mr: 1,
              height: "25px",
            }}
            alt="Logo"
            src={logo}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Interno
          </Typography>
          <Typography
            mt={1}
            variant="p"
            display="block"
            sx={{ width: { xs: "97%", md: "85%" } }}
          >
            It is a long established fact that a reader will be distracted
            lookings.
          </Typography>
          <Stack
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
            mt={3}
            sx={{ width: { xs: "85%", md: "65%" } }}
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
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="button">Pages</Typography>
          <Stack direction="column">
            {Pages?.map((item, id) => (
              <Link key={id} style={linkStle} to={item.link}>
                {item.title}
              </Link>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="button">Servises</Typography>
          <Stack direction="column">
            {Servises?.map((item, id) => (
              <Link key={id} style={linkStle} to={item.link}>
                {item.title}
              </Link>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="button">Concat</Typography>
          <Typography my={1}>
            <LocationOnIcon fontSize="17px" sx={{ margin: "0px 5px" }} />
            55 East Birchwood Ave. Brooklyn, New York 11201
          </Typography>
          <Typography my={1}>
            <AlternateEmailIcon fontSize="17px" sx={{ margin: "0px 5px" }} />
            contact@interno.com
          </Typography>
          <Typography my={1}>
            <LocalPhoneIcon fontSize="17px" sx={{ margin: "0px 5px" }} />
            (123) 456 - 7890
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography>
            Copyright © Interno | Designed by Victorflow Templates - Powered by
            Webflow
          </Typography>
          <Typography my={1}>
            Creted by
            <a
              style={{ marginLeft: "10px", letterSpacing: 2 }}
              href="https://mahdi-falahati.netlify.app/"
            >
              Mahdi-Falahti
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

const linkStle = { textDecoration: "none", margin: "5px 0px", color: "#444" };
const Pages = [
  { title: "About Us", link: "/about-us" },
  { title: "Our Projects", link: "/our-project" },
  { title: "Our Team", link: "/our-professional" },
  { title: "Concat Us", link: "/contcat-us" },
  { title: "Servises", link: "/services" },
];
const Servises = [
  { title: "Kitchan", link: "/kitchan" },
  { title: "Living Area", link: "/livingarea" },
  { title: "Bathroom", link: "/bathroom" },
  { title: "Dinning Hall", link: "/dinninghall" },
  { title: "Bedroom", link: "/bedroom" },
];
