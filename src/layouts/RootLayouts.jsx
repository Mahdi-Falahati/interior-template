import { Outlet } from "react-router-dom";

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";

export default function RootLayouts() {
  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
