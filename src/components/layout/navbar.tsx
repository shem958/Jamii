// Navbar.tsx
"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent", // Changed to transparent to match image
        boxShadow: "none",
        padding: "8px 20px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#333",
              fontWeight: "600",
              fontSize: "22px", // Increased size to match image
            }}
          >
            Jamii Cereals and Gen shop
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "#333", fontSize: "16px", mr: 0.5 }}>
              Products
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "#333", fontSize: "18px" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mx: 3 }}>
            <Typography sx={{ color: "#333", fontSize: "16px", mr: 0.5 }}>
              Company
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "#333", fontSize: "18px" }} />
          </Box>
          <Typography sx={{ color: "#333", fontSize: "16px", mr: 3 }}>
            Frequently Asked Questions
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#556B2F",
              color: "white",
              textTransform: "none",
              fontSize: "15px",
              fontWeight: "normal",
              padding: "8px 20px", // Adjusted padding to match image
              borderRadius: "6px", // More rounded corners to match image
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
