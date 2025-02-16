import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3e3e3e", // Updated to match design
        },
        secondary: {
            main: "#55a630", // Updated to match design
        },
        common: {
            white: "#ffffff", // Updated to match design
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        h1: {
            fontSize: "3rem", // Adjusted font size
            fontWeight: 700,
        },
        h2: {
            fontSize: "2.5rem", // No change needed
            fontWeight: 700,
        },
        h3: {
            fontSize: "2.25rem", // Adjusted font size
            fontWeight: 600,
        },
        h4: {
            fontSize: "2rem", // Adjusted font size
            fontWeight: 600,
        },
        h5: {
            fontSize: "1.75rem", // Adjusted font size
            fontWeight: 600,
        },
        h6: {
            fontSize: "1.5rem", // Adjusted font size
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem", // No change needed
            fontWeight: 400,
        },
        body2: {
            fontSize: "0.875rem", // No change needed
            fontWeight: 400,
        },
    },
});

export default theme;
