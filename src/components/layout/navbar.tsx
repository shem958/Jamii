"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

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
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 2, px: 0 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              cursor: "pointer",
              fontSize: "1.25rem",
            }}
          >
            Jamii Cereals and Gen shop
          </Typography>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenuOpen(setProductsAnchorEl)}
              sx={{
                color: "primary.main",
                textTransform: "none",
                fontWeight: 500,
                mr: 3,
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
                fontWeight: 500,
                mr: 3,
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
                fontWeight: 500,
                mr: 3,
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
                fontWeight: 500,
                color: "common.white",
                backgroundColor: "#55a630",
                "&:hover": { backgroundColor: "#458a26" },
              }}
            >
              Get in Touch
            </Button>
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "primary.main" }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
