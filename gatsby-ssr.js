import React from "react"
import Global from "./src/config/style/global"
import SEO from "./src/utils/SEO"

import App from "./src/components/App"
import Page from "./src/components/Page"

import Header from "./src/components/Header"
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
      <SEO />
      <Sidebar />
      <Page>
        <Header />
        {element}
        <GlobalFooter />
      </Page>
    </>
  )
}
