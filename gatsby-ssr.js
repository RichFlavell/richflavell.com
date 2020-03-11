import React from "react"
import SEO from "./src/utils/SEO"

import ThemeContextProvider from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>
}

export const wrapPageElement = () => {
  return (
    <>
      <SEO />
    </>
  )
}
