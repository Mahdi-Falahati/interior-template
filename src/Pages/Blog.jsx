import {
  Container,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Stack,
  Pagination,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import MainHeder from "../components/MainHeader";
import ArticleNews from "../components/ArticleNews";

import banner from "../assets/blog/banner.jpg";
import lp from "../assets/blog/lastpost.png";
import an1 from "../assets/blog/an1.png";
import an2 from "../assets/blog/an2.png";
import an3 from "../assets/blog/an3.png";
import an4 from "../assets/blog/an4.png";
import an5 from "../assets/blog/an5.png";
import an6 from "../assets/blog/an6.png";

export default function Blog() {
  return (
    <>
      <MainHeder banner={banner} />
      <Container>
        <Typography variant="h4" mt={10} mb={5}>
          Latest Post
        </Typography>
        <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                image={lp}
                alt="LastPost"
                sx={{ borderRadius: "40px", height: "350px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box textAlign="left">
                  <Typography variant="h4">
                    Low Cost Latest Invented Interior Designing Ideas
                  </Typography>
                  <Typography my={2} variant="body1">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpis dignissim maximus.posuere in.Contrary to popular
                    belief.
                  </Typography>
                  <Typography variant="body1">
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classica.
                  </Typography>
                </Box>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography variant="button">26 December,2022 </Typography>
                  <ChevronRightIcon
                    sx={{
                      background: "#999",
                      height: "30px",
                      width: "30px",
                      color: "#fff",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                </Stack>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h4" mt={10} mb={5}>
          Articles & News
        </Typography>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-around"
          mb={10}
        >
          {News?.map((news) => (
            <ArticleNews news={news} />
          ))}
          <Stack spacing={2} mt={4}>
            <Pagination count={5} color="secondary" />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

const News = [
  {
    id: 1,
    design: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
    img: an1,
  },
  {
    id: 2,
    design: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022 ",
    img: an2,
  },
  {
    id: 3,
    design: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
    img: an3,
  },
  {
    id: 4,
    design: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
    img: an4,
  },
  {
    id: 5,
    design: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022 ",
    img: an5,
  },
  {
    id: 6,
    design: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
    img: an6,
  },
];
