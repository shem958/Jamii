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
  padding: "0",
  overflow: "hidden",
  alignItems: "center",
});

const ContentContainer = styled(Box)({
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  position: "relative",
  height: "calc(100vh - 64px)",
});

const LeftContent = styled(Box)({
  width: "50%",
  paddingLeft: "40px",
  zIndex: 1, // Ensure content is above the background image
});

const RightContent = styled(Box)({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const FreshSelectionsBadge = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#F8EFE0", // Beige/cream color
  padding: "8px 20px",
  borderRadius: "30px",
  marginBottom: "16px",
});

const JamiiLogoContainer = styled(Box)({
  width: "900px",
  height: "800px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  overflow: "hidden",
  position: "absolute",
  right: "-300px", // Adjusted to position on the right side
  top: "-200px",
  backgroundImage: "url('/assets/cereal-texture.png')", // Background image of grains
  backgroundSize: "cover",
});

const JamiiLogo = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain", // Adjusted to ensure the logo fits properly
});

const AvatarGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  position: "relative",
});

const StatsBox = styled(Box)({
  backgroundColor: "rgba(211, 211, 211, 0.8)", // Light gray with opacity
  padding: "18px 26px",
  borderRadius: "15px",
  marginLeft: "20px",
  boxShadow: "none",
});

const DottedLine = styled(Box)({
  position: "absolute",
  width: "120px",
  height: "2px",
  background: "transparent",
  borderTop: "2px dashed #999",
  left: "50px",
  top: "50%",
});

const CustomerAvatar = styled(Avatar)({
  width: "80px",
  height: "80px",
  position: "absolute",
  left: "180px", // Positioned at the end of the dotted line
  top: "50%",
  transform: "translateY(-50%)",
});

const HeroSection: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LeftContent>
          <FreshSelectionsBadge>
            <Typography sx={{ fontWeight: "600", color: "#4D3319", mr: 1 }}>
              EXPERIENCE THE RICHNESS OF WHOLESOME NUTRITION AT
            </Typography>
            <Typography sx={{ fontWeight: "600", color: "#4D3319" }}>
              Jamii Cereals and GEN STORE
            </Typography>
            <Box
              component="span"
              sx={{
                ml: 1,
                width: "16px",
                height: "16px",
                backgroundColor: "#FFD700", // Yellow star
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            />
          </FreshSelectionsBadge>

          <Typography
            sx={{
              fontSize: "64px",
              fontWeight: "bold",
              lineHeight: 1.1,
              color: "#222",
              mb: 2,
              maxWidth: "500px",
              fontFamily: "sans-serif",
            }}
          >
            ELEVATE YOUR MEALS
          </Typography>

          <Typography
            sx={{ fontSize: "18px", color: "#333", mb: 4, maxWidth: "90%" }}
          >
            Shop premium dry cereals and groceries delivered right to your door
            or visit us at Dagoretti Market.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#556B2F", // Dark green/brown color
              color: "white",
              textTransform: "none",
              fontSize: "18px",
              padding: "12px 28px",
              borderRadius: "20px", // Rounded edges
              boxShadow: "none",
              "&:hover": { backgroundColor: "#6B8E23" },
            }}
          >
            Shop Online
          </Button>

          <AvatarGroup>
            <Box sx={{ display: "flex", position: "relative" }}>
              {[0, 1, 2].map((index) => (
                <Avatar
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "2px solid white",
                    position: "absolute",
                    left: `${index * 25}px`,
                    zIndex: 5 - index,
                  }}
                  src={`/assets/customer-${index + 1}.png`} // Placeholder for customer images
                />
              ))}
            </Box>
            <DottedLine />
            <CustomerAvatar src="/assets/customer-with-basket.png" />{" "}
            {/* Placeholder for customer with basket */}
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
              src="/assets/jamii-biz-logo.png" // Placeholder for "Jamii BIZ" logo
              alt="Jamii Cereals and Gen Store Logo"
            />
          </JamiiLogoContainer>
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
};

export default HeroSection;
