import { Stack, Box, Typography } from "@mui/material";

export default function CardProfessional({ pic, icons, workType, name }) {
  return (
    <Box m={2}>
      <Box
        component="img"
        sx={{
          width: "200px",
          borderRadius: "20px",
          margin: "0px 10px",
        }}
        alt="kichen"
        src={pic}
      />
      <Typography variant="h5" textAlign="center" mt={2}>
        {name}
      </Typography>
      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        mt={1}
        mb={3}
      >
        {workType}
      </Typography>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {icons?.map((icon, id) => (
          <Box key={id} mx={2} variant="a" href="#">
            {icon}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
