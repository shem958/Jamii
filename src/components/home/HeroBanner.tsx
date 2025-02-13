import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "primary.main",
      }}
    >
      {/* Background Image */}
      <Image
        src="/image6.png" // Replace with the correct path
        alt="Hero Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ opacity: 0.7 }}
      />

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
        }}
      >
        <Typography variant="h2" fontWeight={600}>
          Discover Fresh and Quality <br /> Goods at Jamii Cereals and Gen Shop!
        </Typography>

        <Stack
          direction="column"
          spacing={2}
          sx={{ mt: 3 }}
          alignItems="center"
        >
          <Button variant="contained" color="secondary" size="large">
            Shop Online
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Visit Us
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
