import { DefaultTheme } from "styled-components"

export const Default: DefaultTheme = {
  palette: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F6F7FB",
    },
    text: {
      primary: "#757575",
      secondary: "#404040",
    },
    link: {
      primary: "#9487B7",
    },
    border: {
      primary: "#F6F7FB",
      secondary: "#F4F5F9",
    },
    brand: {
      facebook: "#3B5998",
      twitter: "#38A1F3",
      youtube: "#FF0000",
      instagram: "#C13584",
    },
  },
  spacing: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "32px",
  },
  size: {
    xs: "12px",
    sm: "14px",
    md: "18px",
    lg: "24px",
    xl: "38px",
    logo: "64px",
  },
}

export const Dark: DefaultTheme = {
  ...Default,
  palette: {
    background: {
      primary: "#202121",
      secondary: "#252626",
    },
    text: {
      primary: "#F1F1EF",
      secondary: "#F1F1EF",
    },
    link: {
      primary: "#DEC79B",
    },
    border: {
      primary: "#F1F1EF",
      secondary: "#F1F1EF",
    },
    brand: Default.palette.brand,
  },
}

export default Default
