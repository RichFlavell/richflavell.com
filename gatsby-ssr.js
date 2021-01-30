import React from "react"
import Global from "./src/config/style/global"

import App from "./src/components/App"
import Page from "./src/components/Page"

import GlobalFooter from "./src/components/GlobalFooter"
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
        {element}
        <GlobalFooter />
      </Page>
    </>
  )
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<aside key="MODAL-PORTAL" id="___modal-portal" />])
}
