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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing.md};
`

export const Meta = styled.h2`
  display: flex;
  font-size: ${props => props.theme.size.md};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
  line-height: ${props => props.theme.size.lg};

  span {
    margin: auto ${props => props.theme.spacing.sm};
  }

  span:first-of-type {
    flex: 1;
    text-align: right;
  }

  span:last-of-type {
    flex: 1;
    text-align: left;
  }
`
