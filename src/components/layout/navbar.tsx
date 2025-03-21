"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "16px 40px", // Adjusted padding for better spacing
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px" }}>
        {/* Brand Name */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#333",
              fontWeight: "500", // Slightly lighter weight for a cleaner look
              fontSize: "18px", // Adjusted to match the design
              fontFamily: "sans-serif",
            }}
          >
            Jamii Cereals and GEN Shop
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {["Products", "Company"].map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mx: 2 }}
            >
              <Typography sx={{ color: "#333", fontSize: "16px", mr: 0.5 }}>
                {item}
              </Typography>
              <KeyboardArrowDownIcon sx={{ color: "#333", fontSize: "18px" }} />
            </Box>
          ))}

          <Typography sx={{ color: "#333", fontSize: "16px", mr: 3 }}>
            Frequently Asked Questions
          </Typography>

          {/* Call-to-Action Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#556B2F", // Dark green/brown color
              color: "white",
              textTransform: "none",
              fontSize: "15px",
              fontWeight: "normal",
              padding: "8px 20px",
              borderRadius: "20px", // Rounded edges as per the design
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
