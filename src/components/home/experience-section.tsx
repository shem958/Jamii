// components/ExperienceSection.tsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",
});

const ProductCard = styled(Card)({
  maxWidth: 345,
  margin: "0 auto",
});

const CallToActionBox = styled(Box)({
  marginTop: "32px",
});

const products = [
  {
    title: "Wernro Jamii Green",
    image: "/path-to-green-package", // Replace with your image path
    alt: "Wernro Jamii Green Package",
  },
  {
    title: "Wernro Jamii Red",
    image: "/path-to-red-package", // Replace with your image path
    alt: "Wernro Jamii Red Package",
  },
  {
    title: "Wernro Jamii Yellow",
    image: "/path-to-yellow-package", // Replace with your image path
    alt: "Wernro Jamii Yellow Package",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <SectionContainer maxWidth="lg">
      <Typography variant="h4" component="h2" gutterBottom>
        Experience Convenient Shopping for Dry Cereals at Jamii Cereals and Gen
        Shop
      </Typography>
      <Typography variant="h6" component="h3" paragraph>
        Explore nutrient-rich lentils, versatile beans, and fresh dry maize,
        perfect for delicious meals. Enjoy convenient online shopping with a
        delivery service across Nairobi or visit our store in Dagoretti Market.
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ProductCard>
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.alt}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
      <CallToActionBox>
        <Button variant="contained" color="primary" size="large">
          Fresh Products Delivered to Your Doorstep
        </Button>
      </CallToActionBox>
    </SectionContainer>
  );
};

export default ExperienceSection;
