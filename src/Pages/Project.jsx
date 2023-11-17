import { Container } from "@mui/material";

import MainHeader from "../components/MainHeader";
import banner from "../assets/Project/banner.jpg";
import TabProject from "../components/TabProject";

export default function Project() {
  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <TabProject />
      </Container>
    </>
  );
}
