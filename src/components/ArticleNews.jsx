import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import p1 from "../assets/News/p1.png";
import p2 from "../assets/News/p2.png";
import p3 from "../assets/News/p3.png";

export default function ArticleNews() {
  return (
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
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </Typography>
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-around">
        {News?.map((news) => (
          <Card key={news.id} sx={{ width: "275px", margin: "20px" }}>
            <Box
              sx={{
                borderRadius: "40px 40px 0px 0px",
                backgroundImage: `url(${news.img})`,
                width: "100%",
                height: "194px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="button"
                sx={{
                  margin: "0px 0px 10px 10px",
                  bgcolor: "#fff",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  letterSpacing:"2px"
                }}
              >
                {news.design}
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="h5">{news.title}</Typography>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="caption">{news.date}</Typography>
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
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

const News = [
  {
    id: 1,
    design: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
    img: p1,
  },
  {
    id: 2,
    design: "Living Design",
    title: "Low Cost Latest Invented Interior DesigningIdeas.",
    date: "22 December,2022 ",
    img: p3,
  },
  {
    id: 3,
    design: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
    img: p2,
  },
];
