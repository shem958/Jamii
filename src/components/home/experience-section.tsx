"use client";
import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";

const ExperienceSection: React.FC = () => {
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
          Experience Convenient Shopping for Dry Cereals at Jamii Cereals and
          Gen Shop
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
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
                Nutrient-rich Lentils
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "#3e3e3e" }}
              >
                Explore our selection of high-quality lentils, perfect for
                nourishing meals.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
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
                Versatile Beans
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
          <Grid item xs={12} md={4}>
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
                Fresh Dry Maize
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "#3e3e3e" }}
              >
                Enjoy fresh dry maize, ideal for traditional and modern recipes.
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

export default ExperienceSection;
