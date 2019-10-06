import React from "react"
import { Container } from "./style"

interface IButtonProps {
  children: React.ReactNode
  borderless?: boolean
  className?: string
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
  borderless,
}) => {
  return (
    <Container className={className} onClick={onClick} borderless={borderless}>
      {children}
    </Container>
  )
}

export default Button
