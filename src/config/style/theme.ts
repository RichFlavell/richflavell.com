import { DefaultTheme } from "styled-components"

export const Default: DefaultTheme = {
  palette: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F6F7FB",
    },
    text: {
      primary: "#08080B",
      secondary: "#73737D",
    },
    link: {
      primary: "#9487B7",
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
    shadow: {
      passive:
        "0 30px 60px -10px rgba(0,0,0,0.2), 0 18px 36px -18px rgba(0,0,0,0.22)",
      active:
        "0 30px 30px -20px rgba(0,0,0,0.2), 0 18px 36px -18px rgba(0,0,0,0.22)",
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
      primary: "#191919",
      secondary: "#1D1E1F",
    },
    text: {
      primary: "#F2F2F2",
      secondary: "#F2F2F2",
    },
    link: {
      primary: "#9487B7",
    },
    border: {
      primary: "#F2F2F2",
      secondary: "#1D1E1F",
    },
    shadow: Default.palette.shadow,
    brand: Default.palette.brand,
    white: "#FFFFFF",
    black: "#000000",
  },
}

export default Default
