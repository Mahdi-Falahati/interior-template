import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SimpleCard from "../components/SimpleCard";
import CallIcon from "@mui/icons-material/Call";
import banner from "../assets/homePageBanner.png";
import kichen from "../assets/imagekichen.png";

export default function HomePages() {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          grey: {
            main: grey[800],
            dark: grey[900],
          },
        },
      })}
    >
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          width: "100%",
          height: "89vh",
          borderRadius: "50px",
        }}
      >
        <Stack
          sx={{
            height: "100%",
            paddingLeft: { xs: 3, md: "50px" },
            width: { xs: "90%", md: "40%" },
          }}
          flexDirection="column"
          justifyContent="center"
        >
          <Typography my={1} variant="h3">
            Let Your Home Be Unique
          </Typography>
          <Typography my={1} variant="p">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </Typography>
          <Button
            my={1}
            color="grey"
            sx={{
              color: "#fff",
              height: "60px",
              width: "200px",
              borderRadius: "20px",
            }}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
      <Stack
        my={5}
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        {Cards?.map((item, id) => (
          <SimpleCard
            title={item.title}
            description={item.description}
            btnText="Read More"
            key={id}
          />
        ))}
      </Stack>
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        <Stack
          justifyContent="space-around"
          sx={{
            padding: "20px",
            width: { xs: "100%", sm: "50%", md: "40%" },
          }}
        >
          <Typography variant="h4" my={1}>
            We Create The Art Of Stylish Living Stylishly
          </Typography>
          <Typography variant="button" my={1}>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </Typography>
          <Stack flexDirection="row" alignItems="center" my={1}>
            <CallIcon
              sx={{
                background: "#F3EEEA",
                padding: "15px",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                color: "orange",
              }}
            />
            <Stack flexDirection="column" ml={2} my={1}>
              <Typography variant="h6">012345678</Typography>
              <Typography variant="subtitle1">Call Us Anytime</Typography>
            </Stack>
          </Stack>
          <Button
            my={1}
            color="grey"
            sx={{
              color: "#fff",
              height: "60px",
              width: "250px",
              borderRadius: "20px",
            }}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            Get Free Estimate
          </Button>
        </Stack>
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "55%", md: "45%" },
          }}
          alt="kichen"
          src={kichen}
        />
      </Stack>
    </ThemeProvider>
  );
}

const Cards = [
  {
    title: "Project Plan",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Realization",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];
