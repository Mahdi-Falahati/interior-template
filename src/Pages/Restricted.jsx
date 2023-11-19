import { useState } from "react";
import MainHeader from "../components/MainHeader";
import CustomTheme from "../components/CustomTheme";
import { BigButton } from "../components/Buttons";
import { Container, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import banner from "../assets/restricted/banner.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Restricted() {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <MainHeader banner={banner} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomTheme>
          <Box
            textAlign="center"
            sx={{
              background: "#F4F0EC",
              borderRadius: "20px",
              padding: "50px 10px",
              margin: "100px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "95%", sm: "85%", md: "60%" },
            }}
          >
            <Typography variant="h4" mb={1}>
              Password Protected
            </Typography>
            <Typography variant="body1">
              This page is password protected. If you are the website admin, or
              have access to this page, please type your password below.
            </Typography>
            <FormControl
              sx={{ my: 4, width: { xs: "28ch", sm: "28ch", md: "35ch" } }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Enter Your Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <BigButton
              title="Submit Now"
              icon={<ArrowForwardIcon />}
              color="grey"
            />
          </Box>
        </CustomTheme>
      </Container>
    </>
  );
}
