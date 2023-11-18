import { Box, Stack, Typography } from "@mui/material";

export default function Qout({title,caption}) {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      sx={{
        margin: "100px",
        textAlign: "center",
      }}
      my={4}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          border: "15px solid #F4F0EC",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Typography variant="h3">“</Typography>
        <Typography variant="h5" fontStyle="italic">
         {title}
        </Typography>
        <Typography variant="caption">-{caption}</Typography>
      </Box>
    </Stack>
  );
}
