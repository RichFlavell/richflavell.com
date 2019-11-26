import { MDXProvider } from "@mdx-js/react"
import React, { useState, useContext } from "react"
import { CircleLoader } from "react-spinners"
import { ThemeProvider } from "styled-components"
import { components } from "../../config/style/mdx"
import SidebarContextProvider from "../../context/SidebarContext"
import { LoadingWrapper } from "./style"
import useDarkMode from "../../hooks/useDarkMode"
import { ThemeContext } from "../../context/ThemeContext"

const App: React.FC = ({ children }) => {
  const themeContext = useContext(ThemeContext)
  const { componentMounted } = useDarkMode()
  const [isLoading, setIsLoading] = useState(
    process.env.NODE_ENV !== "development"
  )
  const [isWrapperVisible, setIsWrapperVisible] = useState(
    process.env.NODE_ENV !== "development"
  )

  setTimeout(() => {
    setIsLoading(false)
  }, 2500)

  setTimeout(() => {
    setIsWrapperVisible(false)
  }, 1500)

  if (!componentMounted) {
    return (
      <LoadingWrapper
        background={themeContext.state.theme.palette.background.primary}
        hidden={!isWrapperVisible}
      >
        <CircleLoader
          color={themeContext.state.theme.palette.text.primary}
          loading={true}
        />
      </LoadingWrapper>
    )
  }
  return (
    <ThemeProvider theme={themeContext.state.theme}>
      <MDXProvider components={components}>
        {isLoading && (
          <LoadingWrapper
            background={themeContext.state.theme.palette.background.primary}
            hidden={!isWrapperVisible}
          >
            <CircleLoader
              color={themeContext.state.theme.palette.text.primary}
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
