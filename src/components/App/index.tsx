import { MDXProvider } from "@mdx-js/react"
import React, { useState } from "react"
import { CircleLoader } from "react-spinners"
import { ThemeProvider } from "styled-components"
import { components } from "../../config/style/mdx"
import { Dark, Default } from "../../config/style/theme"
import SidebarContextProvider from "../../context/SidebarContext"
import useDarkMode from "../../hooks/useDarkMode"
import { LoadingWrapper } from "./style"

const App: React.FC = ({ children }) => {
  const [theme, componentMounted] = useDarkMode()
  const [isLoading, setIsLoading] = useState(true)
  const [isWrapperVisible, setIsWrapperVisible] = useState(true)
  const themeVariant =
    theme === "light" || process.env.NODE_ENV === "development" ? Default : Dark

  setTimeout(
    () => {
      setIsLoading(false)
    },
    process.env.NODE_ENV === "development" ? 0 : 2500
  )

  setTimeout(
    () => {
      setIsWrapperVisible(false)
    },
    process.env.NODE_ENV === "development" ? 0 : 2500
  )

  if (!componentMounted) {
    return (
      <LoadingWrapper
        background={themeVariant.palette.background.primary}
        hidden={!isWrapperVisible}
      >
        <CircleLoader
          color={themeVariant.palette.text.primary}
          loading={true}
        />
      </LoadingWrapper>
    )
  }

  return (
    <ThemeProvider theme={themeVariant}>
      <MDXProvider components={components}>
        {isLoading && (
          <LoadingWrapper
            background={themeVariant.palette.background.primary}
            hidden={!isWrapperVisible}
          >
            <CircleLoader
              color={themeVariant.palette.text.primary}
              loading={true}
            />
          </LoadingWrapper>
        )}
        <SidebarContextProvider>{children}</SidebarContextProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
