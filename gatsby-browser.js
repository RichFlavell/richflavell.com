import React from "react"
import { ThemeProvider } from "styled-components"

import Theme from "./src/config/style/theme"
import Global from "./src/config/style/global"

import Header from "./src/components/Header"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
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
