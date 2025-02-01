import React from "react";
import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";

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
      <Stack direction="row" spacing={2} alignItems="center">
        <Image
          src="/assets/logo-icon.svg"
          alt="logo"
          width={40}
          height={40}
          priority
        />
        <Typography variant="h6">Jamii Cereals and Gen Shop</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="text" color="inherit">
          Products
        </Button>
        <Button variant="text" color="inherit">
          Company
        </Button>
        <Button variant="contained" color="secondary">
          Get in Touch
        </Button>
        <IconButton>
          <Image
            src="/assets/menu-icon.svg"
            alt="Menu"
            width={30}
            height={30}
            priority
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
