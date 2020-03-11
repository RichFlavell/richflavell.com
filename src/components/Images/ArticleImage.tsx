import React, { useCallback, useState, ImgHTMLAttributes } from "react"
import { Image, ImageContainer } from "./style"

// tslint:disable-next-line: no-submodule-imports
import "react-medium-image-zoom/dist/styles.css"

const ArticleImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = attrs => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <ImageContainer
      isZoomed={isZoomed}
      onZoomChange={handleZoomChange}
      zoomMargin={40}
    >
      <Image className="i-z" {...attrs} isZoomed={isZoomed} />
    </ImageContainer>
  )
}

export default ArticleImage
