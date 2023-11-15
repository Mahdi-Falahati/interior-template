import { Box, Typography, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function MainHeder({ banner }) {
  const { pathname } = useLocation();
  const path = pathname
    .substring(1)
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        width: "100%",
        height: "330px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "#fff",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          height: "120px",
          width: { xs: "250px", sm: "280px" },
        }}
      >
        <Typography variant="h5" fontWeight="bold" letterSpacing="2px">
          {path}
        </Typography>
        <Typography variant="caption">Home / {path}</Typography>
      </Stack>
    </Box>
  );
}
