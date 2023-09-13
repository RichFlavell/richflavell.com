import React from "react"
import { Container } from "./style"

type IButtonProps = {
  children: React.ReactNode
  type?: "submit"
  borderless?: boolean
  maxWidth?: boolean
  compact?: boolean
  className?: string
  active?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  className,
  type,
  children,
  onClick,
  borderless,
  maxWidth,
  compact,
  active,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Container
      type={type}
      className={className}
      onClick={onClick}
      borderless={borderless}
      maxWidth={maxWidth}
      compact={compact}
      active={active}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Container>
  )
}

export default Button
