"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";

const testimonials = [
  {
    avatar: "/assets/avatars/avatar1.jpg",
    name: "Kinuthia",
    feedback:
      "The variety of dry cereals and groceries is unmatched. Shopping at Jamii makes my meals healthier and more vibrant!",
    role: "Happy Customer",
  },
  {
    avatar: "/assets/avatars/avatar2.jpg",
    name: "Wanjiku",
    feedback:
      "I love the convenience of online shopping and the quality of products I receive every time.",
    role: "Satisfied Customer",
  },
  {
    avatar: "/assets/avatars/avatar3.jpg",
    name: "Mwangi",
    feedback:
      "Amazing customer service and top-notch products. I highly recommend Jamii Cereals and Gen Shop!",
    role: "Loyal Customer",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
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
          Experience Quality Groceries at Jamii Cereals and Gen Shop
        </Typography>
        <Stack spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{ p: 4, display: "flex", alignItems: "center" }}
            >
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 56, height: 56, mr: 3 }}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.5rem", fontWeight: 600, color: "#3e3e3e" }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#3e3e3e", mb: 1 }}>
                  {testimonial.role}
                </Typography>
                <Typography variant="body1" sx={{ color: "#3e3e3e" }}>
                  {testimonial.feedback}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
