import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 6, px: 4, bgcolor: "common.white", color: "black" }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight={600}>
            Jamii Cereals and Gen Shop
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
            Welcome to Jamii Cereals and Gen Store, your one-stop minimart for
            all your dry cereal and grocery needs. Experience the convenience of
            shopping online with delivery or visiting our physical store in
            Dagoretti Market, Kenya.
          </Typography>
        </Grid>

        {/* Explore Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight={600}>
            Explore
          </Typography>
          <Box sx={{ mt: 1 }}>
            {[
              "About Us",
              "Product Showcase",
              "Shop Online",
              "Visit Us",
              "Customer Testimonials",
              "Frequently Asked Questions",
              "Contact Us",
            ].map((item) => (
              <Typography key={item} variant="body2" color="text.secondary">
                <Link href="#" underline="none" color="text.secondary">
                  {item}
                </Link>
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Our Products Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight={600}>
            Our Products
          </Typography>
          <Box sx={{ mt: 1 }}>
            {[
              "Lentils: Perfect for hearty stews, packed with protein and fiber.",
              "Beans: Versatile and nutritious, great for a variety of dishes.",
              "Dry Maize: Fresh and ready for your favorite recipes.",
              "Sorghum Flour: Gluten-free and ideal for traditional cooking.",
              "Millet Flour: Nutrient-rich and versatile for baking.",
            ].map((item) => (
              <Typography key={item} variant="body2" color="text.secondary">
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" fontWeight={600}>
          Copyright © 2025 Jamii Cereals and Gen Shop.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
