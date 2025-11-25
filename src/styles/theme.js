import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

// Custom button variants inspired by StudyKeet
const Button = defineStyleConfig({
  variants: {
    outline: {
      border: "2px dashed",
      borderRadius: 0,
      fontWeight: "semibold",
    },
    navOutline: {
      border: "5px solid",
      borderColor: "yellow.300",
      borderRadius: 0,
      fontWeight: "semibold",
    },
    primary: {
      bg: "teal.400",
      color: "white",
      _hover: { bg: "teal.500" },
    },
    secondary: {
      bg: "cyan.300",
      color: "gray.800",
      _hover: { bg: "cyan.400" },
    },
    nav: {
      bgColor: "yellow.200",
      color: "yellow.700",
      borderRadius: 50,
      boxShadow: "xl",
      border: "5px solid",
      borderColor: "yellow.300",
      _hover: { bg: "yellow.300", borderColor: "yellow.400" },
    },
  },
  sizes: {
    xl: {
      fontSize: "xl",
      px: "6",
      h: "16",
      borderRadius: "md",
    },
  },
});

// Custom divider variants
const Divider = defineStyleConfig({
  variants: {
    brand: {
      borderWidth: "3px",
      borderStyle: "dashed",
      borderColor: "teal.300",
    },
    thick: {
      borderWidth: "5px",
      borderStyle: "solid",
      borderRadius: 10,
      borderColor: "teal.300",
    },
  },
});

// Custom card styles
const Card = defineStyleConfig({
  baseStyle: {
    container: {
      borderRadius: "lg",
      boxShadow: "dark-lg",
    },
  },
});

const theme = extendTheme({
  fonts: {
    body: "'Segoe UI', 'Courier New', monospace",
    heading: "'Lucida Console', 'Courier New', monospace",
    mono: "'Courier New', monospace",
  },
  colors: {
    brand: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
  },
  styles: {
    global: {
      body: {
        bg: "transparent",
        color: "gray.800",
      },
    },
  },
  components: {
    Button,
    Divider,
    Card,
  },
});

export default theme;
