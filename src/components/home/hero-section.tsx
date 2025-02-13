import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "80vh",
        pt: 8,
        px: { xs: 2, md: 4, lg: 8 },
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Image
          src="/assets/images/hero.png"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      {/* Main Content */}
      <Stack spacing={4} maxWidth="600px">
        {/* Fresh Selections Pill */}
        <Box
          sx={{
            bgcolor: "rgba(44, 27, 19, 0.06)",
            width: "fit-content",
            borderRadius: "50px",
            p: 1,
            pl: 2,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2C1B13",
                color: "white",
                borderRadius: "50px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#2C1B13",
                },
              }}
            >
              Fresh Selections
            </Button>
            <Typography variant="body1" color="text.primary">
              Experience the richness of wholesome nutrition at Jamii Cereals
              and Gen Store 🌾
            </Typography>
          </Stack>
        </Box>

        {/* Main Text */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Elevate Your Meals
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            color: "text.secondary",
            maxWidth: "500px",
            mb: 4,
          }}
        >
          Shop premium dry cereals and groceries delivered right to your door or
          visit us at Dagoretti Market.
        </Typography>

        {/* Shop Online Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "fit-content",
            textTransform: "none",
            px: 4,
            py: 1.5,
            borderRadius: "4px",
            fontSize: "1.1rem",
          }}
        >
          Shop Online
        </Button>

        {/* Customer Favorites Card */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "15%",
            bgcolor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            p: 2,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Stack spacing={1}>
            <AvatarGroup max={5} sx={{ justifyContent: "center" }}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Avatar
                  key={item}
                  src={`/assets/avatars/avatar${item}.jpg`}
                  alt={`Customer ${item}`}
                />
              ))}
            </AvatarGroup>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h4" fontWeight="bold">
                4.800
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Customer Favorites
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroSection;
