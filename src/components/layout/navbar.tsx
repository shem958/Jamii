// components/Navbar.tsx
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
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Jamii Cereals and Gen Shop
        </Typography>
        <Box display="flex">
          <Button color="inherit">Products</Button>
          <Button color="inherit">Company</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Get in Touch</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
