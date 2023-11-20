import { Box, CardMedia, Stack, Typography } from "@mui/material";

export default function LicensesCard({ title, para, Images }) {
  return (
    <Box mt={15} p={7} sx={{ background: "#F4F0EC", borderRadius: "20px" }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1" mb={3}>
        {para}
      </Typography>
      <Stack flexWrap="wrap" flexDirection="row" justifyContent="space-around">
        {Images.map((img, id) => (
          <CardMedia
            sx={{
              margin: "10px",
              width: { xs: "195px", sm: "30%" },
              borderRadius: "20px",
            }}
            key={id}
            component="img"
            image={img}
            alt="Unsplash"
          />
        ))}
      </Stack>
    </Box>
  );
}
