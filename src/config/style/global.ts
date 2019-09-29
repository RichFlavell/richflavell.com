import { createGlobalStyle } from "styled-components"

import Reset from "./reset"

const Global = createGlobalStyle`
  ${Reset}

  * {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    @import url("https://fonts.googleapis.com/css?family=Romanesco&display=swap");
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
