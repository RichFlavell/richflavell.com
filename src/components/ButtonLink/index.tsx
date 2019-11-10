import React from "react"
import { Container } from "./style"

interface IButtonProps {
  to: string
  children: React.ReactNode
  borderless?: boolean
  onClick?: () => void
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
    // @ts-ignore (Needed due to Gatsby `Link` missing className prop)
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
