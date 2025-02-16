"use client";
import React from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Avatar,
  Grid,
  Container,
} from "@mui/material";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 4 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography
                variant="overline"
                sx={{ fontSize: "0.875rem", color: "#55a630", fontWeight: 700 }}
              >
                Fresh Selections
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontSize: "3rem", fontWeight: 700, color: "#3e3e3e" }}
              >
                Elevate Your Meals
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "#3e3e3e", maxWidth: "40ch" }}
              >
                Experience the richness of wholesome nutrition at Jamii Cereals
                and Gen Store.
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "1rem", color: "#3e3e3e", maxWidth: "50ch" }}
              >
                Shop premium dry cereals and groceries delivered right to your
                door or visit us at Dagoretti Market.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2, textTransform: "none", px: 4, py: 1 }}
              >
                Shop Online
              </Button>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mt: 4 }}
              >
                <Avatar src="/assets/avatars/avatar1.jpg" alt="Avatar 1" />
                <Avatar src="/assets/avatars/avatar2.jpg" alt="Avatar 2" />
                <Avatar src="/assets/avatars/avatar3.jpg" alt="Avatar 3" />
                <Avatar src="/assets/avatars/avatar4.jpg" alt="Avatar 4" />
                <Avatar src="/assets/avatars/avatar5.jpg" alt="Avatar 5" />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "1rem", color: "#3e3e3e", fontWeight: 600 }}
                >
                  4.8/5 Customer Favorites
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/assets/images/hero.png"
                alt="Jamii Cereals and Gen shop"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
