// components/Footer.tsx
"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  backgroundColor: "#f9f9f9",
  padding: "20px 0",
  fontFamily: "Arial, sans-serif",
});

const FooterSection = styled(Box)({
  marginBottom: "20px",
});

const FooterBottom = styled(Box)({
  textAlign: "center",
  marginTop: "20px",
  fontSize: "12px",
  color: "#aaa",
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Jamii Cereals and Gen Shop
              </Typography>
              <Typography variant="body2">
                Welcome to Jamii Cereals and Gen Store, your one-stop minimart
                for all your dry cereal and grocery needs. Experience the
                convenience of shopping online with delivery or visiting our
                physical store in Dagoretti Market, Kenya.
              </Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Explore
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Product Showcase" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Shop Online" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Visit Us" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Customer Testimonials" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Frequently Asked Questions" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Contact Us" />
                </ListItem>
              </List>
            </FooterSection>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Our Products
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemText primary="Lentils: Perfect for hearty stews, packed with protein and fiber." />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Beans: Versatile and nutritious, great for a variety of dishes." />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Dry Maize: Fresh and ready for your favorite recipes." />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Sorghum Flour: Gluten-free and ideal for traditional cooking." />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Millet Flour: Nutrient-rich and versatile for baking." />
                </ListItem>
              </List>
            </FooterSection>
          </Grid>
        </Grid>
        <FooterBottom>
          <Typography variant="body2">
            Copyright © 2025 Jamii Cereals and Gen Shop.
          </Typography>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
