import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function CardInfoPerson({ img, name, info, address }) {
  return (
    <Card
      sx={{
        margin: "20px 10px",
        maxWidth: 330,
        padding: "20px 10px",
        borderRadius: "20px",
      }}
    >
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="center">
        <CardMedia
          component="img"
          sx={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
          }}
          image={img}
          alt="Paella dish"
        />
        <Stack direction="column" ml={2} justifyContent="center">
          <Typography variant="h6">{name}</Typography>
          <Typography variant="caption" textAlign="left">
            {address}
          </Typography>
        </Stack>
      </Stack>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {info}
        </Typography>
      </CardContent>
    </Card>
  );
}
