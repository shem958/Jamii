"use client";
import React from "react";
import { Typography, Box, Button, Avatar } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "calc(100vh - 64px)",
  position: "relative",
  backgroundColor: "#FFFFFF",
  padding: "80px 0",
  overflow: "hidden",
  alignItems: "center",
  backgroundImage: "url('/assets/cereal-background.png')", // Add textured background
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const ContentContainer = styled(Box)({
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  position: "relative",
});

const LeftContent = styled(Box)({
  width: "60%",
  paddingLeft: "40px",
});

const RightContent = styled(Box)({
  width: "40%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginTop: "-50px", // Shift logo upward
});

const FreshSelectionsBadge = styled(Box)({
  display: "inline-block",
  backgroundColor: "#F8EFE0",
  padding: "10px 24px",
  borderRadius: "30px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#4D3319",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
});

const JamiiLogoContainer = styled(Box)({
  width: "400px", // Increase logo size
  height: "400px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "white",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  backgroundImage: "url('/assets/cereal-texture.png')", // Add textured background around logo
  backgroundSize: "cover",
});

const JamiiLogo = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const AvatarGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "40px",
  position: "relative",
});

const StatsBox = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent glassmorphic effect
  padding: "18px 26px",
  borderRadius: "15px",
  marginLeft: "16px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
  backdropFilter: "blur(8px)",
});

const CentralAvatar = styled(Avatar)({
  width: "80px",
  height: "80px",
  border: "4px solid white",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  backgroundColor: "#6B8E23",
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  position: "absolute",
  bottom: "-40px",
  left: "50%",
  transform: "translateX(-50%)",
});

const HeroSection: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LeftContent>
          <FreshSelectionsBadge>Fresh Selections</FreshSelectionsBadge>

          <Typography
            sx={{ fontSize: "20px", color: "#333", mb: 2, maxWidth: "95%" }}
          >
            Experience the richness of wholesome nutrition at Jamil Cereals and
            Gen Store 🌿
          </Typography>

          <Typography
            sx={{
              fontSize: "75px",
              fontWeight: "bold",
              lineHeight: 1.1,
              color: "#222",
              mb: 3,
              maxWidth: "500px",
            }}
          >
            Elevate Your Meals
          </Typography>

          <Typography
            sx={{ fontSize: "20px", color: "#333", mb: 3, maxWidth: "95%" }}
          >
            Shop premium dry cereals and groceries delivered right to your door
            or visit us at Dagoretti Market.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#556B2F",
              color: "white",
              textTransform: "none",
              fontSize: "18px",
              padding: "12px 28px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow
              "&:hover": { backgroundColor: "#6B8E23" },
            }}
          >
            Shop Online
          </Button>

          <AvatarGroup>
            <Box sx={{ display: "flex", position: "relative" }}>
              {[0, 1, 2, 3, 4].map((index) => (
                <Avatar
                  key={index}
                  sx={{
                    width: 45,
                    height: 45,
                    backgroundColor: "#ccc",
                    border: "3px solid white",
                    position: "absolute",
                    left: `${index * 28}px`,
                    zIndex: 5 - index,
                  }}
                >
                  C
                </Avatar>
              ))}
            </Box>
            <StatsBox>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "20px", color: "#333" }}
              >
                4,800
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#666" }}>
                Customer Favorites
              </Typography>
            </StatsBox>
          </AvatarGroup>
        </LeftContent>

        <RightContent>
          <JamiiLogoContainer>
            <JamiiLogo
              src="/assets/jamii.png"
              alt="Jamil Cereals and Gen Store Logo"
            />
          </JamiiLogoContainer>
        </RightContent>
      </ContentContainer>

      <CentralAvatar>C</CentralAvatar>
    </MainContainer>
  );
};

export default HeroSection;
