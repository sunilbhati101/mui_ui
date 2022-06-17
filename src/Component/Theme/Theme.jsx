import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const SansSerif = {
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: "bold",
};


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {

          "&::-webkit-scrollbar": {
            width: "6px",
            height: "4px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#bdbcb9",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: "700",
      fontSize: 70,
      lineHeight: 1,
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
    },
    h4: {
      fontWeight: "bold",
      fontSize: 48,
    },
    h5: {
      fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
    },
    p: {
      fontSize: 18,
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: "bold",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 13,
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
    },
    caption: {
      fontSize: 11,
    },
    button: {
      textTransform: "capitalize", 
      fontWeight: "bold",
    },

  },
  palette: {
    primary: {
      main: "#4F46E5", //default
    },
    secondary: {
      main: "#ffb300", //yello
    },
    action: {
      main: "#0f0f0f" //black
    },
    disabled: {
      main: "#ffffff" //white
    },
    success: {
      main: "#4caf50" //green
    },
  },
});


const responsiveTheme = responsiveFontSizes(theme);

const Anktech = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Anktech;
