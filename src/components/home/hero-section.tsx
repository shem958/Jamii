import {
  Box,
  Button,
  Typography,
  Chip,
  AvatarGroup,
  Avatar,
  Paper,
} from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        p: 4,
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* Top Badge */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f4ede4",
          borderRadius: "30px",
          px: 2,
          py: 1,
          width: "fit-content",
          mb: 2,
        }}
      >
        <Chip
          label="Fresh Selections"
          sx={{
            backgroundColor: "#3e3e3e",
            color: "#ffffff",
            fontWeight: "bold",
            mr: 1,
          }}
        />
        <Typography variant="body2" color="text.primary">
          Experience the richness of wholesome nutrition at Jamii Cereals and
          Gen Store 🌾
        </Typography>
      </Box>

      {/* Main Heading */}
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Elevate Your Meals
      </Typography>

      {/* Subtext */}
      <Typography variant="body1" color="text.secondary" mb={3}>
        Shop premium dry cereals and groceries delivered right to your door or
        visit us at Dagoretti Market.
      </Typography>

      {/* Call to Action */}
      <Button
        variant="contained"
        sx={{ backgroundColor: "#4d602c", borderRadius: "8px", px: 3 }}
      >
        Shop Online
      </Button>

      {/* Customer Favorites */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "16px",
          px: 2,
          py: 1,
          mt: 3,
          width: "fit-content",
          background: "#f5f5f5",
        }}
      >
        <AvatarGroup max={4} sx={{ mr: 1 }}>
          <Avatar src="/customer1.jpg" />
          <Avatar src="/customer2.jpg" />
          <Avatar src="/customer3.jpg" />
          <Avatar src="/customer4.jpg" />
        </AvatarGroup>
        <Typography variant="body2" fontWeight={600}>
          4.800 Customer Favorites
        </Typography>
      </Paper>

      {/* Side Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          maxWidth: "400px",
        }}
      >
        <Image
          src="/cereals.png"
          alt="Cereals Image"
          width={400}
          height={400}
          style={{ borderRadius: "50%" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
