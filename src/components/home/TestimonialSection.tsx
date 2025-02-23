"use client";
// components/TestimonialSection.tsx
import React from "react";
import { Typography, Container, Divider } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Container)({
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",
  maxWidth: "600px",
  margin: "auto",
});

const TestimonialText = styled(Typography)({
  fontStyle: "italic",
  color: "gray",
  margin: "20px 0",
});

const TestimonialSection: React.FC = () => {
  return (
    <SectionContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Experience Quality Groceries at Jamii Cereals and Gen Store.
      </Typography>
      <TestimonialText variant="body1">
        “The variety of dry cereals and groceries is unmatched. Shopping at
        Jamii makes my meals healthier and more vibrant!”
      </TestimonialText>
      <Divider sx={{ margin: "20px 0" }} />
      <Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
        Kinuthia - Happy Customer
      </Typography>
    </SectionContainer>
  );
};

export default TestimonialSection;
