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
  backgroundImage: "url('/assets/cereal-background.png')",
  backgroundSize: "cover",
  backgroundPosition: "right center",
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
  position: "relative", // Added to position the dotted line relative to this container
});

const RightContent = styled(Box)({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1, // Ensure the logo is above other elements
});

const FreshSelectionsBadge = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#F8EFE0",
  padding: "8px 20px",
  borderRadius: "30px",
  marginBottom: "16px",
});

const JamiiLogoContainer = styled(Box)({
  width: "450px",
  height: "450px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "absolute", // Changed to absolute to allow overlap
  right: "0", // Align to the right
  top: "50%", // Center vertically
  transform: "translateY(-50%)", // Adjust for vertical centering
  backgroundImage: "url('/assets/cereal-texture.png')",
  backgroundSize: "cover",
  zIndex: 2, // Ensure the logo overlaps the avatar group
});

const JamiiLogo = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const AvatarGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  position: "absolute", // Changed to absolute to position near the logo
  bottom: "50px", // Position near the bottom of the left content
  left: "40px", // Align with the left padding of LeftContent
  zIndex: 1, // Below the logo
});

const StatsBox = styled(Box)({
  backgroundColor: "rgba(211, 211, 211, 0.8)",
  padding: "18px 26px",
  borderRadius: "15px",
  marginLeft: "120px",
  boxShadow: "none",
});

const DottedLineContainer = styled(Box)({
  position: "absolute",
  top: "380px", // Adjust based on the position of the "Shop Online" button
  left: "40px", // Align with the left padding of LeftContent
  width: "200px", // Width of the curved line
  height: "100px", // Height of the curved line
  zIndex: 0, // Below other elements
});

const HeroSection: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LeftContent>
          <FreshSelectionsBadge>
            <Typography sx={{ fontWeight: "600", color: "#4D3319" }}>
              Fresh Selections
            </Typography>
          </FreshSelectionsBadge>

          <Typography
            sx={{ fontSize: "18px", color: "#333", mb: 2, maxWidth: "90%" }}
          >
            Experience the richness of wholesome nutrition at Jamii Cereals and
            Gen Store 🌿
          </Typography>

          <Typography
            sx={{
              fontSize: "64px",
              fontWeight: "bold",
              lineHeight: 1.1,
              color: "#222",
              mb: 2,
              maxWidth: "500px",
            }}
          >
            Elevate Your Meals
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
              backgroundColor: "#556B2F",
              color: "white",
              textTransform: "none",
              fontSize: "18px",
              padding: "12px 28px",
              borderRadius: "6px",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#6B8E23" },
            }}
          >
            Shop Online
          </Button>

          {/* Dotted Curved Line (Part 1) */}
          <DottedLineContainer>
            <svg
              width="200"
              height="100"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <path
                d="M0,0 Q100,100 200,50"
                stroke="#999"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </DottedLineContainer>

          <AvatarGroup>
            {/* First Avatar */}
            <Avatar
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#FF6B6B",
                border: "2px solid white",
                position: "absolute",
                left: "200px", // Position at the end of the curved line
                top: "40px", // Adjust based on the curve
              }}
            />

            {/* Dotted Line (Part 2) - Horizontal */}
            <Box
              sx={{
                position: "absolute",
                width: "120px",
                height: "2px",
                background: "transparent",
                borderTop: "2px dashed #999",
                left: "250px", // Start after the first avatar
                top: "60px", // Align with the first avatar
              }}
            />

            {/* Grouped Avatars */}
            <Box sx={{ display: "flex", position: "relative", left: "370px" }}>
              {[0, 1, 2, 3, 4].map((index) => (
                <Avatar
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor:
                      index === 0
                        ? "#FF6B6B"
                        : index === 1
                        ? "#FF9E6B"
                        : index === 2
                        ? "#6B8E23"
                        : index === 3
                        ? "#4682B4"
                        : "#FF4081",
                    border: "2px solid white",
                    position: "absolute",
                    left: `${index * 25}px`,
                    zIndex: 5 - index,
                  }}
                />
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
              alt="Jamii Cereals and Gen Store Logo"
            />
          </JamiiLogoContainer>
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
};

export default HeroSection;
