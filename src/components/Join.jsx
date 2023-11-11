import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Join() {
  return (
    <Stack
      sx={{
        borderRadius: "30px",
        height: "280px",
        margin: "20px 0px",
        padding: "10px",
        background: "#292F36",
        color: "#fff",
      }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" my={1}>
        Wanna join the interno?
      </Typography>
      <Typography variant="subtitle2" my={1}>
        It is a long established fact will be distracted.
      </Typography>
      <Button
        my={1}
        color="warning"
        sx={{
          height: "60px",
          width: "200px",
          borderRadius: "20px",
        }}
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
      >
        Get Started
      </Button>
    </Stack>
  );
}
