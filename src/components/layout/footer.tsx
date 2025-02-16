"use client";
import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3e3e3e",
        color: "#ffffff",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Overview Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Jamii Cereals and Gen Shop
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffffff" }}>
              Your one-stop minimart for all your dry cereal and grocery needs.
              Shop online and enjoy fast delivery to your doorstep or visit our
              store in Dagoretti Market, Kenya.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Explore
            </Typography>
            <Link href="#" sx={{ display: "block", color: "#ffffff", mb: 1 }}>
              About Us
            </Link>
            <Link href="#" sx={{ display: "block", color: "#ffffff", mb: 1 }}>
              Product Showcase
            </Link>
            <Link href="#" sx={{ display: "block", color: "#ffffff", mb: 1 }}>
              Shop Online
            </Link>
            <Link href="#" sx={{ display: "block", color: "#ffffff", mb: 1 }}>
              Visit Us
            </Link>
            <Link href="#" sx={{ display: "block", color: "#ffffff", mb: 1 }}>
              Customer Testimonials
            </Link>
            <Link href="#" sx={{ display: "block", color: "#ffffff", mb: 1 }}>
              Frequently Asked Questions
            </Link>
            <Link href="#" sx={{ display: "block", color: "#ffffff" }}>
              Contact Us
            </Link>
          </Grid>

          {/* Product Highlights */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Our Products
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }}>
              <strong>Lentils:</strong> Perfect for hearty stews, packed with
              protein and fiber.
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }}>
              <strong>Beans:</strong> Versatile and nutritious, great for a
              variety of dishes.
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }}>
              <strong>Dry Maize:</strong> Fresh and ready for your favorite
              recipes.
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }}>
              <strong>Sorghum Flour:</strong> Gluten-free and ideal for
              traditional cooking.
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffffff" }}>
              <strong>Millet Flour:</strong> Nutrient-rich and versatile for
              baking.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#ffffff" }}>
            &copy; 2025 Jamii Cereals and Gen Shop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
