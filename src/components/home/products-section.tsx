"use client";

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "left",
});

const FeatureList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const FeatureItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
});

const Checkmark = styled("span")({
  color: "green",
  fontSize: "24px",
  marginRight: "10px",
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
    <SectionContainer maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Transform Your Grocery Shopping with Jamii Cereals and Gen Store
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            Experience the convenience of quality products delivered fresh from
            our store to your home in Nairobi.
          </Typography>
          <FeatureList>
            {products.map((product, index) => (
              <FeatureItem key={index}>
                <Checkmark>&#10003;</Checkmark>
                <Box>
                  <Typography variant="h6" component="h3" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography variant="body1">{product.description}</Typography>
                </Box>
              </FeatureItem>
            ))}
          </FeatureList>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="/assets/transform.png"
              alt="Grains and Cereals"
              sx={{ width: "100%", borderRadius: "8px", boxShadow: 3 }}
            />
            <Typography
              variant="h5"
              component="p"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              Shop with Confidence
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default ProductsSection;
