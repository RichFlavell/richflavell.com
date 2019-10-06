import React from "react"
import { ThemeProvider } from "styled-components"

import Theme from "./src/config/style/theme"
import Global from "./src/config/style/global"

import Root from "./src/components/Root"

import Header from "./src/components/Header"
import Sidebar from "./src/components/Sidebar"
import SidebarContextProvider from "./src/context/SidebarContext"

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
      <SidebarContextProvider>
        <Sidebar />
        <Root>
          <Header />
          {element}
        </Root>
      </SidebarContextProvider>
    </>
  )
}
