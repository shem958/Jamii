import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import PublicIcon from "@mui/icons-material/Public";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import GrassIcon from "@mui/icons-material/Grass";

const products = [
  {
    icon: <LayersIcon sx={{ color: "#55a630", fontSize: 28 }} />,
    title: "Nutrient-Packed Lentils",
    description:
      "Discover our premium lentils, loaded with protein and fiber, perfect for hearty stews and satisfying meals.",
  },
  {
    icon: <PublicIcon sx={{ color: "#55a630", fontSize: 28 }} />,
    title: "Versatile Beans for Every Dish",
    description:
      "Our beans are perfect for various recipes, making them a staple in your kitchen for healthy, delicious meals.",
  },
  {
    icon: <AgricultureIcon sx={{ color: "#55a630", fontSize: 28 }} />,
    title: "Fresh Dry Maize for Your Recipes",
    description:
      "Enjoy the quality of our fresh dry maize, ready for your favorite traditional and modern recipes.",
  },
  {
    icon: <GrassIcon sx={{ color: "#55a630", fontSize: 28 }} />,
    title: "Gluten-Free Sorghum & Millet Flour",
    description:
      "Discover our gluten-free options, perfect for baking and tradition, nutritious and versatile for any meal.",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 2, md: 4, lg: 8 },
        position: "relative",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/assets/jars-background.jpg"
        alt="Background"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%",
          objectFit: "cover",
          opacity: 0.1,
          zIndex: -1,
        }}
      />

      {/* Title Section */}
      <Stack spacing={2} mb={8} alignItems="center">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            maxWidth: "900px",
          }}
        >
          Experience the Essence of{" "}
          <Box
            component="span"
            sx={{
              bgcolor: "#2C1B13",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: "50px",
            }}
          >
            Jamii Cereals
          </Box>{" "}
          and Gen Shop
        </Typography>
      </Stack>

      {/* Products Timeline */}
      <Stack
        spacing={8}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          position: "relative",
        }}
      >
        {products.map((product, index) => (
          <Stack
            key={index}
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              ml: { md: index % 2 === 0 ? 0 : "auto" },
              width: { md: "50%" },
            }}
          >
            {/* Icon Circle */}
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                bgcolor: "rgba(85, 166, 48, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                alignSelf: { xs: "center", md: "flex-start" },
              }}
            >
              {product.icon}
            </Box>

            {/* Content */}
            <Stack spacing={1}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: "400px",
                }}
              >
                {product.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ProductsSection;
