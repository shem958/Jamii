import { Box, Typography, Divider } from "@mui/material";

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        mx: "auto",
        textAlign: "left",
        py: 5,
      }}
    >
      {/* Heading */}
      <Typography variant="h3" fontWeight={600} gutterBottom>
        Experience Quality Groceries at Jamii Cereals and Gen Store.
      </Typography>

      {/* Testimonial Text */}
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        “The variety of dry cereals and groceries is unmatched. Shopping at
        Jamii makes my meals healthier and more vibrant!”
      </Typography>

      {/* Divider */}
      <Divider sx={{ width: "50%", my: 2 }} />

      {/* Customer Name */}
      <Typography variant="h6" fontWeight={600}>
        Kinuthia - Happy Customer
      </Typography>
    </Box>
  );
};

export default TestimonialSection;
