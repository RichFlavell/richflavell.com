import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { ThemeProvider } from "styled-components"
import { components } from "../../config/style/mdx"
import SidebarContextProvider from "../../context/SidebarContext"
import ModalContextProvider from "../../context/ModalContext"
import ThemeContextProvider, { ThemeContext } from "../../context/ThemeContext"

import i18n from "../../utils/i18n"
import { I18nextProvider } from "react-i18next"

const App: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {themeContext => (
            <ThemeProvider theme={themeContext.state.theme}>
              <MDXProvider components={components}>
                <ModalContextProvider>
                  <SidebarContextProvider>{children}</SidebarContextProvider>
                </ModalContextProvider>
              </MDXProvider>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    </I18nextProvider>
  )
}

export default App
