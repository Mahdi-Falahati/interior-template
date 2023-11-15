import { Stack } from "@mui/material";

export default function RenderBrands({Brands}) {
  return (
    <Stack
      sx={{ margin: "100px 0px" }}
      direction="row"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {Brands?.map((brand, key) => (
        <img
          src={brand}
          key={key}
          alt="Brand"
          style={{ margin: "15px", height: "30px" }}
        />
      ))}
    </Stack>
  );
}
