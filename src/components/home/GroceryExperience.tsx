"use client";
// components/GroceryExperience.tsx
import React from "react";
import { Typography, Container, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",
});

const ProductPaper = styled(Paper)({
  padding: "16px",
  textAlign: "left",
});

const products = [
  {
    title: "Nutrient-Packed Lentils",
    description:
      "Discover our premium lentils, loaded with protein and fiber, perfect for hearty stews and satisfying meals.",
    icon: "/path-to-lentils-icon.png", // Replace with your icon path
  },
  {
    title: "Fresh Dry Maize for Your Recipes",
    description:
      "Enjoy the quality of our fresh dry maize, ready for your favorite traditional and modern recipes.",
    icon: "/path-to-maize-icon.png", // Replace with your icon path
  },
  {
    title: "Versatile Beans for Every Dish",
    description:
      "Our beans are perfect for various recipes, making them a staple in your kitchen for healthy, delicious meals.",
    icon: "/path-to-beans-icon.png", // Replace with your icon path
  },
  {
    title: "Gluten-Free Sorghum & Millet Flour",
    description:
      "Discover our gluten-free options, perfect for baking and tradition, nutritious and versatile for any meal.",
    icon: "/path-to-sorghum-icon.png", // Replace with your icon path
  },
];

const GroceryExperience: React.FC = () => {
  return (
    <SectionContainer maxWidth="lg">
      <Typography variant="h4" component="h2" gutterBottom>
        Experience the Essence of Jamii Cereals and Gen Shop
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductPaper elevation={3}>
              <Avatar
                src={product.icon}
                alt={product.title}
                sx={{ width: 56, height: 56, mb: 2 }}
              />
              <Typography variant="h6" component="h3" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body1" component="p">
                {product.description}
              </Typography>
            </ProductPaper>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default GroceryExperience;
