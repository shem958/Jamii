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
            fontSize:"3.5rem",
            fontWeight: 700,
        },
        h2: {
            fontSize:"2.5rem",
            fontWeight: 700,
        },
        h3: {
            fontSize:"2rem",
            fontWeight: 600,
        },
        h4: {
            fontSize:"1.75rem",
            fontWeight: 600,
        },
        h5: {
            fontSize:"1.5rem",
            fontWeight: 600,
        },
        h6: {
            fontSize:"1.25rem",
            fontWeight: 600,
        },
        body1: {
            fontSize:"1rem",
            fontWeight: 400,
        },
        body2: {
            fontSize:"0.875rem",
            fontWeight: 400,
        },
    },
});

export default theme;
