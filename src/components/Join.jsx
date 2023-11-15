import { Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BigButton } from "./Buttons";

export default function Join() {
  return (
    <Stack
      sx={{
        borderRadius: "30px",
        height: "280px",
        margin: "50px 0px",
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
      <BigButton
        color="warning"
        title="Get Started"
        icon={<ArrowForwardIcon />}
      />
    </Stack>
  );
}
