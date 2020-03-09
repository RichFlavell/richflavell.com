import { MDXProvider } from "@mdx-js/react"
import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { components } from "../../config/style/mdx"
import SidebarContextProvider from "../../context/SidebarContext"
import { ThemeContext } from "../../context/ThemeContext"
import i18n from "../../utils/i18n"
import { I18nextProvider } from "react-i18next"

const App: React.FC = ({ children }) => {
  const themeContext = useContext(ThemeContext)

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={themeContext.state.theme}>
        <MDXProvider components={components}>
          <SidebarContextProvider>{children}</SidebarContextProvider>
        </MDXProvider>
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
