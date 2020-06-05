import React from "react"
import { Container } from "./style"

interface IButtonProps {
  children: React.ReactNode
  borderless?: boolean
  compact?: boolean
  className?: string
  active?: boolean
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
  borderless,
  compact,
  active,
}) => {
  return (
    <Container
      className={className}
      onClick={onClick}
      borderless={borderless}
      compact={compact}
      active={active}
    >
      {children}
    </Container>
  )
}

export default Button
