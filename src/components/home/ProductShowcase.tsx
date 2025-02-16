import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";

const products = [
  {
    src: "/assets/images/lentils.jpg",
    alt: "Lentils",
    title: "Nutrient-rich Lentils",
    description:
      "Explore our selection of high-quality lentils, perfect for nourishing meals.",
  },
  {
    src: "/assets/images/beans.jpg",
    alt: "Beans",
    title: "Versatile Beans",
    description:
      "Discover various types of beans that add flavor and nutrition to your dishes.",
  },
  {
    src: "/assets/images/maize.jpg",
    alt: "Dry Maize",
    title: "Fresh Dry Maize",
    description:
      "Enjoy fresh dry maize, ideal for traditional and modern recipes.",
  },
  {
    src: "/assets/images/sorghum.jpg",
    alt: "Sorghum Flour",
    title: "Gluten-Free Sorghum Flour",
    description:
      "Discover our gluten-free sorghum flour, perfect for baking and traditional recipes.",
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#3e3e3e",
            textAlign: "center",
            mb: { xs: 4, md: 8 },
          }}
        >
          Elevate Your Pantry with Jamii Cereals and Gen Shop
        </Typography>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={150}
                  height={150}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#3e3e3e",
                    mt: 2,
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem", color: "#3e3e3e" }}
                >
                  {product.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductShowcase;
