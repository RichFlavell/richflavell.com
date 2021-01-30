import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import useDebounce from "../../hooks/useDebounce"

const Holder = styled.div`
  position: fixed;
  opacity: 0.8;
  width: 100%;
  height: 2px;
  z-index: 50;
`

const Progress = styled.div<{ progress: number }>`
  transition: all 0.2s ease-out;
  background-color: ${props => props.theme.palette.text.secondary};
  width: ${props => props.progress}%;
  height: 100%;
`

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const debouncedsetScrollProgress = useDebounce(setScrollProgress, 5)

  const updateScrollProgress = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset
      const winHeight = window.innerHeight
      const scrollLength = document.body.scrollHeight - winHeight

      debouncedsetScrollProgress((scrollTop / scrollLength) * 100)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setScrollProgress])

  useEffect(() => {
    document.addEventListener("scroll", updateScrollProgress)
    return () => document.removeEventListener("scroll", updateScrollProgress)
  }, [updateScrollProgress])

  return (
    <Holder>
      <Progress progress={scrollProgress} />
    </Holder>
  )
}

export default ScrollProgress
