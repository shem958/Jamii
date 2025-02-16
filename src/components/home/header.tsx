// src/home/header.tsx
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { LogoIcon, MenuIcon } from "@/components/icons";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        py: 2,
        backgroundColor: "primary.main",
        color: "common.white",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <LogoIcon />
        <Typography variant="h6">Jamii Cereals and Gen Shop</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="text" color="inherit">
          Products
        </Button>
        <Button variant="text" color="inherit">
          Company
        </Button>
        <Button variant="contained" color="secondary">
          Get in Touch
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
