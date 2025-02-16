import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";

const GroceryExperience: React.FC = () => {
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
          Experience the Essence of Jamii Cereals and Gen Shop
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Image
                src="/assets/images/lentils.jpg"
                alt="Lentils"
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
                Nutrient-Packed Lentils
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "#3e3e3e" }}
              >
                Discover our premium lentils, loaded with protein and fiber,
                perfect for hearty stews and satisfying meals.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Image
                src="/assets/images/maize.jpg"
                alt="Dry Maize"
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
                Fresh Dry Maize for Your Recipes
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "#3e3e3e" }}
              >
                Enjoy the quality of our fresh dry maize, ready for your
                favorite traditional and modern recipes.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Image
                src="/assets/images/beans.jpg"
                alt="Beans"
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
                Versatile Beans for Every Dish
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "#3e3e3e" }}
              >
                Discover various types of beans that add flavor and nutrition to
                your dishes.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Image
                src="/assets/images/sorghum.jpg"
                alt="Sorghum Flour"
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
                Gluten-Free Sorghum & Millet Flour
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "#3e3e3e" }}
              >
                Discover our gluten-free options, perfect for baking and
                tradition, nutritious and versatile for any meal.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: { xs: 6, md: 12 }, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#3e3e3e",
              mb: 2,
            }}
          >
            Convenient Online Shopping
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#3e3e3e",
              maxWidth: "60ch",
              mx: "auto",
            }}
          >
            Enjoy convenient online shopping with a delivery service across
            Nairobi or visit our store in Dagoretti Market.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default GroceryExperience;
