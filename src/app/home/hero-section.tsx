import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroImage from "@/assets/images/hero.png";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 10,
        textAlign: "center",
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h1" gutterBottom>
          Elevate Your Meals
        </Typography>
        <Typography variant="body1" gutterBottom>
          Shop premium dry cereals and groceries delivered right to your door or
          visit us at Dagoretti Market.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Shop Online
        </Button>
      </Stack>
    </Box>
  );
};

export default HeroSection;
