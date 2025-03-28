"use client";

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  backgroundColor: "#f8f5f0",
  maxWidth: "100%",
  margin: "0 auto",
});

const ContentWrapper = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
});

const YellowSection = styled(Box)({
  backgroundColor: "#f8e6b5",
  borderRadius: "16px",
  display: "flex",
  overflow: "hidden",
  height: "500px",
});

const ProductImageContainer = styled(Box)({
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "#f8e6b5",
});

const CerealImageContainer = styled(Box)({
  width: "60%",
  position: "relative",
});

const GreenCircle = styled(Box)({
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  backgroundColor: "#5A6B34",
  bottom: "-150px",
  right: "-150px",
  zIndex: 1,
});

const ExperienceSection: React.FC = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <YellowSection>
          <ProductImageContainer>
            <Image
              src="/assets/JTea.png"
              alt="Jamii Products"
              width={250}
              height={400}
              style={{
                objectFit: "contain",
                zIndex: 2,
                position: "relative",
              }}
            />
          </ProductImageContainer>
          <CerealImageContainer>
            <Image
              src="/assets/cereals.png"
              alt="Various Beans and Cereals in Sacks"
              layout="fill"
              objectFit="cover"
            />
            <GreenCircle />
          </CerealImageContainer>
        </YellowSection>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            {" "}
            {/* Changed from md=12 to md=8 for 80% width */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "#000",
                fontSize: "2.5rem",
                fontWeight: "bold",
                lineHeight: "1.2",
                mb: 1,
              }}
            >
              Experience
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: "#000",
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "1.3",
                mb: 2,
              }}
            >
              Convenient Shopping for Dry Cereals at Jamii Cereals and Gen Shop
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                mb: 3,
                lineHeight: "1.6",
                fontSize: "1rem",
              }}
            >
              Explore nutrient-rich lentils, versatile beans, and fresh dry
              maize, perfect for delicious meals. Enjoy convenient online
              shopping with a delivery service across Nairobi or visit our store
              in Dagoretti Market.
            </Typography>
            <Box
              component="hr"
              sx={{
                border: "none",
                height: "1px",
                backgroundColor: "#ddd",
                my: 3,
              }}
            />
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: "bold",
                color: "#000",
                fontSize: "1.25rem",
              }}
            >
              Fresh Products Delivered to Your Doorstep
            </Typography>
          </Grid>
        </Grid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ExperienceSection;
