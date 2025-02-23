"use client";
// components/ProductsShowcase.tsx

import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",
});

const ProductCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ProductCardContent = styled(CardContent)({
  flexGrow: 1,
});

const products = [
  {
    title: "Nutritious Lentils",
    image: "/path-to-lentils-image.png", // Replace with your image path
    description:
      "Perfect for hearty stews, packed with protein and fiber to nourish your body.",
  },
  {
    title: "Versatile Beans",
    image: "/path-to-beans-image.png", // Replace with your image path
    description:
      "Add nutrition and flavor to countless recipes for a nutritious meal option.",
  },
  {
    title: "Fresh Dry Maize",
    image: "/path-to-maize-image.png", // Replace with your image path
    description:
      "Ready for your favorite culinary creations and packed with wholesome flavor.",
  },
];

const ProductsShowcase: React.FC = () => {
  return (
    <SectionContainer maxWidth="lg">
      <Typography variant="h4" component="h2" gutterBottom>
        Elevate Your Pantry with Jamii Cereals and Gen Shop
      </Typography>
      <Typography variant="h6" component="h3" paragraph>
        Explore our expertly sourced dry cereals and grocery items designed to
        enrich your meals and support your health.
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard>
              <Image
                src={product.image}
                alt={product.title}
                layout="responsive"
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <ProductCardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {product.description}
                </Typography>
              </ProductCardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default ProductsShowcase;
