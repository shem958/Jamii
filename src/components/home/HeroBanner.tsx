"use client"; // components/HeroBanner.tsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const BackgroundImageBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "60vh",
  backgroundImage: "url(/assets/hero.jpg)", // This is correct - keep your image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black", // Changed to black to match the text in the image
  textAlign: "center",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.2)", // Lighter overlay to match image
});

const HeroContent = styled(Container)({
  position: "relative",
  zIndex: 1,
});

const HeroBanner: React.FC = () => {
  return (
    <BackgroundImageBox>
      <Overlay />
      <HeroContent maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Discover Fresh and Quality Goods at Jamii Cereals and Gen Shop!
        </Typography>
        <Box
          display="flex"
          flexDirection="column" // Changed to column to stack buttons vertically
          alignItems="center"
          gap={2}
          mt={3}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#4b5320", // Dark olive green color
              width: "150px",
            }}
          >
            Shop Online
          </Button>
          <Button
            variant="contained" // Changed from outlined to contained
            color="primary"
            size="large"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#4b5320", // Dark olive green color
              width: "150px",
            }}
          >
            Visit Us
          </Button>
        </Box>
      </HeroContent>
    </BackgroundImageBox>
  );
};

export default HeroBanner;
