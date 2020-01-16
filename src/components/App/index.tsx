import { MDXProvider } from "@mdx-js/react"
import React, { useState, useContext } from "react"
import { CircleLoader } from "react-spinners"
import { ThemeProvider } from "styled-components"
import { components } from "../../config/style/mdx"
import SidebarContextProvider from "../../context/SidebarContext"
import { LoadingWrapper } from "./style"
import { ThemeContext } from "../../context/ThemeContext"
import i18n from "../../utils/i18n"
import { I18nextProvider } from "react-i18next"

const App: React.FC = ({ children }) => {
  const themeContext = useContext(ThemeContext)
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

  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  )
}

export default App
