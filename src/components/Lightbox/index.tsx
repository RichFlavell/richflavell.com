import React, { useState, useEffect } from "react"
import {
  StyledLightbox,
  ControlIcon,
  LeftControlButton,
  RightControlButton,
  HeaderIcon,
} from "./style"

interface ILightboxProps {
  currentIndex?: number
  isOpen: boolean
  images: Array<{
    src: string
    alt?: string
  }>
  onClose: () => void
}

const Lightbox: React.FC<ILightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
}) => {
  const [currentImageIndex, setCurrentIndex] = useState(currentIndex || 0)

  useEffect(() => {
    if (currentIndex !== undefined) {
      setCurrentIndex(currentIndex)
    }
  }, [currentIndex])

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1)

  return (
    <StyledLightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      onClose={onClose}
      renderHeader={() => (
        <RightControlButton onClick={onClose}>
          <HeaderIcon icon="close" />
        </RightControlButton>
      )}
      renderPrevButton={() =>
        currentImageIndex > 0 && (
          <LeftControlButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              gotoPrevious()
            }}
          >
            <ControlIcon icon="chevron_left" />
          </LeftControlButton>
        )
      }
      renderNextButton={() =>
        currentImageIndex + 1 < images.length && (
          <RightControlButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              gotoNext()
            }}
          >
            <ControlIcon icon="chevron_right" />
          </RightControlButton>
        )
      }
    />
  )
}

export default Lightbox
