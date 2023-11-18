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

export function SimpleBtn({ title, color = "grey", variant = "outlined" }) {
  const btnColor = variant === "contained" ? "#fff" : "#000";
  return (
    <Button
      color={color}
      sx={{
        margin: "5px",
        color: btnColor,
        padding: "15px",
        borderRadius: "20px",
      }}
      variant={variant}
      size="large"
    >
      {title}
    </Button>
  );
}
