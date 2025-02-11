import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 4,
        bgcolor: "primary.main",
        color: "common.white",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        Copyright © 2025 Jamii Cereals and Gen Shop.
      </Typography>
    </Box>
  );
};

export default Footer;
