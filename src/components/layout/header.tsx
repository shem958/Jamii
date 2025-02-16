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
  const [productsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [companyAnchorEl, setCompanyAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleMenuOpen =
    (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) =>
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchor(event.currentTarget);
    };

  const handleMenuClose =
    (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) =>
    () => {
      setAnchor(null);
    };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 4 },
        py: 2,
        backgroundColor: "#ffffff", // Updated color
        color: "#3e3e3e", // Updated color
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: "1.5rem", // Adjusted font size
          color: "#3e3e3e", // Updated color
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        Jamii Cereals and Gen shop
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleMenuOpen(setProductsAnchorEl)}
          sx={{
            color: "#3e3e3e", // Updated color
            textTransform: "none",
            fontWeight: 600, // Adjusted font weight
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Products
        </Button>
        <Menu
          anchorEl={productsAnchorEl}
          open={Boolean(productsAnchorEl)}
          onClose={handleMenuClose(setProductsAnchorEl)}
        >
          <MenuItem onClick={handleMenuClose(setProductsAnchorEl)}>
            Product Showcase
          </MenuItem>
          <MenuItem onClick={handleMenuClose(setProductsAnchorEl)}>
            Shop Online
          </MenuItem>
        </Menu>

        <Button
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleMenuOpen(setCompanyAnchorEl)}
          sx={{
            color: "#3e3e3e", // Updated color
            textTransform: "none",
            fontWeight: 600, // Adjusted font weight
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Company
        </Button>
        <Menu
          anchorEl={companyAnchorEl}
          open={Boolean(companyAnchorEl)}
          onClose={handleMenuClose(setCompanyAnchorEl)}
        >
          <MenuItem onClick={handleMenuClose(setCompanyAnchorEl)}>
            About Us
          </MenuItem>
          <MenuItem onClick={handleMenuClose(setCompanyAnchorEl)}>
            Visit Us
          </MenuItem>
          <MenuItem onClick={handleMenuClose(setCompanyAnchorEl)}>
            Customer Testimonials
          </MenuItem>
        </Menu>

        <Button
          sx={{
            color: "#3e3e3e", // Updated color
            textTransform: "none",
            fontWeight: 600, // Adjusted font weight
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
            color: "#ffffff", // Updated color
            "&:hover": {
              backgroundColor: "#55a630", // Updated color
            },
          }}
        >
          Get in Touch
        </Button>
      </Stack>

      <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
        <Image src="/assets/menu-icon.png" alt="Menu" width={30} height={30} />
      </IconButton>
    </Box>
  );
};

export default Header;
