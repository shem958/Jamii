import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3e3e3e",
        },
        secondary: {
            main: "#55a630",
        },
        common: {
            white: "#ffffff",
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        h1: {
            fontSize: "3rem", // Adjusted font size
            fontWeight: 700,
        },
        h2: {
            fontSize: "2.5rem", // Adjusted font size
            fontWeight: 700,
        },
        h5: {
            fontSize: "1.5rem", // Adjusted font size
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem", // Adjusted font size
            color: "#3e3e3e",
        },
        body2: {
            fontSize: "0.875rem", // Adjusted font size
            color: "#3e3e3e",
        },
        overline: {
            fontSize: "0.875rem", // Adjusted font size
            fontWeight: 700,
        },
        h6: {
            fontSize: "1.25rem", // Adjusted font size
            fontWeight: 600,
        },
    },
});

export default theme;
