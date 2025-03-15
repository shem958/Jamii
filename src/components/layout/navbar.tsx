"use client";
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
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#F5F5DC",
        boxShadow: "none",
        padding: "10px 20px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon sx={{ color: "#5A4636" }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ color: "#5A4636", fontWeight: "bold" }}
          >
            Jamii Cereals and Gen Shop
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{ color: "#5A4636", textTransform: "none", fontSize: "16px" }}
          >
            Products
          </Button>
          <Button
            sx={{ color: "#5A4636", textTransform: "none", fontSize: "16px" }}
          >
            Company
          </Button>
          <Button
            sx={{ color: "#5A4636", textTransform: "none", fontSize: "16px" }}
          >
            FAQ
          </Button>
          <Button
            sx={{
              backgroundColor: "#556B2F",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              marginLeft: "10px",
              "&:hover": { backgroundColor: "#6B8E23" },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
