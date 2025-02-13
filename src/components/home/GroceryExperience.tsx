import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const LandingSection = () => {
  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: "common.white" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="primary" gutterBottom>
            Transform Your Grocery Shopping with Jamii Cereals and Gen Store
          </Typography>
          <Typography variant="body1" color="primary" paragraph>
            Experience the convenience of quality products delivered fresh from
            our store to your home in Nairobi.
          </Typography>
          <List>
            {[
              "Wide Range of Products - From hearty lentils rich in protein to versatile beans, discover nutritious options for your meals.",
              "Personalized Experience - Visit our welcoming store in Dagoretti Market for expert assistance and high-quality selections.",
              "Affordable Prices - Enjoy competitive pricing without compromising on the quality of your groceries.",
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Typography variant="body2" color="primary">
            Committed to ensuring freshness and reliability, we strive to
            enhance your grocery shopping experience.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 300,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="/image4.png" // Ensure this image exists in your public folder or use a correct path
              alt="Shop with Confidence"
              layout="fill"
              objectFit="cover"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "common.white",
                textAlign: "center",
                py: 2,
              }}
            >
              <Typography variant="h5">Shop with Confidence</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingSection;
