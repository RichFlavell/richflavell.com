import React from "react"
import { Container } from "./style"

interface IButtonProps {
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
  compact,
  className,
}) => {
  return (
    // @ts-ignore (Needed due to Gatsby `Link` missing className prop)
    <Container
      to={to}
      onClick={onClick}
      borderless={borderless}
      compact={compact}
      className={className}
    >
      {children}
    </Container>
  )
}

export default Button
