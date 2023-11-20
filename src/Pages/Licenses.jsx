import MainHeader from "../components/MainHeader";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import banner from "../assets/licenses/banner.jpg";
import p1 from "../assets/licenses/p1.png";
import p2 from "../assets/licenses/p2.png";
import p3 from "../assets/licenses/p3.png";
import p4 from "../assets/licenses/p4.png";
import p5 from "../assets/licenses/p5.png";
import p6 from "../assets/licenses/p6.png";
import LicensesCard from "../components/LicensesCard";

export default function Licenses() {
  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <Typography variant="h4" mt={5}>
          Photography
        </Typography>
        <Typography variant="body1" mb={5}>
          All images used in the <mark>Interno</mark> Webflow Ecommerce Template
          are licensed for free personal and commercial use. If you'd like to
          use any specific image, you can check the licenses and download the
          images for free on <b>Unsplash, Pexels.</b>
        </Typography>

        {data?.map((item, id) => (
          <LicensesCard
            key={id}
            Images={item.images}
            para={item.para}
            title={item.title}
          />
        ))}
        <Stack
          sx={{
            flexGrow: 1,
            background: "#F4F0EC",
            margin: "40px 0px",
            minHeight: "250px",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                minHeight: "250px",
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight="blod">
                  Font
                </Typography>
                <Typography variant="body1">
                  Interno template uses free licensed <mark>Google Fonts</mark>.
                  Please check
                  <b>DM Serif Display</b> and <b>Jost</b>.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" fontWeight="blod">
                  Icon
                </Typography>
                <Typography variant="body1">Icon 1, Icon 2, Icon 3</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                minHeight: "250px",
              }}
            >
              <Typography variant="h3" fontWeight="bold">
                Aa
              </Typography>
              <Typography variant="h3">Aa</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

const data = [
  {
    title: "Unsplash",
    para: "Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.",
    images: [p1, p2, p3],
  },
  {
    title: "Pexels",
    para: "Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.",
    images: [p4, p5, p6],
  },
];
