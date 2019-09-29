import { createGlobalStyle } from "styled-components"

import Reset from "./reset"
import MaterialIcon from "@material/react-material-icon/dist/material-icon.css"

const Global = createGlobalStyle`
  ${Reset}
  ${MaterialIcon}

  * {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    @import url("https://fonts.googleapis.com/css?family=Romanesco&display=swap");
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    font-family: 'Lato', sans-serif;
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
    background-color: ${props => props.theme.palette.background.secondary};
  }
`

export default Global
