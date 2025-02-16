"use client";
import React from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Grid,
  Container,
  AvatarGroup,
} from "@mui/material";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 12 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#f8f3ec",
                borderRadius: "24px",
                p: 3,
                mb: 4,
                width: "fit-content",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#3e3e3e",
                }}
              >
                Fresh Selections
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                color: "#3e3e3e",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Elevate Your Meals
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "#3e3e3e",
                mb: 3,
                maxWidth: "550px",
                lineHeight: 1.5,
              }}
            >
              Experience the richness of wholesome nutrition at Jamii Cereals
              and Gen Store 🌱
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "#3e3e3e",
                mb: 4,
                maxWidth: "550px",
                lineHeight: 1.5,
              }}
            >
              Shop premium dry cereals and groceries delivered right to your
              door or visit us at Dagoretti Market.
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontSize: "1rem",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: "4px",
                mb: 6,
                backgroundColor: "#55a630",
                "&:hover": { backgroundColor: "#458a26" },
              }}
            >
              Shop Online
            </Button>

            <Box
              sx={{
                bgcolor: "#e2e2e2",
                borderRadius: "16px",
                p: 2,
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <AvatarGroup
                max={5}
                sx={{
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    border: "none",
                  },
                }}
              >
                <Avatar alt="User 1" src="/path-to-avatar-1.jpg" />
                <Avatar alt="User 2" src="/path-to-avatar-2.jpg" />
                <Avatar alt="User 3" src="/path-to-avatar-3.jpg" />
                <Avatar alt="User 4" src="/path-to-avatar-4.jpg" />
                <Avatar alt="User 5" src="/path-to-avatar-5.jpg" />
              </AvatarGroup>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }}
                >
                  4.800
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.875rem", color: "#3e3e3e" }}
                >
                  Customer Favorites
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "500px" },
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/images/hero-cereals.jpg"
                alt="Jamii Cereals and Gen shop"
                layout="fill"
                objectFit="cover"
                priority
              />

              {/* Overlay the Jamii Biz logo */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60%",
                  height: "auto",
                }}
              >
                <Image
                  src="/assets/images/jamii-biz-logo.png"
                  alt="Jamii Biz Logo"
                  width={400}
                  height={200}
                  layout="responsive"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
