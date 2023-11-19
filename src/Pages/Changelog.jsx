import MainHeder from "../components/MainHeader";
import { Box, Container, Typography } from "@mui/material";

import banner from "../assets/changelog/banner.jpg";

export default function Changelog() {
  return (
    <>
      <MainHeder banner={banner} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            margin: "120px 0px",
            background: "#F4F0EC",
            width: { xs: "95%", sm: "85%", md: "70%" },
            padding: "90px 0px",
            textAlign: "center",
            borderRadius: "40px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mr={1}
            display="inline-block"
          >
            V.1
          </Typography>
          <Typography variant="h6" display="inline-block">
            Initial Interno Webflow Template Release
          </Typography>
        </Box>
      </Container>
    </>
  );
}
