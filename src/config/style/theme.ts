import { DefaultTheme } from "styled-components"

export const Default: DefaultTheme = {
  palette: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F6F7FB",
    },
    text: {
      primary: "#292525",
      secondary: "#73737D",
    },
    link: {
      primary: "#F2B5D4",
    },
    border: {
      primary: "#73737D",
      secondary: "#000",
    },
    brand: {
      facebook: "#3B5998",
      twitter: "#38A1F3",
      youtube: "#FF0000",
      instagram: "#C13584",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
  spacing: {
    xs: "2px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48px",
  },
  size: {
    xs: "12px",
    sm: "14px",
    md: "18px",
    lg: "24px",
    xl: "38px",
    logo: "48px",
  },
}

export const Dark: DefaultTheme = {
  ...Default,
  palette: {
    background: {
      primary: "#080808",
      secondary: "#1D1E1F",
    },
    text: {
      primary: "#F2F2F2",
      secondary: "#F2F2F2",
    },
    link: {
      primary: "#F2B5D4",
    },
    border: {
      primary: "#F2F2F2",
      secondary: "#1D1E1F",
    },
    brand: Default.palette.brand,
    white: "#FFFFFF",
    black: "#000000",
  },
}

export default Default
