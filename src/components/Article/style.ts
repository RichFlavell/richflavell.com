import styled from "styled-components"

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1440px;
`
export const FeaturedImageContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`
