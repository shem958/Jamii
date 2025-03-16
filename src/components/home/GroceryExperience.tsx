"use client"; // components/GroceryExperience.tsx
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faAddressCard,
  faGlobe,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const SectionContainer = styled(Container)({
  position: "relative",
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",
  overflow: "hidden",
  maxWidth: "1400px", // Increased width
  width: "100%", // Ensures it spans the full width
});

const BackgroundContainer = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: -10,
  overflow: "hidden",
  width: "100vw", // Ensure it spans full width
});

const BackgroundImage = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 30,
  bottom: 0,
  width: "100vw", // Make sure it spans full width
  height: "100%",
  backgroundImage: "url('/assets/experience.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.2,
});

const ContentOverlay = styled(Box)({
  position: "relative",
  zIndex: 5,
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  padding: "50px 40px", // More padding for balance
  maxWidth: "1200px", // Make sure it's wider
  width: "100%", // Allow it to stretch
  margin: "0 auto", // Keep it centered
  borderRadius: "12px",
});

const ProductColumns = styled(Box)({
  display: "flex",
  justifyContent: "space-between", // Ensures better spacing
  marginTop: "48px",
  gap: "40px", // Adjust gap for better layout
  maxWidth: "1100px", // Ensure it fills more space
  width: "100%", // Allow full expansion
  marginLeft: "auto",
  marginRight: "auto",
});

const ProductColumn = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  minWidth: "45%", // Ensure columns take up proper width
});

const ProductItem = styled(Box)({
  textAlign: "left",
  marginBottom: "64px",
  display: "flex",
  gap: "16px",
  alignItems: "flex-start",
});

const IconColumn = styled(Box)({
  position: "relative",
  minWidth: "70px", // Ensures icons have enough space
});

const IconCircle = styled(Box)({
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  backgroundColor: "#f5f0ea",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#5a5a5a",
});

const DottedLine = styled(Box)({
  position: "absolute",
  left: "50%",
  top: "56px",
  bottom: "-64px",
  height: "calc(100% + 8px)",
  borderLeft: "1px dashed #e0e0e0",
  zIndex: 1,
  transform: "translateX(-50%)", // Centers the dotted line
});
const BrandPill = styled(Box)({
  backgroundColor: "#5a3e2b",
  color: "white",
  padding: "4px 16px",
  borderRadius: "20px",
  display: "inline-block",
  marginLeft: "8px",
  marginRight: "8px",
});

const ContentColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  backgroundColor: "white",
  paddingLeft: "4px",
});

const productData = [
  [
    {
      title: "Nutrient-Packed Lentils",
      description:
        "Discover our premium lentils, loaded with protein and fiber, perfect for hearty stews and satisfying meals.",
      icon: faLayerGroup,
    },
    {
      title: "Fresh Dry Maize for Your Recipes",
      description:
        "Enjoy the quality of our fresh dry maize, ready for your favorite traditional and modern recipes.",
      icon: faAddressCard,
    },
  ],
  [
    {
      title: "Versatile Beans for Every Dish",
      description:
        "Our beans are perfect for various recipes, making them a staple in your kitchen for healthy, delicious meals.",
      icon: faGlobe,
    },
    {
      title: "Gluten-Free Sorghum & Millet Flour",
      description:
        "Discover our gluten-free options, perfect for baking and tradition, nutritious and versatile for any meal.",
      icon: faThumbsUp,
    },
  ],
];

const GroceryExperience: React.FC = () => {
  return (
    <SectionContainer maxWidth="lg">
      <BackgroundContainer>
        <BackgroundImage />
      </BackgroundContainer>

      <ContentOverlay>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 500, fontSize: "2.2rem", mb: 5 }}
        >
          Experience the Essence of <BrandPill>Jamii Cereals</BrandPill> and Gen
          Shop
        </Typography>

        <ProductColumns>
          {productData.map((column, colIndex) => (
            <ProductColumn key={colIndex}>
              {column.map((product, prodIndex) => (
                <ProductItem key={`${colIndex}-${prodIndex}`}>
                  <IconColumn>
                    <IconCircle>
                      <FontAwesomeIcon icon={product.icon} size="lg" />
                    </IconCircle>

                    {prodIndex === 0 && <DottedLine />}
                  </IconColumn>

                  <ContentColumn>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "8px",
                        fontSize: "1.25rem",
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        backgroundColor: "white",
                      }}
                    >
                      {product.description}
                    </Typography>
                  </ContentColumn>
                </ProductItem>
              ))}
            </ProductColumn>
          ))}
        </ProductColumns>
      </ContentOverlay>
    </SectionContainer>
  );
};

export default GroceryExperience;
