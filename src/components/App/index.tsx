import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import SidebarContextProvider from "../../context/SidebarContext"
import ModalContextProvider from "../../context/ModalContext"
import ThemeContextProvider, { ThemeContext } from "../../context/ThemeContext"

import i18n from "../../utils/i18n"
import { I18nextProvider } from "react-i18next"

const App = ({ children }: PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {themeContext => (
            <ThemeProvider theme={themeContext.state.theme}>
              <ModalContextProvider>
                <SidebarContextProvider>{children}</SidebarContextProvider>
              </ModalContextProvider>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    </I18nextProvider>
  )
}

export default App
