import React from "react"
import Global from "./src/config/style/global"

import App from "./src/components/App"
import Page from "./src/components/Page"

import GlobalFooter from "./src/components/GlobalFooter"
import Sidebar from "./src/components/Sidebar"

import ThemeContextProvider from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <App>
        <Global />
        {element}
      </App>
    </ThemeContextProvider>
  )
}

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Sidebar />
      <Page>
        {element}
        <GlobalFooter />
      </Page>
    </>
  )
}
