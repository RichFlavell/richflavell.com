import { createGlobalStyle } from "styled-components"

import MaterialIcon from "@material/react-material-icon"
import Reset from "./reset"
import { generateMedia } from "styled-media-query"

const Global = createGlobalStyle`
  ${Reset}
  ${MaterialIcon.toString()}

  @font-face {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004) !important;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  html {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.palette.text.primary};
    background-color: ${props => props.theme.palette.background.primary};
  }

  body {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  .material-icons {
    font-family: 'Material Icons Outlined';
    stroke-width: 0.1px;
  }

  a { 
    text-decoration: none;
    color: inherit;
    transition: color 0.1s linear;

    &:hover {
      color: ${props => props.theme.palette.link.primary};
    }
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }
  
  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  
  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }
    &[type="number"] {
      width: auto;
    }
  }

  .medium-zoom-overlay {
    background: ${props => props.theme.palette.background.primary} !important;
    box-shadow: none !important;
  }

  img.medium-zoom-image--opened {
    border-radius: 5px;
  }

  #gatsby-focus-wrapper {
    height: 100%;
  }

  #___gatsby {
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

export const media = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
})

export default Global
