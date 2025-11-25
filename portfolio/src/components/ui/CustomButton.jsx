import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  border: "2px dashed",
  borderRadius: 0,
  fontWeight: "semibold",
});

const navOutline = defineStyle({
  border: "5px solid",
  borderColor: "yellow.300",
  borderRadius: 0,
  fontWeight: "semibold",
});

const primary = defineStyle({
  bg: "teal.400",
  color: "white",
  _hover: { bg: "teal.500" },
  borderRadius: "md",
});

const secondary = defineStyle({
  bg: "cyan.300",
  color: "gray.800",
  _hover: { bg: "cyan.400" },
  borderRadius: "md",
});

const nav = defineStyle({
  bgColor: "yellow.200",
  color: "yellow.700",
  borderRadius: 50,
  boxShadow: "xl",
  border: "5px solid",
  borderColor: "yellow.300",
  fontWeight: "semibold",
  _hover: { bg: "yellow.300", borderColor: "yellow.400" },
});

const xl = defineStyle({
  fontSize: "xl",
  px: "6",
  h: "16",
  borderRadius: "md",
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, navOutline, primary, secondary, nav },
  sizes: { xl },
});
