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
  overflow: "hidden",
});

const ContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flex: 1,
  position: "relative",
});

const LeftSection = styled(Box)({
  width: "60%",
  padding: "80px 0 0 80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  position: "relative",
  zIndex: 1,
});

const RightSection = styled(Box)({
  width: "40%",
  position: "relative",
  overflow: "hidden",
});

const CerealBackground = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url(/cereals-bg.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const JamiiLogo = styled("img")({
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "250px",
  zIndex: 2,
});

const AvatarCircle = styled(Avatar)({
  width: 80,
  height: 80,
  border: "3px solid white",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

const CustomerAvatars = styled(Box)({
  display: "flex",
  marginTop: "40px",
});

const StatsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F0F0F0",
  borderRadius: "12px",
  padding: "16px 24px",
  marginLeft: "20px",
});

const HeroSection: React.FC = () => {
  // This will represent the dotted curved line from avatars to the central profile
  const DottedLine = () => (
    <svg
      width="400"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      style={{
        position: "absolute",
        bottom: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 0,
      }}
    >
      <path
        d="M30,100 Q200,180 370,100"
        stroke="#CCCCCC"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
    </svg>
  );

  return (
    <MainContainer>
      <ContentContainer>
        <LeftSection>
          {/* Fresh Selections Tag */}
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#F8EFE0",
              padding: "8px 20px",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "500",
              mb: 2,
              maxWidth: "fit-content",
            }}
          >
            Fresh Selections
          </Box>

          {/* Main Content */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "#333",
              mb: 2,
              maxWidth: "500px",
            }}
          >
            Experience the richness of wholesome nutrition at Jamii Cereals and
            Gen Store 🌿
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: "64px",
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
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "#333",
              mb: 3,
              maxWidth: "500px",
            }}
          >
            Shop premium dry cereals and groceries delivered right to your door
            or visit us at Dagoretti Market.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#556B2F",
              color: "white",
              padding: "10px 24px",
              fontSize: "16px",
              textTransform: "none",
              fontWeight: "normal",
              borderRadius: "4px",
              width: "fit-content",
              "&:hover": { backgroundColor: "#6B8E23" },
            }}
          >
            Shop Online
          </Button>

          {/* Customer Avatars and Stats */}
          <CustomerAvatars>
            <Box sx={{ display: "flex" }}>
              {[0, 1, 2, 3, 4].map((index) => (
                <Avatar
                  key={index}
                  sx={{
                    width: 36,
                    height: 36,
                    border: "2px solid white",
                    marginLeft: index === 0 ? 0 : -1,
                    bgcolor: "#ccc", // Placeholder color
                    fontSize: "14px",
                  }}
                >
                  C
                </Avatar>
              ))}
            </Box>

            <StatsBox>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  4,800
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Customer Favorites
                </Typography>
              </Box>
            </StatsBox>
          </CustomerAvatars>
        </LeftSection>

        <RightSection>
          <CerealBackground />
          <JamiiLogo src="/jamii-logo.png" alt="Jamii Biz Logo" />
        </RightSection>
      </ContentContainer>

      {/* Center profile avatar */}
      <Box
        sx={{
          position: "absolute",
          bottom: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AvatarCircle sx={{ bgcolor: "#ccc" }}>C</AvatarCircle>
      </Box>

      {/* Dotted curved line connecting avatars */}
      <DottedLine />
    </MainContainer>
  );
};

export default HeroSection;
