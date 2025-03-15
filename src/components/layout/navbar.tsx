"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FEFAE7", // Light cream color matching the screenshot
        boxShadow: "none",
        padding: "8px 20px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "48px" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#333",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            Jamii Cereals and Gen shop
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "#333",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "normal",
              mr: 1,
            }}
          >
            Products
          </Button>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "#333",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "normal",
              mr: 1,
            }}
          >
            Company
          </Button>
          <Button
            sx={{
              color: "#333",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "normal",
              mr: 2,
            }}
          >
            Frequently Asked Questions
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#556B2F",
              color: "white",
              textTransform: "none",
              fontSize: "15px",
              fontWeight: "normal",
              padding: "6px 16px",
              borderRadius: "4px",
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
