import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "20px",
  p: 4,
};

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        my: 2,
        display: "block",
      }}
    >
      <Button onClick={handleOpen} sx={{ color: "#444" }}>
        <SearchIcon />
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Search
          </Typography>
          <Box
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              id="standard-search"
              label="What are you looking for  "
              type="search"
              variant="standard"
              sx={{ width: "230px" }}
            />
            <Button
              color="secondary"
              sx={{ mt: 2 }}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
