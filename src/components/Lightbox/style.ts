import styled from "styled-components"
import ReactSpringLightbox from "react-spring-lightbox"
import MaterialIcon from "@material/react-material-icon"
import { Right, Left } from "../../config/style/mdx"

export const StyledLightbox = styled(ReactSpringLightbox)`
  background: rgba(0, 0, 0, 0.75);
`

export const ControlIcon = styled(MaterialIcon)`
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.size.xl};
`

export const HeaderIcon = styled(MaterialIcon)`
  margin: ${props => props.theme.spacing.md};
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.size.lg};
`

export const RightControlButton = styled(Right)`
  z-index: 1;
  cursor: pointer;
`

export const LeftControlButton = styled(Left)`
  z-index: 1;
  cursor: pointer;
`
