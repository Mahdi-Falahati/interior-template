import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SimpleCard from "../components/SimpleCard";
import { Container } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import banner from "../assets/homePageBanner.png";
import kichen from "../assets/imagekichen.png";
import CardInfoPerson from "../components/CardInfoPerson";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import b1 from "../assets/Brand/01.svg";
import b2 from "../assets/Brand/02.svg";
import b3 from "../assets/Brand/03.svg";
import b4 from "../assets/Brand/04.svg";
import b5 from "../assets/Brand/05.svg";
import an1 from "../assets/News/p1.png";
import an2 from "../assets/News/p2.png";
import an3 from "../assets/News/p3.png";

import OurProjects from "../components/OurProjects";
import WebsiteInfo from "../components/WebsiteInfo";
import ArticleNews from "../components/ArticleNews";
import Join from "../components/Join";
import { BigButton } from "../components/Buttons";
import CustomTheme from "../components/CustomTheme";
import RenderBrands from "../components/RenderBrands";

export default function HomePages() {
  return (
    <CustomTheme>
      <Container>
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
            <BigButton
              color="grey"
              title="Get Started"
              icon={<ArrowForwardIcon />}
            />
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
              key={id}
              title={item.title}
              description={item.description}
              btnText="Read More"
            />
          ))}
        </Stack>
        <Stack
          flexWrap="wrap"
          justifyContent="space-between"
          flexDirection="row"
        >
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
            <BigButton
              color="grey"
              title="Get Free Estimate"
              icon={<ArrowForwardIcon />}
            />
          </Stack>
          <Box
            component="img"
            sx={{
              width: { xs: "100%", sm: "40%", md: "45%" },
            }}
            alt="kichen"
            src={kichen}
          />
        </Stack>
        <Box
          sx={{
            background: "#F4F0EC",
            borderRadius: "30px",
            textAlign: "center",
          }}
          py={5}
          my={5}
        >
          <Typography variant="h4">What the People Thinks</Typography>
          <Typography variant="h4">About Us</Typography>
          <Stack
            my={4}
            justifyContent="center"
            flexDirection="row"
            flexWrap="wrap"
          >
            {CardsInfo?.map((item, id) => (
              <CardInfoPerson
                key={id}
                name={item.name}
                info={item.info}
                address={item.address}
                img={item.img}
              />
            ))}
          </Stack>
        </Box>

        <RenderBrands Brands={Brands} />
        <OurProjects />
      </Container>
      <WebsiteInfo />
      <Container>
        <Box
          sx={{
            textAlign: "center",
            padding: "40px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Articles & News</Typography>
          <Typography variant="body1" sx={{ width: { xs: "100%", md: "50%" } }}>
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </Typography>
        </Box>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          {News?.map((news, id) => (
            <ArticleNews key={id} news={news} />
          ))}
        </Stack>

        <Join />
      </Container>
    </CustomTheme>
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

const CardsInfo = [
  {
    name: "Nattasha Mith",
    info: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    address: "Sydney, USA",
    img: p3,
  },
  {
    name: "Raymond Galario",
    info: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    address: "Sydney, Australia",
    img: p1,
  },
  {
    name: "Benny Roll",
    info: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    address: "Sydney, New York",
    img: p2,
  },
];

const Brands = [b1, b2, b3, b4, b5];

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
    title: "Low Cost Latest Invented Interior DesigningIdeas.",
    date: "22 December,2022 ",
    img: an3,
  },
  {
    id: 3,
    design: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
    img: an2,
  },
];
