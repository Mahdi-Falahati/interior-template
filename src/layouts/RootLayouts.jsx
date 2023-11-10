import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";

export default function RootLayouts() {
  return (
    <Container>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}
