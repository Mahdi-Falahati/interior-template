import { Box, Container, Grid, Typography } from "@mui/material";
import MainHeader from "../components/MainHeader";

import banner from "../assets/projectDetails/banner.png";
import bs from "../assets/projectDetails/backgroundSearch.png";
import SearchModal from "../components/SearchModal";

export default function ProjectDetails() {
  return (
    <>
      <MainHeader Show={false} banner={banner} />
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            margin: "50px 0px",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Grid
                sx={{
                  marginTop: "20px",
                  background: "#F4F0EC",
                  padding: { xs: "50px 10px", sm: "50px 30px" },
                  borderRadius: "50px",
                }}
                container
                spacing={2}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <Typography variant="h6">Client </Typography>
                  <Typography variant="h6">Category </Typography>
                  <Typography variant="h6">Tags </Typography>
                  <Typography variant="h6">Date </Typography>
                  <Typography variant="h6">Link </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <Typography display="block" variant="button">
                    Your client name
                  </Typography>
                  <Typography display="block" variant="button">
                    Interiors
                  </Typography>
                  <Typography display="block" variant="button">
                    interior, Home
                  </Typography>
                  <Typography display="block" variant="button">
                    Date 23,02, 2022
                  </Typography>
                  <Typography display="block" variant="button">
                    Link example.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4">Minimal Look Bedrooms</Typography>
              <Typography my={2} variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin
                tellumassa, vbel maximus purus posuere in. Dojrices gravida
                dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut
                dolor odio. Aenean in the ipsum vel lectus bibendum commodo.{" "}
              </Typography>
              <Typography variant="body1">
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras
                amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
                pellentesque arcu. Donec a pellentesque Cras erat enim, gravida
                non ante vitae,elequis convallis elit, in viverra felis. Donec
                ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
                purus porttitor.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${bs})`,
            width: "100%",
            height: "89vh",
            borderRadius: "50px",
            margin: "70px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "#fff",
              borderRadius: "100%",
            }}
          >
            <SearchModal />
          </Box>
        </Box>
      </Container>
    </>
  );
}
