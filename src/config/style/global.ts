import { createGlobalStyle } from "styled-components"

import MaterialIcon from "@material/react-material-icon"
import Reset from "./reset"

const Global = createGlobalStyle`
  ${Reset}
  ${MaterialIcon.toString()}

  .material-icons {
  font-family: 'Material Icons Outlined';
  stroke-width: 0.1px;
}

  html {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.palette.text.primary};
    background-color: ${props => props.theme.palette.background.primary};
  }

  * {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');
    @import url("https://fonts.googleapis.com/css?family=Montserrat+Alternates:300,400&display=swap");
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004) !important;
  }

  a { 
    text-decoration: none;
    color: inherit;
    transition: color 0.1s linear;

    &:hover {
      color: ${props => props.theme.palette.link.primary};
    }
  }

  hr {
    width: 0px;
    opacity: 0;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'Lato', sans-serif;
  }

  #___gatsby, #gatsby-focus-wrapper {
    width: 100%; 
    height: 100%;
  }

  .gatsby-resp-image-background-image {
    position: absolute !important;
  }

  .gatsby-resp-image-image {
    position: static;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

export default Global
