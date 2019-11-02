import React from "react"
import Global from "./src/config/style/global"
import SEO from "./src/utils/SEO"

import App from "./src/components/App"
import Page from "./src/components/Page"

import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import Sidebar from "./src/components/Sidebar"

import { Right } from "./src/config/style/mdx"
import { Link } from "gatsby"

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
      <SEO />
      <Sidebar />
      <Page>
        <Header />
        {element}
        <Footer>
          Rich Flavell © {new Date().getFullYear()}. All rights reserved
          &nbsp;|&nbsp;
          <Link to="/privacy">Privacy</Link>
          <Right>English &nbsp;//&nbsp; 日本語</Right>
        </Footer>
      </Page>
    </>
  )
}
