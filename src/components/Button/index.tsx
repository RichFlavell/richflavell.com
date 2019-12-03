import React from "react"
import { Container } from "./style"

interface IButtonProps {
  children: React.ReactNode
  borderless?: boolean
  compact?: boolean
  className?: string
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
  borderless,
  compact,
}) => {
  return (
    <Container
      className={className}
      onClick={onClick}
      borderless={borderless}
      compact={compact}
    >
      {children}
    </Container>
  )
}

export default Button
