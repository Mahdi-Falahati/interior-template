import { Box, Stack, Typography } from "@mui/material";

export default function WebsiteInfo() {
  return (
    <Stack
      sx={{ background: "#F4F0EC", textAlign: "center", minHeight: "250px" }}
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
      my={2}
    >
      <Stack
        sx={{
          margin: "15px",
          padding: "0px 20px",
        }}
      >
        <Typography variant="h3" color="#CDA274">
          12
        </Typography>
        <Typography variant="button">Years Of Experiance</Typography>
      </Stack>
      <Box
        sx={{
          display: { xs: "none", md: "inline-block" },
          background: "#CDA274",
          width: "2px",
          height: "85px",
        }}
      />
      <Stack
        sx={{
          margin: "15px",
          padding: "0px 20px",
        }}
      >
        <Typography variant="h3" color="#CDA274">
          85
        </Typography>
        <Typography variant="button">Success Project</Typography>
      </Stack>
      <Box
        sx={{
          display: { xs: "none", md: "inline-block" },
          background: "#CDA274",
          width: "2px",
          height: "85px",
        }}
      />
      <Stack
        sx={{
          margin: "15px",
          padding: "0px 20px",
        }}
      >
        <Typography variant="h3" color="#CDA274">
          15
        </Typography>
        <Typography variant="button">Active Project</Typography>
      </Stack>
      <Box
        sx={{
          display: { xs: "none", md: "inline-block" },
          background: "#CDA274",
          width: "2px",
          height: "85px",
        }}
      />
      <Stack
        sx={{
          margin: "15px",
          padding: "0px 20px",
        }}
      >
        <Typography variant="h3" color="#CDA274">
          95
        </Typography>
        <Typography variant="button">Happy Customers</Typography>
      </Stack>
    </Stack>
  );
}
