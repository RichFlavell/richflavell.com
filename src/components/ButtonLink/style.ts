import { Link } from "gatsby"
import styled from "styled-components"
import { buttonStyle } from "../Button/style"

interface IContainerProps {
  borderless?: boolean
}

export const Container = styled(Link)<IContainerProps>`
  ${buttonStyle}
`
