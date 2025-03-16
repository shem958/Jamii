// components/ProductsShowcase.tsx
"use client";

import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",
});

const HeadingContainer = styled("div")({
  marginBottom: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  textAlign: "center",
  "@media (min-width: 768px)": {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "left",
  },
});

const MainHeading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "16px",
  fontSize: "2.5rem",
  lineHeight: "1.2",
  maxWidth: "50%",
  textAlign: "inherit",
});

const SubHeading = styled(Typography)({
  color: "#555",
  fontSize: "1.25rem",
  maxWidth: "50%",
  textAlign: "inherit",
});

const ProductCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  position: "relative",
  overflow: "hidden", // Ensures the icon doesn't overflow the card
});

const ProductCardContent = styled(CardContent)({
  flexGrow: 1,
});

// Updated Heart Icon styling based on the first image

const HeartIcon = styled("i")({
  position: "absolute",
  top: "242px", // Moves it exactly to the boundary
  right: "16px", // Keeps it on the right
  transform: "translateY(-50%)", // Ensures it's centered at the boundary
  color: "#ff6a6a",
  fontSize: "40px",
  zIndex: 2,
});

const products = [
  {
    title: "Nutritious Lentils",
    image: "/assets/original.jpg",
    description:
      "Perfect for hearty stews, packed with protein and fiber to nourish your body.",
  },
  {
    title: "Versatile Beans",
    image: "/assets/beans.jpg",
    description:
      "Add nutrition and flavor to countless recipes for a nutritious meal option.",
  },
  {
    title: "Fresh Dry Maize",
    image: "/assets/maize.jpg",
    description:
      "Ready for your favorite culinary creations and packed with wholesome flavor.",
  },
];

const ProductsShowcase: React.FC = () => {
  return (
    <SectionContainer maxWidth="lg">
      {/* Heading Section */}
      <HeadingContainer>
        <MainHeading variant="h3" as="h2">
          Elevate Your Pantry with Jamii Cereals and Gen Shop
        </MainHeading>
        <SubHeading variant="h5" as="p">
          Explore our expertly sourced dry cereals and grocery items designed to
          enrich your meals and support your health.
        </SubHeading>
      </HeadingContainer>

      {/* Product Cards */}
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard>
              {/* Updated Heart Icon */}
              <HeartIcon className="fa-solid fa-heart" aria-hidden="true" />
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.title}
                layout="responsive"
                width={400}
                height={300}
                style={{ objectFit: "cover", borderRadius: "8px 8px 0px 0px" }}
              />
              {/* Product Content */}
              <ProductCardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ fontWeight: "bold", marginBottom: "30px" }}
                >
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
