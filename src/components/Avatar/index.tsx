import Img from "gatsby-image"
import styled from "styled-components"

export const Avatar = styled(Img)`
  border-radius: 50%;
  margin: ${props => props.theme.spacing.lg} auto;
`

export default Avatar
