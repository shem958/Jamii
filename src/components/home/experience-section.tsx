import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ExperienceSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 4, lg: 8 },
        bgcolor: "#FAF3F0",
        borderRadius: "24px",
        mx: { xs: 2, md: 4, lg: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
      >
        {/* Left Side - Images */}
        <Stack
          direction="row"
          spacing={-2}
          position="relative"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "300px", md: "400px" },
          }}
        >
          {/* Products Image */}
          <Box
            sx={{
              position: "relative",
              width: "45%",
              height: "100%",
              bgcolor: "#FFF8E7",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/jamii-products.jpg"
              alt="Jamii Products"
              fill
              style={{ objectFit: "contain", padding: "20px" }}
            />
          </Box>

          {/* Cereals Image */}
          <Box
            sx={{
              position: "relative",
              width: "55%",
              height: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              ml: 2,
            }}
          >
            <Image
              src="/assets/cereals.jpg"
              alt="Various Cereals"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Decorative Circle */}
          <Box
            sx={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "16px solid #55a630",
              zIndex: 1,
            }}
          />
        </Stack>

        {/* Right Side - Content */}
        <Stack
          spacing={3}
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Experience Convenient Shopping for Dry Cereals at Jamii Cereals and
            Gen Shop
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            Explore nutrient-rich lentils, versatile beans, and fresh dry maize,
            perfect for delicious meals. Enjoy convenient online shopping with a
            delivery service across Nairobi or visit our store in Dagoretti
            Market.
          </Typography>

          {/* Fresh Products Badge */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              bgcolor: "#F8F9FA",
              borderRadius: "16px",
              width: "fit-content",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                variant="h6"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                }}
              >
                Fresh
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                Products Delivered to Your Doorstep
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExperienceSection;
