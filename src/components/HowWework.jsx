import { Box, Stack, Typography } from "@mui/material";

export default function HowWework({ pic, text, dir, number, icon }) {
  return (
    <Stack
      my={3}
      flexDirection={dir}
      justifyContent="space-around"
      flexWrap="wrap"
    >
      <Box
        component="img"
        sx={{
          height: { xs: "250px", md: "350px" },
          borderRadius: "0px 100px 0px 70%",
        }}
        alt="how we work"
        src={pic}
      />
      <Stack
        justifyContent="space-around"
        sx={{
          padding: "20px",
          width: { xs: "100%", sm: "50%", md: "30%" },
        }}
      >
        <Stack
          width="100%"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          mb={3}
        >
          <Box height="60px" component="img" alt="icon" src={icon} />
          <Typography color="#FFF" variant="h2" fontWeight="bold">
            {number < 10 ? "0" + number : number}
          </Typography>
        </Stack>
        <Stack flexDirection="column" justifyContent="space-around">
          <Typography my={1} variant="h5" fontWeight="bold">
            {text.title}
          </Typography>
          <Typography my={1} variant="body1">
            {text.info}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
