"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 4 },
        py: 2,
        backgroundColor: "common.white",
        color: "primary.main",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: "1.25rem",
          color: "primary.main",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        Jamii Cereals and Gen shop
      </Typography>

      {/* Desktop Navigation */}
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            color: "primary.main",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Products
        </Button>

        <Button
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            color: "primary.main",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Company
        </Button>

        <Button
          sx={{
            color: "primary.main",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Frequently Asked Questions
        </Button>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            textTransform: "none",
            borderRadius: "4px",
            px: 3,
            py: 1,
            color: "common.white",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
        >
          Get in Touch
        </Button>
      </Stack>

      {/* Mobile Menu Icon */}
      <IconButton
        onClick={handleMenuOpen}
        sx={{
          display: { xs: "flex", md: "none" },
          padding: 0,
        }}
      >
        <Image
          src="/assets/log06.png"
          alt="Menu"
          width={30}
          height={30}
          priority
        />
      </IconButton>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem onClick={handleMenuClose}>Products</MenuItem>
        <MenuItem onClick={handleMenuClose}>Company</MenuItem>
        <MenuItem onClick={handleMenuClose}>
          Frequently Asked Questions
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>Get in Touch</MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
