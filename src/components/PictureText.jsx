import { Box, Typography, Stack } from "@mui/material";
import { BigButton } from "./Buttons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PictureText({ pic, text, btn, dir }) {
  return (
    <Stack flexDirection={dir} justifyContent="space-around" flexWrap="wrap">
      <Box
        component="img"
        sx={{
          width: { xs: "100%", sm: "40%", md: "45%" },
          borderRadius: "40px",
        }}
        alt="kichen"
        src={pic}
      />
      <Stack
        sx={{
          padding: "20px",
          width: { xs: "100%", sm: "50%", md: "40%" },
        }}
        flexDirection="column"
        justifyContent="space-around"
      >
        <Typography my={1} variant="h4">{text.title}</Typography>
        <Typography my={1} variant="body1">{text.info}</Typography>
        <BigButton
          color={btn.color}
          title={btn.text}
          icon={<ArrowForwardIcon />}
        />
      </Stack>
    </Stack>
  );
}
