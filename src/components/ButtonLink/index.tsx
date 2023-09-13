import React from "react"
import { Container } from "./style"

type IButtonProps = {
  to: string
  children: React.ReactNode
  borderless?: boolean
  compact?: boolean
  onClick?: (e: React.MouseEvent) => void
  className?: string
}

const Button: React.FC<IButtonProps> = ({
  to,
  children,
  onClick,
  borderless,
  className,
}) => {
  return (
    <Container
      to={to}
      onClick={onClick}
      borderless={borderless}
      className={className}
    >
      {children}
    </Container>
  )
}

export default Button
