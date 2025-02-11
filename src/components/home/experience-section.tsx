import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const experiences = [
  {
    icon: "/assets/delivery-icon.svg",
    title: "Personalized Experience",
    description:
      "Visit our welcoming store in Dagoretti Market for expert assistance and high-quality selections.",
  },
  {
    icon: "/assets/shop-icon.svg",
    title: "Affordable Prices",
    description:
      "Enjoy competitve pricing without compromising on the quality of your groceries.",
  },
  {
    icon: "/assets/price-icon.svg",
    title: "Fresh and Quality Goods",
    description:
      "Committed to ensuring freshness and reliability , we strive to enhance your grocery shopping experience.",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Stack spacing={4} alignItems="center">
        {experiences.map((experience, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: 320,
            }}
          >
            <Image
              src={experience.icon}
              alt={experience.title}
              width={64}
              height={64}
            />
            <Typography variant="h5" gutterBottom>
              {experience.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {experience.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceSection;
