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
  backgroundImage: "url(/path-to-cereal-background-image)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
});

const HeroContent = styled(Container)({
  position: "relative",
  zIndex: 1,
  textAlign: "left",
  color: "#5A4636",
});

const LogoImage = styled("img")({
  position: "absolute",
  top: "20%",
  right: "10%",
  width: "300px",
});

const HeroSection: React.FC = () => {
  return (
    <BackgroundImageBox>
      <HeroContent maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Fresh Selections
        </Typography>
        <Typography variant="h5" gutterBottom>
          Experience the richness of wholesome nutrition at Jamii Cereals and
          Gen Store 🌿
        </Typography>
        <Typography variant="h2" gutterBottom>
          Elevate Your Meals
        </Typography>
        <Typography variant="h6" paragraph>
          Shop premium dry cereals and groceries delivered right to your door or
          visit us at Dagoretti Market.
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: "#556B2F", color: "white" }}
        >
          Shop Online
        </Button>
        <Grid container spacing={2} justifyContent="flex-start" marginTop={4}>
          {["/avatar1.png", "/avatar2.png", "/avatar3.png"].map(
            (src, index) => (
              <Grid item key={index}>
                <Avatar alt={`Customer ${index + 1}`} src={src} />
              </Grid>
            )
          )}
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          marginTop={4}
          padding={2}
          bgcolor="rgba(90, 70, 54, 0.1)"
          borderRadius="12px"
        >
          <Avatar
            alt="Profile"
            src="/path-to-profile-image"
            style={{ marginRight: "10px" }}
          />
          <Typography variant="h6">4,800 Customer Favorites</Typography>
        </Box>
      </HeroContent>
      <LogoImage src="/path-to-jamii-biz-logo" alt="Jamii Biz Logo" />
    </BackgroundImageBox>
  );
};

export default HeroSection;
