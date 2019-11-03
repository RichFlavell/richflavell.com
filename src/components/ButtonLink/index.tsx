import React from "react"
import { Container } from "./style"

interface IButtonProps {
  to: string
  children: React.ReactNode
  borderless?: boolean
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  to,
  children,
  onClick,
  borderless,
}) => {
  return (
    <Container to={to} onClick={onClick} borderless={borderless}>
      {children}
    </Container>
  )
}

export default Button
