import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import notFound from "../assets/notFound.jpg";
import { BigButton } from "../components/Buttons";
import CustomTheme from "../components/CustomTheme";

export default function PageNotFound() {
  return (
    <Container>
      <CustomTheme>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack sx={{ width: { xs: "95%", sm: "70%" } }}>
                <Typography variant="h1" fontWeight="bold" color="#CDA274">
                  404
                </Typography>
                <Typography variant="h6">
                  We are sorry, but the page you requested was not found
                </Typography>
                <Link
                  style={{
                    textDecoration: "none",
                    margin: "20px 0px",
                  }}
                  to="/"
                >
                  <BigButton
                    color="grey"
                    title="Back To Home"
                    icon={<ArrowForwardIcon />}
                  />
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                sx={{
                  margin: "25px 0px",
                  borderBottomLeftRadius: "50%",
                }}
                component="img"
                image={notFound}
                alt="Page Not Found"
              />
            </Grid>
          </Grid>
        </Box>
      </CustomTheme>
    </Container>
  );
}
