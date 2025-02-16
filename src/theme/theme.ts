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
    },
});

export default theme;
