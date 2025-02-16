// components/ProductsSection.tsx
import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",
});

const HighlightBox = styled(Box)({
  backgroundColor: "#f5f5f5",
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "32px",
});

const ProductPaper = styled(Paper)({
  padding: "24px",
  textAlign: "left",
  marginBottom: "16px",
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
        Transform Your Grocery Shopping with Jamii Cereals and Gen Shop
      </Typography>
      <Typography variant="h6" component="h3" paragraph>
        Experience the convenience of quality products delivered fresh from our
        store to your home in Nairobi.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <HighlightBox>
            <Typography variant="h5" component="p" sx={{ fontWeight: "bold" }}>
              Shop with Confidence
            </Typography>
          </HighlightBox>
          <Box
            component="img"
            src="/path-to-grains-image.png"
            alt="Grains and Cereals"
            sx={{ width: "100%", borderRadius: "8px" }}
          />{" "}
          {/* Replace with your image path */}
        </Grid>
        <Grid item xs={12} md={6}>
          {products.map((product, index) => (
            <ProductPaper elevation={3} key={index}>
              <Typography variant="h6" component="h3" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body1" component="p">
                {product.description}
              </Typography>
            </ProductPaper>
          ))}
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default ProductsSection;
