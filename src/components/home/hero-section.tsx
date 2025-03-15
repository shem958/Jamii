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
});

const FreshSelectionsBadge = styled(Box)({
  display: "inline-block",
  backgroundColor: "#F8EFE0",
  padding: "8px 20px",
  borderRadius: "20px",
  fontSize: "16px",
  marginBottom: "16px",
  fontWeight: "bold",
});

const JamiiLogoContainer = styled(Box)({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "white",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
  backgroundColor: "#F0F0F0",
  padding: "16px 24px",
  borderRadius: "12px",
  marginLeft: "16px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
});

const CentralAvatar = styled(Avatar)({
  width: "70px",
  height: "70px",
  border: "3px solid white",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#ccc",
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
            sx={{ fontSize: "18px", color: "#333", mb: 2, maxWidth: "95%" }}
          >
            Experience the richness of wholesome nutrition at Jamii Cereals and
            Gen Store 🌿
          </Typography>

          <Typography
            sx={{
              fontSize: "72px",
              fontWeight: "bold",
              lineHeight: 1.1,
              color: "#333",
              mb: 3,
              maxWidth: "500px",
            }}
          >
            Elevate Your Meals
          </Typography>

          <Typography
            sx={{ fontSize: "18px", color: "#333", mb: 3, maxWidth: "95%" }}
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
              fontSize: "16px",
              padding: "10px 24px",
              borderRadius: "6px",
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
                    width: 40,
                    height: 40,
                    backgroundColor: "#ccc",
                    border: "2px solid white",
                    position: "absolute",
                    left: `${index * 24}px`,
                    zIndex: 5 - index,
                  }}
                >
                  C
                </Avatar>
              ))}
            </Box>

            <StatsBox>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px", color: "#333" }}
              >
                4,800
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#666" }}>
                Customer Favorites
              </Typography>
            </StatsBox>
          </AvatarGroup>
        </LeftContent>

        <RightContent>
          <JamiiLogoContainer>
            <JamiiLogo src="/assets/jamii.png" alt="Jamii Biz Logo" />
          </JamiiLogoContainer>
        </RightContent>
      </ContentContainer>

      {/* Curved dotted line */}
      <Box
        sx={{
          position: "absolute",
          bottom: "100px",
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <svg width="600" height="100" viewBox="0 0 600 100">
          <path
            d="M100,20 Q300,150 500,20"
            stroke="#D0D0D0"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>
      </Box>

      {/* Center avatar */}
      <CentralAvatar>C</CentralAvatar>
    </MainContainer>
  );
};

export default HeroSection;
