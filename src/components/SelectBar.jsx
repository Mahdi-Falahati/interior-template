import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SelectBar({ defaultValue, opt }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        sx={{ color: "#000", my: { xs: 0, md: 2 } }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Pages
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {opt?.map((opt, id) => (
          <MenuItem key={id} onClick={handleClose}>
            <Link to={opt.l} style={{ color: "#000", textDecoration: "none" }}>
              <Typography textAlign="center">{opt.t}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
