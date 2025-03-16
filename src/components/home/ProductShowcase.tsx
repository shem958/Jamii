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
  flexDirection: "column", // Stack items vertically by default
  alignItems: "center", // Center items horizontally
  width: "100%",
  textAlign: "center", // Ensure text is centered
  "@media (min-width: 768px)": {
    // Adjust for larger screens
    flexDirection: "row", // Display items in a row
    justifyContent: "center", // Space out items evenly
    textAlign: "left", // Align text to the left
  },
});

const MainHeading = styled(Typography)`
  font-weight: bold !important;
  margin-bottom: 16px !important;
  font-size: 2.5rem !important;
  line-height: 1.2 !important;
  max-width: 50%; // Limit width to 50% on larger screens
  text-align: inherit !important;
`;

const SubHeading = styled(Typography)`
  color: #555 !important;
  font-size: 1.25rem !important;
  max-width: 50%; // Limit width to 50% on larger screens
  text-align: inherit !important;
`;

const ProductCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#f5f5f5", // Grayish background
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  position: "relative", // For positioning the heart icon
});

const ProductCardContent = styled(CardContent)({
  flexGrow: 1,
});

const HeartIcon = styled("i")({
  position: "absolute",
  top: "16px",
  right: "16px",
  color: "#ff6a6a", // Red color for the heart icon
  fontSize: "24px", // Adjust size
});

const products = [
  {
    title: "Nutritious Lentils",
    image: "/assets/original.jpg", // Replace with your image path
    description:
      "Perfect for hearty stews, packed with protein and fiber to nourish your body.",
  },
  {
    title: "Versatile Beans",
    image: "/assets/beans.jpg", // Replace with your image path
    description:
      "Add nutrition and flavor to countless recipes for a nutritious meal option.",
  },
  {
    title: "Fresh Dry Maize",
    image: "/assets/maize.jpg", // Replace with your image path
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
              {/* Heart Icon */}
              <HeartIcon
                className="fa-solid fa-heart"
                aria-hidden="true"
              ></HeartIcon>
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.title}
                layout="responsive"
                width={500}
                height={300}
                style={{ objectFit: "cover", borderRadius: "8px 8px 0px 0px" }}
              />
              {/* Product Content */}
              <ProductCardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ fontWeight: "bold", marginBottom: "8px" }}
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
