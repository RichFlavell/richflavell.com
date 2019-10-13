import { createGlobalStyle } from "styled-components"

import MaterialIcon from "@material/react-material-icon"
import Reset from "./reset"

const Global = createGlobalStyle`
  ${Reset}
  ${MaterialIcon.toString()}

  html {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.palette.text.primary};
  }

  * {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    @import url("https://fonts.googleapis.com/css?family=Romanesco&display=swap");
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  }

  a { 
    text-decoration: none;
    color: inherit;
    transition: color 0.1s linear;

    &:hover {
      color: ${props => props.theme.palette.link.primary};
    }
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
`

export default Global
