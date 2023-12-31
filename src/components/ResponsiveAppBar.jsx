import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import logo from "../assets/Logo.png";
import { Stack } from "@mui/material";
import SearchModal from "./SearchModal";
import { Link } from "react-router-dom";
import SelectBar from "./SelectBar";

const pages = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "Project", link: "/our-project" },
  { title: "Blog", link: "/blog-details" },
  { title: "Contact", link: "/contcat-us" },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container>
      <AppBar
        position="static"
        sx={{ background: "#fff", boxShadow: "none", color: "#444" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Stack flexDirection="row">
              <Box
                component="img"
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  height: "25px",
                }}
                alt="Logo"
                src={logo}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Interno
              </Typography>
            </Stack>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", textAlign: "center" },
                }}
              >
                {pages.map((page, id) => (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Link
                      to={page.link}
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                <SelectBar defaultValue="Pages" opt={options} />
                <SearchModal />
              </Menu>
            </Box>
            <Box
              component="img"
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                height: "25px",
              }}
              alt="Logo"
              src={logo}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Interno
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page, id) => (
                <Button
                  key={id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#444",
                    display: "block",
                  }}
                >
                  <Link
                    to={page.link}
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    {page.title}
                  </Link>
                </Button>
              ))}
              <SelectBar defaultValue="Pages" opt={options} />
              <SearchModal />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}

const options = [
  { l: "/pricing", t: "Pricing" },
  { l: "/changelog", t: "Change Log" },
  { l: "/licenses", t: "Licenses" },
  { l: "/about-us", t: "About Us" },
  { l: "/service-single", t: "Service Single" },
  { l: "/project-details", t: "Project Details" },
  { l: "/articles-news", t: "Articles News" },
  { l: "/our-professional", t: "Our Professional" },
  { l: "/professional-single", t: "Professional Single" },
  { l: "/restricted-page", t: "Restricted Page" },
  { l: "/faq", t: "FAQ's" },
];
