import React, { useState } from "react"
import ReactSpringLightbox from "react-spring-lightbox"

interface ILightboxProps {
  currentIndex?: number
  isOpen: boolean
  images: Array<{
    src: string
    alt: string
  }>
}

const Lightbox: React.FC<ILightboxProps> = ({
  images,
  currentIndex,
  isOpen,
}) => {
  const [currentImageIndex, setCurrentIndex] = useState(currentIndex || 0)

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1)

  return (
    <ReactSpringLightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
    />
  )
}

export default Lightbox
