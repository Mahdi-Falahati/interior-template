import { Container, Stack } from "@mui/material";

import MainHeader from "../components/MainHeder";
import PricingCard from "../components/PricingCard";

import banner from "../assets/pricing/banner.jpg";

export default function Pricing() {
  return (
    <>
      <MainHeader banner={banner} />
      <Container>
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
          my={6}
        >
          {Prices?.map(({ bestPrice, title, price, info }, id) => (
            <PricingCard
              bestPrice={bestPrice}
              title={title}
              price={price}
              info={info}
              key={id}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

const Prices = [
  {
    bestPrice: false,
    title: "Design advices",
    price: 29,
    info: [
      "General living space advices",
      "Rennovation advices",
      "Interior design advices",
      "Furniture reorganization",
      "Up to 5 hours meetings",
    ],
  },
  {
    bestPrice: true,
    title: "Complete interior",
    price: 39,
    info: [
      "Complete home redesign",
      "Interior and exterior works",
      "Modular interior planning",
      "Kitchen design",
      "Garages organization",
    ],
  },
  {
    bestPrice: false,
    title: "Furniture design",
    price: 59,
    info: [
      "Furniture for living room",
      "Furniture refurbishment",
      "Sofas and amchairs",
      "Tables and chairs",
      "Kitchens",
    ],
  },
];
