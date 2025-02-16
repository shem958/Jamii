import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#3e3e3e", // Dark gray for text and buttons
      light: "#6c6c6c",
      dark: "#2a2a2a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#55a630", // Green for buttons and accents
      light: "#78c956",
      dark: "#458a26",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f9f9f9", // Light gray background for sections
    },
    text: {
      primary: "#3e3e3e",
      secondary: "#6c6c6c",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          fontWeight: 500,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "#ffffff",
            backgroundColor: "#55a630",
            "&:hover": {
              backgroundColor: "#458a26",
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: "16px 0",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          "@media (min-width:1280px)": {
            maxWidth: 1200,
          },
        },
        maxWidthXl: {
          maxWidth: 1400,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 4,
          marginTop: 8,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          padding: "8px 16px",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          "& .MuiAvatar-root": {
            borderColor: "transparent",
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
};

const theme = createTheme(themeOptions);

export default theme;