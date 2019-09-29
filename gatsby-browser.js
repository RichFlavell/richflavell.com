import React from "react"
import { ThemeProvider } from "styled-components"

import Theme from "./src/config/style/theme"
import Reset from "./src/config/style/reset"
import Global from "./src/config/style/global"

import Header from "./src/components/Header"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Reset />
      <Global />
      {element}
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Header />
      {element}
    </>
  )
}
