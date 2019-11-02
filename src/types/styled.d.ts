import "styled-components"

type ThemeColourOption = {
  primary: string
  secondary?: string
  tertiary?: string
}

type ThemeSpatialOption = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      background: ThemeColourOption
      text: ThemeColourOption
      link: ThemeColourOption
      border: ThemeColourOption
      brand: {
        facebook: string
        twitter: string
        youtube: string
        instagram: string
      }
      shadow: {
        passive: string
        active: string
      }
    }
    spacing: ThemeSpatialOption
    size: ThemeSpatialOption & { logo: string }
  }
}
