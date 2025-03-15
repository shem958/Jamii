import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#F5F5DC" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, color: "#5A4636" }}>
          Jamii Cereals and Gen Shop
        </Typography>
        <Box display="flex">
          <Button style={{ color: "#5A4636" }}>Products</Button>
          <Button style={{ color: "#5A4636" }}>Company</Button>
          <Button style={{ color: "#5A4636" }}>FAQ</Button>
          <Button style={{ backgroundColor: "#556B2F", color: "white" }}>
            Get in Touch
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
