import { Box, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Members({People}) {
  return (
    <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          textAlign="center"
        >
          {People?.map((pic, id) => {
            if (pic === "text") {
              return (
                <Stack
                  key={id}
                  justifyContent="space-around"
                  sx={{
                    width: "180px",
                    borderRadius: "40px",
                    height: "300px",
                    margin: "0px 10px",
                    background: "#fff",
                  }}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      Nattasha Julie
                    </Typography>
                    <Typography variant="caption">Design, Australia</Typography>
                  </Box>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-around"
                    flexWrap="wrap"
                  >
                    <Box variant="a" href="#">
                      <FacebookIcon />
                    </Box>
                    <Box variant="a" href="#">
                      <TwitterIcon />
                    </Box>
                    <Box variant="a" href="#">
                      <LinkedInIcon />
                    </Box>
                    <Box variant="a" href="#">
                      <InstagramIcon />
                    </Box>
                  </Stack>
                  <Box>
                    <Typography variant="caption">+1 (378) 400-1234</Typography>
                    <Typography variant="caption">julie@email.com</Typography>
                  </Box>
                </Stack>
              );
            }
            return (
              <Box
                key={id}
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
            );
          })}
        </Stack>
  )
}
