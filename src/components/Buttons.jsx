import { Button } from "@mui/material";

export function BigButton({ title, icon, color }) {
  return (
    <Button
      my={1}
      color={color}
      sx={{
        color: "#fff",
        height: "60px",
        width: "230px",
        borderRadius: "20px",
      }}
      variant="contained"
      size="large"
      endIcon={icon}
    >
      {title}
    </Button>
  );
}
