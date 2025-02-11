import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

const products = [
  {
    icon: "/assets/lentils-icon.svg",
    title: "Nutritious Lentils",
    description:
      "Perfect for hearty stews, packed with protein and fiber to nourish your body.",
  },
  {
    icon: "/assets/beans-icon.svg",
    title: "Versatile Beans",
    description:
      "Add nutrition and flavor to countless recipes for a nutritious meal option.",
  },
  {
    icon: "/assets/maize-icon.svg",
    title: "Fresh Dry Maize",
    description:
      "Ready for your favourite culinary creations and packed with wholesome flavor.",
  },
];
const ProductsSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "background.paper",
      }}
    >
      <Stack spacing={4} alignItems="center">
        {products.map((product, index) => (
          <Paper key={index} sx={{ p: 4, textAlign: "center", maxWidth: 320 }}>
            <Image
              src={product.icon}
              alt={product.title}
              width={64}
              height={64}
            />
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default ProductsSection;
