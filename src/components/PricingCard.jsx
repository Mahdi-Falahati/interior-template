import { Divider, Stack, Typography } from "@mui/material";
import { BigButton } from "../components/Buttons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PricingCard({ bestPrice, title, price, info }) {
  return (
    <Stack
      sx={{ background: "#F4F0EC", width: "275px", borderRadius: "50px" }}
      padding="50px 30px"
      textAlign="center"
    >
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h6">
        $
        <Typography
          display="inline-block"
          fontSize="60px"
          variant="h6"
          ml={1}
          color={bestPrice ? "orange" : ""}
        >
          {price}
        </Typography>
      </Typography>
      <Typography fontSize="17px" fontWeight="bold">
        /Month
      </Typography>
      <Divider sx={{ margin: "10px 0px" }}>
        {bestPrice ? "Most Popular Plans" : ""}
      </Divider>
      {info?.map((item, id) => (
        <Typography variant="subtitle1" key={id} my={1}>
          {item}
        </Typography>
      ))}
      <Stack alignItems="center" mt={2}>
        <BigButton
          title="Get Started"
          icon={<ArrowForwardIcon />}
          color={bestPrice ? "error" : "secondary"}
        />
      </Stack>
    </Stack>
  );
}
