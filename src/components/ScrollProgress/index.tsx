import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"

const Holder = styled.div<{ progress: number }>`
  position: fixed;
  ${props => css`
    background: linear-gradient(
      to right,
      ${props.theme.palette.text.secondary} ${props.progress}%,
      transparent 0
    );
  `}
  opacity: 0.8;
  width: 100%;
  height: 2px;
  z-index: 50;
`

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const updateScrollProgress = () => {
    requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset
      const winHeight = window.innerHeight
      const scrollLength = document.body.scrollHeight - winHeight

      setScrollProgress((scrollTop / scrollLength) * 100)
    })
  }

  useEffect(() => {
    document.addEventListener("scroll", updateScrollProgress)

    return () => document.removeEventListener("scroll", updateScrollProgress)
  }, [])
  return <Holder progress={scrollProgress} />
}

export default ScrollProgress
