import styled from "styled-components"

export default styled.div`
  width: 100%;
  max-width: 1440px;
  margin: ${props => props.theme.spacing.lg} auto;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: ${props => props.theme.spacing.lg};

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
`
