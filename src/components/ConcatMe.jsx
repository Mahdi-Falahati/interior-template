import { Box, Grid, TextField, Typography } from "@mui/material";

export default function ConcatMe({ title }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "60%", md: "40%" },
        flexGrow: 1,
        textAlign: "center",
        margin: "70px 0px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {title?.map((item, id) => (
            <Typography variant="h4" key={id}>
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            sx={{ margin: "10px 0px", width: "100%" }}
            id="standard-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            sx={{ margin: "10px 0px", width: "100%" }}
            id="standard-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ margin: "10px 0px", width: "100%" }}
            id="standard-multiline-flexible"
            label="Hello Iam Intrested in.."
            multiline
            rows={4}
            variant="standard"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
