"use client"; // components/TestimonialSection.tsx
import React from "react";
import { Typography, Container, Divider } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Container)({
  paddingTop: "80px",
  paddingBottom: "80px",
  textAlign: "left",
  maxWidth: "800px", // Increased from 600px
  margin: "0",
  paddingLeft: "64px", // Increased padding
});

const TestimonialText = styled(Typography)({
  fontStyle: "italic",
  color: "#666",
  margin: "32px 0", // Increased margin
  maxWidth: "650px", // Increased to create wrapped text effect
  fontSize: "1.25rem", // Increased font size
});

const StyledDivider = styled(Divider)({
  margin: "32px 0", // Increased margin
  width: "300px", // Increased width
  maxWidth: "100%",
  borderBottomWidth: "1px", // Ensure proper thickness
});

const TestimonialSection: React.FC = () => {
  return (
    <SectionContainer>
      <Typography
        variant="h2" // Changed from h3 to h2
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: "3.5rem", // Increased font size significantly
          maxWidth: "650px", // Increased width
          textAlign: "left",
          lineHeight: 1.2, // Adjusted line height
        }}
      >
        Experience Quality Groceries at Jamii Cereals and Gen Store.
      </Typography>
      <TestimonialText variant="body1">
        &quot;The variety of dry cereals and groceries is unmatched. Shopping at
        Jamii makes my meals healthier and more vibrant!&quot;
      </TestimonialText>
      <StyledDivider />
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontWeight: "bold",
          paddingTop: "8px",
          textAlign: "left",
          fontSize: "1.25rem", // Increased font size
        }}
      >
        Kinuthia - Happy Customer
      </Typography>
    </SectionContainer>
  );
};

export default TestimonialSection;
