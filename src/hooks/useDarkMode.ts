import { useCallback, useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Default from "../config/style/theme"

export default function useDarkMode() {
  const themeContext = useContext(ThemeContext)
  const [componentMounted, setComponentMounted] = useState(false)

  const toggleTheme = () => {
    if (themeContext.state.theme === Default) {
      window.localStorage.setItem("theme", "dark")
    } else {
      window.localStorage.setItem("theme", "light")
    }
    themeContext.dispatch({ type: "TOGGLE_THEME" })
  }

  const setTheme = useCallback(
    (type: string) => {
      window.localStorage.setItem("theme", type)
      themeContext.dispatch({
        type: type === "light" ? "SET_LIGHT_THEME" : "SET_DARK_THEME",
      })
    },
    []
  )

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !localTheme
      ? setTheme("dark")
      : localTheme
        ? setTheme(localTheme)
        : setTheme("light")
    setComponentMounted(true)
  }, [setTheme])

  return { toggleTheme, componentMounted }
}
