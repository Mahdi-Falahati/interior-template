import { Stack, Container } from "@mui/material";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

import MainHeader from "../components/MainHeader";
import CardProfessional from "../components/CardProfessional";

import banner from "../assets/team/banner.jpg";
import p1 from "../assets/team/p1.jpg";
import p2 from "../assets/team/p2.jpg";
import p3 from "../assets/team/p3.png";
import p4 from "../assets/team/p4.jpg";
import p5 from "../assets/team/p5.jpg";
import p6 from "../assets/team/p6.jpg";
import p7 from "../assets/team/p7.jpg";
import p8 from "../assets/team/p8.jpg";

export default function Team() {
  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
          my={15}
        >
          {cardsInfo?.map((info, id) => (
            <CardProfessional
              pic={info.pic}
              icons={info.icons}
              name={info.name}
              workType={info.workType}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

const cardsInfo = [
  {
    pic: p1,
    name: "Charlotte Levi",
    workType: "Design, Australia",
    icons: [<Facebook />, <Twitter />],
  },
  {
    pic: p2,
    name: "Nattasha Julie",
    workType: "Design, Australia",
    icons: [<Facebook />, <LinkedIn />, <Twitter />],
  },
  {
    pic: p3,
    name: "John Smith",
    workType: "Design, Australia",
    icons: [<Facebook />, <Twitter />],
  },
  {
    pic: p4,
    name: "Nora Owen",
    workType: "Design, Australia",
    icons: [<Facebook />, <Twitter />],
  },
  {
    pic: p5,
    name: "Sofia	Carter",
    workType: "Design, Australia",
    icons: [<Facebook />, <Twitter />],
  },
  {
    pic: p6,
    name: "Avery Jackson",
    workType: "Design, Australia",
    icons: [<Facebook />, <LinkedIn />, <Twitter />],
  },
  {
    pic: p7,
    name: "Luna	James",
    workType: "Design, Australia",
    icons: [<Facebook />, <Twitter />],
  },
  {
    pic: p8,
    name: "	Gianna	Mateo ",
    workType: "Design, Australia",
    icons: [<Facebook />, <Twitter />],
  },
];
