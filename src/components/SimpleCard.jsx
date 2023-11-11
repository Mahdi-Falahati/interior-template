import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SimpleCard({ title, description, btnText }) {
  return (
    <Card sx={{ width: 275, textAlign: "center", margin: "20px 0px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          sx={{ width: "275px" }}
          endIcon={<ArrowForwardIcon />}
          size="small"
        >
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
}
