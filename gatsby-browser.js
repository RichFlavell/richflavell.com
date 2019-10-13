import React from "react"
import Global from "./src/config/style/global"

import App from "./src/components/App"
import Page from "./src/components/Page"

import Header from "./src/components/Header"
import Sidebar from "./src/components/Sidebar"

export const wrapRootElement = ({ element }) => {
  return (
    <App>
      <Global />
      {element}
    </App>
  )
}

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Sidebar />
      <Page>
        <Header />
        {element}
      </Page>
    </>
  )
}
