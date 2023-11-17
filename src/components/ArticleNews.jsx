import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ArticleNews({ news }) {
  return (
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
            letterSpacing: "2px",
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
  );
}
