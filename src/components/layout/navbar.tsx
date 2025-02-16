"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        padding: "10px 50px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
        >
          Jamii Cereals and Gen Shop
        </Typography>

        {/* Menu */}
        <div>
          <Button
            sx={{ color: "black", fontSize: "16px", textTransform: "none" }}
            onClick={(e) => handleClick(e, "products")}
          >
            Products ▾
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu === "products"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Product 1</MenuItem>
            <MenuItem onClick={handleClose}>Product 2</MenuItem>
          </Menu>

          <Button
            sx={{ color: "black", fontSize: "16px", textTransform: "none" }}
            onClick={(e) => handleClick(e, "company")}
          >
            Company ▾
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu === "company"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Careers</MenuItem>
          </Menu>

          <Button
            sx={{ color: "black", fontSize: "16px", textTransform: "none" }}
          >
            Frequently Asked Questions
          </Button>
        </div>

        {/* Get in Touch Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#55a630",
            color: "white",
            borderRadius: "20px",
            padding: "8px 20px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#4d9028" },
          }}
        >
          Get in Touch
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
