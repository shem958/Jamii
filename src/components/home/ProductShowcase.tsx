import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";

const products = [
  {
    title: "Nutritious Lentils",
    description:
      "Perfect for hearty stews, packed with protein and fiber to nourish your body.",
    image: "/assets/all-original.jpg", // Update with actual image URL
  },
  {
    title: "Versatile Beans",
    description:
      "Add nutrition and flavor to countless recipes for a nutritious meal option.",
    image: "/assets/beans.jpg", // Update with actual image URL
  },
  {
    title: "Fresh Dry Maize",
    description:
      "Ready for your favorite culinary creations and packed with wholesome flavor.",
    image: "/assets/maize.jpg", // Update with actual image URL
  },
];

const ProductShowcase = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        backgroundColor: "common.white",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        Elevate Your Pantry with Jamii Cereals and Gen Shop
      </Typography>
      <Typography
        variant="body1"
        color="primary"
        sx={{ maxWidth: 600, margin: "0 auto", mb: 4 }}
      >
        Explore our expertly sourced dry cereals and grocery items designed to
        enrich your meals and support your health.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
              <CardMedia sx={{ position: "relative", height: 200 }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    backgroundColor: "secondary.main",
                    color: "common.white",
                    "&:hover": { backgroundColor: "secondary.dark" },
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h5" fontWeight={600}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="primary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductShowcase;
