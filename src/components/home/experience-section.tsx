"use client";

// components/ExperienceSection.tsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Image from "next/image";

const theme = createTheme({
  typography: {
    h4: {
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
    },
  },
});

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "left",
  backgroundColor: "#f8f5f0", // Light beige background
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px",
  maxWidth: "90%",
  margin: "0 auto",
});

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 1,
});

const FreshBadge = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#f1f5eb", // Light green background
  padding: "10px 24px",
  borderRadius: "30px",
  marginTop: "20px", // Added spacing from paragraph
});

const YellowBox = styled(Box)({
  backgroundColor: "#f8e6b5", // Light yellow background
  width: "100%",
  borderRadius: "16px", // Increased border radius to match design
  overflow: "hidden",
  position: "relative",
  height: "360px",
  display: "flex",
});

// Semi-circular green element
const GreenSemiCircle = styled(Box)({
  position: "absolute",
  width: "340px",
  height: "340px",
  bottom: "-170px", // More of the circle is below the container
  left: "35%", // Adjusted position
  borderRadius: "50%",
  border: "60px solid #5A6B34", // Thicker border and darker olive green
  zIndex: 0,
  boxSizing: "border-box",
});

const ExperienceSection: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SectionContainer maxWidth="lg">
        <ContentWrapper>
          <Grid container spacing={4}>
            {/* Left side - Images */}
            <Grid item xs={12} md={6} style={{ position: "relative" }}>
              <YellowBox>
                {/* Left side image - product packages */}
                <Box
                  sx={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/assets/JTea.png"
                    alt="Packaged Jamii Products"
                    width={220}
                    height={320}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* Right side image - cereals in sacks */}
                <Box sx={{ width: "50%", height: "100%" }}>
                  <Image
                    src="/assets/cereals.png"
                    alt="Various Beans and Cereals in Sacks"
                    width={380}
                    height={360}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>

                {/* Green semi-circle element */}
                <GreenSemiCircle />
              </YellowBox>
            </Grid>

            {/* Right side - Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ paddingLeft: { xs: 0, md: 4 } }}>
                {" "}
                {/* Added left padding for better alignment */}
                <Typography
                  variant="h4"
                  component="h2"
                  style={{
                    color: "#000",
                    marginBottom: "22px", // Adjusted spacing
                    fontSize: "2.2rem",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                  }}
                >
                  Experience Convenient
                  <br />
                  Shopping
                  <br />
                  for Dry Cereals at Jamii Cereals
                  <br />
                  and
                  <br />
                  Gen Shop
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "#555",
                    marginBottom: "28px",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    maxWidth: "95%", // Limit width to match design
                  }}
                >
                  Explore nutrient-rich lentils, versatile beans, and fresh dry
                  maize, perfect for delicious meals. Enjoy convenient online
                  shopping with a delivery service across Nairobi or visit our
                  store in Dagoretti Market.
                </Typography>
                <FreshBadge>
                  <Typography
                    variant="h6"
                    component="span"
                    style={{
                      fontWeight: "bold",
                      color: "#5A6B34", // Darker green
                      marginRight: "10px",
                    }}
                  >
                    Fresh
                  </Typography>
                  <Typography variant="body1" component="span">
                    Products Delivered to Your Doorstep
                  </Typography>
                </FreshBadge>
              </Box>
            </Grid>
          </Grid>
        </ContentWrapper>
      </SectionContainer>
    </ThemeProvider>
  );
};

export default ExperienceSection;
