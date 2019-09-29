import React from "react"
import { Container } from "./style"

interface IButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ className, children, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button
