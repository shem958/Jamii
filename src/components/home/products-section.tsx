"use client";
// components/ProductsSection.tsx

import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "left", // Align text to left
});

const HighlightBox = styled(Box)({
  backgroundColor: "#f5f5f5",
  padding: "24px",
  borderRadius: "12px",
  marginBottom: "32px",
  position: "relative",
});

const ProductPaper = styled(Paper)({
  padding: "24px",
  textAlign: "left",
  marginBottom: "16px",
  borderRadius: "10px",
});

const FooterText = styled(Typography)({
  marginTop: "32px",
  maxWidth: "600px",
  margin: "auto",
});

const products = [
  {
    title: "Wide Range of Products",
    description:
      "From hearty lentils rich in protein to versatile beans, discover nutritious options for your meals.",
  },
  {
    title: "Personalized Experience",
    description:
      "Visit our welcoming store in Dagoretti Market for expert assistance and high-quality selections.",
  },
  {
    title: "Affordable Prices",
    description:
      "Enjoy competitive pricing without compromising on the quality of your groceries.",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <SectionContainer maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom>
        Transform Your Grocery Shopping with Jamii Cereals and Gen Store
      </Typography>
      <Typography variant="body1" component="p" paragraph>
        Experience the convenience of quality products delivered fresh from our
        store to your home in Nairobi.
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item xs={12} md={6}>
          <HighlightBox>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: "bold",
                position: "absolute",
                top: "70%", // Adjust position to match the image
                left: "50%", // Adjust position to match the image
                transform: "translate(-50%, -50%)", // Center the text
                color: "white", // Text color to white
                zIndex: 1,
                fontSize: "2rem", // Increase font size to match the image
              }}
            >
              Shop with Confidence
            </Typography>
            <Box
              component="img"
              src="/assets/transform.png"
              alt="Grains and Cereals"
              sx={{ width: "100%", borderRadius: "8px" }}
            />
          </HighlightBox>
        </Grid>
        <Grid item xs={12} md={6}>
          {products.map((product, index) => (
            <ProductPaper elevation={3} key={index}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    marginRight: "10px",
                  }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {product.title}
                </Typography>
              </Box>
              <Typography variant="body1" component="p">
                {product.description}
              </Typography>
            </ProductPaper>
          ))}
        </Grid>
      </Grid>
      <FooterText variant="body1">
        Committed to ensuring freshness and reliability, we strive to enhance
        your grocery shopping experience.
      </FooterText>
    </SectionContainer>
  );
};

export default ProductsSection;
