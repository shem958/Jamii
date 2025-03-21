"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent", // Matches the image
        boxShadow: "none", // Matches the image
        padding: "8px 20px", // Matches the image
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#333", // Matches the dark color in the image
              fontWeight: "600", // Matches the bold style
              fontSize: "22px", // Matches the size in the image
            }}
          >
            Jamii Cereals and Gen shop // Matches the text in the image
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "#333", fontSize: "16px", mr: 0.5 }}>
              Products // Matches the text
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "#333", fontSize: "18px" }} />{" "}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mx: 3 }}>
            <Typography sx={{ color: "#333", fontSize: "16px", mr: 0.5 }}>
              Company // Matches the text
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "#333", fontSize: "18px" }} />{" "}
          </Box>
          <Typography sx={{ color: "#333", fontSize: "16px", mr: 3 }}>
            Frequently Asked Questions // Matches the text, no arrow as in the
            image
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#556B2F", // Matches the dark green color
              color: "white", // Matches the white text
              textTransform: "none", // Matches the non-uppercase text
              fontSize: "15px", // Matches the size
              fontWeight: "normal", // Matches the weight
              padding: "8px 20px", // Matches the padding
              borderRadius: "6px", // Matches the rounded corners
              "&:hover": { backgroundColor: "#6B8E23" }, // Hover effect matches
            }}
          >
            Get in Touch // Matches the text
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
