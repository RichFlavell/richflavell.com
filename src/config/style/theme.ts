import { DefaultTheme } from "styled-components"

const Theme: DefaultTheme = {
  palette: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F6F7FB",
    },
    text: {
      primary: "#757575",
    },
    link: {
      primary: "#9487B7",
    },
    border: {
      primary: "#F4F5F9",
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
    xs: "16px",
    sm: "18px",
    md: "24px",
    lg: "38px",
    xl: "64px",
  },
}

export default Theme
