import { Stack, Box } from "@mui/material";

export default function CardProfessional({ pic, icons }) {
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
      <Stack>
        {icons?.map((icon, id) => (
          <Box key={id} variant="a" href="#">
            {icon}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
