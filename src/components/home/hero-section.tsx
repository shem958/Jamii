"use client";
// components/HeroSection.tsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const BackgroundImageBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100vh",
  backgroundImage: "url(/path-to-jamii-biz-image)", // Replace with your image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
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
  textAlign: "center",
  color: "white",
});

const HeroSection: React.FC = () => {
  return (
    <BackgroundImageBox>
      <Overlay />
      <HeroContent maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Fresh Selections
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Experience the richness of wholesome nutrition at Jamii Cereals and
          Gen Shop.
        </Typography>
        <Typography variant="h1" component="h3" gutterBottom>
          Elevate Your Meals
        </Typography>
        <Typography variant="h5" component="h4" paragraph>
          Shop premium dry cereals and groceries delivered right to your door or
          visit us at Dagoretti Market.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Shop Online
        </Button>
        <Grid container spacing={2} justifyContent="center" marginTop={4}>
          <Grid item>
            <Avatar alt="Avatar 1" src="/path-to-avatar1" />
          </Grid>
          <Grid item>
            <Avatar alt="Avatar 2" src="/path-to-avatar2" />
          </Grid>
          <Grid item>
            <Avatar alt="Avatar 3" src="/path-to-avatar3" />
          </Grid>
        </Grid>
      </HeroContent>
    </BackgroundImageBox>
  );
};

export default HeroSection;
