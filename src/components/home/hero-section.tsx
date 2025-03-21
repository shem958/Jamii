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
  zIndex: 1,
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
  backgroundColor: "#F8EFE0",
  padding: "8px 20px",
  borderRadius: "30px",
  marginBottom: "32px",
});

const FreshSelectionsButton = styled(Box)({
  backgroundColor: "#4D3319",
  color: "white",
  padding: "4px 12px",
  borderRadius: "20px",
  marginRight: "12px",
  fontSize: "14px",
  fontWeight: "600",
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
  right: "-400px",
  top: "-300px",
  backgroundImage: "url('/assets/cereal-texture.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const JamiiLogo = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const AvatarGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  position: "relative",
});

const StatsBox = styled(Box)({
  backgroundColor: "rgba(211, 211, 211, 0.8)",
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
  left: "180px",
  top: "50%",
  transform: "translateY(-50%)",
  border: "2px solid #ccc",
});

const HeroSection: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LeftContent>
          <FreshSelectionsBadge>
            <FreshSelectionsButton>Fresh Selections</FreshSelectionsButton>
            <Typography sx={{ fontWeight: "600", color: "#4D3319", mr: 1 }}>
              EXPERIENCE THE RICHNESS OF WHOLESOME NUTRITION AT Jamii Cereals
              and GEN STORE
            </Typography>
            <Box
              component="img"
              src="/assets/star-icon.png"
              sx={{ width: "16px", height: "16px", ml: 1 }}
            />
          </FreshSelectionsBadge>

          <Typography
            sx={{
              fontSize: "64px",
              fontWeight: "bold",
              lineHeight: 1.1,
              color: "#222",
              mb: 3,
              maxWidth: "500px",
              fontFamily: "sans-serif",
            }}
          >
            ELEVATE YOUR MEALS
          </Typography>

          <Typography
            sx={{ fontSize: "18px", color: "#333", mb: 5, maxWidth: "90%" }}
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
              borderRadius: "20px",
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
                  src={`/assets/customer-${index + 1}.png`}
                />
              ))}
            </Box>
            <DottedLine />
            <CustomerAvatar src="/assets/customer-with-basket.png" />
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
              src="/assets/jamii-biz-logo.png"
              alt="Jamii Cereals and Gen Store Logo"
            />
          </JamiiLogoContainer>
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
};

export default HeroSection;
