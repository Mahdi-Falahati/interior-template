import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import banner from "../assets/homePageBanner.png";

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
            paddingLeft: "50px",
            width: { xs: "100%", md: "40%" },
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
    </ThemeProvider>
  );
}
