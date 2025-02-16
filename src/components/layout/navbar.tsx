"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Stack,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

const Navbar: React.FC = () => {
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
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 }, py: 2 }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main", cursor: "pointer" }}
        >
          Jamii Cereals and Gen Shop
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
              color: "primary.main",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "transparent" },
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
              color: "primary.main",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "transparent" },
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
              color: "primary.main",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "transparent" },
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
              "&:hover": { backgroundColor: "secondary.dark" },
            }}
          >
            Get in Touch
          </Button>
        </Stack>

        <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
          <Image
            src="/assets/menu-icon.png"
            alt="Menu"
            width={30}
            height={30}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
