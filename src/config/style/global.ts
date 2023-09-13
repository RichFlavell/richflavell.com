import { createGlobalStyle } from "styled-components"

import MaterialIcon from "@material/react-material-icon"
import Reset from "./reset"

const Global = createGlobalStyle`
  ${Reset}
  ${MaterialIcon.toString()}

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
    line-height: 1.4;
  }

  html {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.palette.text.primary};
    background-color: ${props => props.theme.palette.background.primary};
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 100%;
    line-height: 1.5;
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

  ::selection {
    background: rgba(242, 181, 212, 0.4);
  }

  #___modal-portal {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
`

export default Global
