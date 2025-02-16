// components/HeroBanner.tsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const BackgroundImageBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "80vh",
  backgroundImage: "url(/path-to-background-image)", // Replace with your image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust for a dark overlay
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
        <Box display="flex" justifyContent="center" gap={2} mt={3}>
          <Button variant="contained" color="primary" size="large">
            Shop Online
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Visit Us
          </Button>
        </Box>
      </HeroContent>
    </BackgroundImageBox>
  );
};

export default HeroBanner;
