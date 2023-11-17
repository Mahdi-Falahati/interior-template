import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function CardProject({ img, name, subject, radius }) {
  return (
    <Card sx={{ width: { xs: "90%", sm: "40%" }, margin: "20px" }}>
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box textAlign="left">
          <Typography variant="h6">{name}</Typography>
          <Typography variant="button">{subject.join(" / ")}</Typography>
        </Box>
        <ChevronRightIcon
          sx={{
            background: "#999",
            height: "30px",
            width: "30px",
            color: "#fff",
            borderRadius: `${radius ? radius : "50%"}`,
            cursor: "pointer",
          }}
        />
      </CardContent>
    </Card>
  );
}
