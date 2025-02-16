"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh",
        backgroundColor: "#f9f9f9",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/images/hero-banner.jpg"
        alt="Jamii Cereals and Gen Shop"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
          px: { xs: 3, md: 4 },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Discover Fresh and Quality Goods at Jamii Cereals and Gen Shop!
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Shop Online
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              textTransform: "none",
              color: "#ffffff",
              borderColor: "#ffffff",
            }}
          >
            Visit Us
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
