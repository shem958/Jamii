"use client";
import {
  Container,
  Avatar,
  Grid,
  Typography,
  Box,
  Button,
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
  display: "flex",
  alignItems: "center",
});

const HeroContent = styled(Container)({
  zIndex: 1,
  textAlign: "left",
  color: "#5A4636",
  maxWidth: "600px",
});

const LogoImage = styled("img")({
  position: "absolute",
  top: "10%",
  right: "5%",
  width: "250px",
});

const HeroSection: React.FC = () => {
  return (
    <BackgroundImageBox>
      <HeroContent>
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#EDE0D4",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Fresh Selections
        </Box>
        <Typography variant="h5" mt={2}>
          Experience the richness of wholesome nutrition at Jamii Cereals and
          Gen Store 🌿
        </Typography>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Elevate Your Meals
        </Typography>
        <Typography variant="h6" paragraph>
          Shop premium dry cereals and groceries delivered right to your door or
          visit us at Dagoretti Market.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#556B2F",
            color: "white",
            mt: 2,
            "&:hover": { backgroundColor: "#6B8E23" },
          }}
        >
          Shop Online
        </Button>
        <Grid container spacing={1} mt={4}>
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
          mt={4}
          p={2}
          bgcolor="rgba(90, 70, 54, 0.1)"
          borderRadius="12px"
        >
          <Avatar alt="Profile" src="/path-to-profile-image" sx={{ mr: 1 }} />
          <Typography variant="h6">4,800 Customer Favorites</Typography>
        </Box>
      </HeroContent>
      <LogoImage src="/assets/jamii.png" alt="Jamii Biz Logo" />
    </BackgroundImageBox>
  );
};

export default HeroSection;
