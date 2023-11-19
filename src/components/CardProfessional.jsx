import { Stack, Box, Typography } from "@mui/material";

export default function CardProfessional({ pic, icons, workType, name }) {
  return (
    <Stack>
      <Box
        component="img"
        sx={{
          width: "180px",
          borderRadius: "40px",
          height: "300px",
          margin: "0px 10px",
        }}
        alt="kichen"
        src={pic}
      />
      <Typography variant="h5" mt={3}>
        {name}
      </Typography>
      <Typography variant="caption" mt={1} mb={3}>
        {workType}
      </Typography>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {icons?.map((icon, id) => (
          <Box key={id} ml={1} variant="a" href="#">
            {icon}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
