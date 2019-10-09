import React from "react"

import { ThemeProvider } from "styled-components"

import { Dark, Default } from "../../config/style/theme"

import useDarkMode from "../../hooks/useDarkMode"

import { MDXProvider } from "@mdx-js/react"

import { components } from "../../config/style/mdx"

import SidebarContextProvider from "../../context/SidebarContext"

const App: React.FC = ({ children }) => {
  const [theme, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <> </>
  }

  return (
    <ThemeProvider
      theme={
        theme === "light" || process.env.NODE_ENV === "development"
          ? Default
          : Dark
      }
    >
      <MDXProvider components={components}>
        <SidebarContextProvider>{children}</SidebarContextProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
