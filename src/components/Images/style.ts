import styled from "styled-components"
import { Controlled as ControlledZoom } from "react-medium-image-zoom"

interface IContainerProps {
  isZoomed: boolean
}

export const Image = styled.img<IContainerProps>`
  display: block;
  margin: 0 auto !important;
  width: 100%;
  height: 100%;
  border-radius: ${props => (props.isZoomed ? "5px" : "0px")};
  box-shadow: ${props => props.theme.palette.shadow.passive};
`

export const ImageContainer = styled(ControlledZoom)`
  margin: auto;
  box-shadow: ${props => props.theme.palette.shadow.passive};
`
