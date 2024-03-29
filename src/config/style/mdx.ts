import styled from "styled-components"

export const Content = styled.main`
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: column;
`

export const Heading = styled.header`
  margin-right: auto;
  width: 100%;
  border-bottom: 0.5px solid ${props => props.theme.palette.border.primary};
`

export const Title = styled.h1`
  font-family: "Merriweather", Georgia, Serif;
  font-size: ${props => props.theme.size.xl};
  color: ${props => props.theme.palette.text.primary};
  margin: auto;
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: 700;
  text-align: center;
`

export const SubTitle = styled.h2`
  font-family: "Merriweather", Georgia, Serif;
  font-size: ${props => props.theme.size.lg};
  font-weight: 400;
  color: ${props => props.theme.palette.text.secondary};
  margin: auto;
  text-align: center;

  @media (max-width: 46em) {
    padding: 0px ${props => props.theme.spacing.md} !important;
  }
`

export const SectionTitle = styled.h3`
  font-family: "Merriweather", Georgia, Serif;
  max-width: 900px !important;
  font-size: ${props => props.theme.size.lg};
  font-weight: 300;
  text-align: center;

  @media(max-width: 46em) {
    padding: 0px ${props => props.theme.spacing.md} !important;
  }
`

export const SectionInnerTitle = styled.h4`
  font-family: "Merriweather", Georgia, Serif;
  margin-top: ${props => props.theme.spacing.md};
  text-align: center;
  font-weight: 300;

  @media (max-width: 46em) {
    padding: 0px ${props => props.theme.spacing.md} !important;
  }
`

export const Body = styled.p`
  font-size: ${props => props.theme.size.md};
  color: ${props => props.theme.palette.text.primary};
  max-width: 900px;
  width: 100%;
  margin: 0px auto 26px;
  line-height: 1.48;
  text-align: center;

  a {
    color: ${props => props.theme.palette.link.primary};

    &:hover {
      color: ${props => props.theme.palette.link.secondary};
    }
  }

  @media(max-width: 46em) {
    width: 90%;
    text-align: inherit;
  }
`

export const Center = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const Right = styled.div`
  margin-left: auto;
`

export const Left = styled.div`
  margin-right: auto;
`

export const Emphasis = styled.em`
  font-style: italic;
`

export const Break = styled.hr`
  position: relative;
  border-width: 5px;
  border-color: hsl(0, 0%, 50%) transparent;
  height: 11px;
  border-style: double;
  width: 100%;
  max-width: 900px;
  margin: ${props => props.theme.spacing.md} auto;
  margin-top: ${props => props.theme.spacing.lg};

  @media (max-width: 46em) {
    width: 85%;
  }

  &: before,
  &:after {
    position: absolute;
    bottom: -3.536px;
    width: 7.071px;
    height: 7.071px;
    display: block;
    border-width: 0 7.071px 7.071px 0;
    border-color: hsl(0, 0%, 50%);
    border-style: double;
    box-sizing: border-box;
  }

  &:before {
    transform: translateZ(0) rotate(-45deg);
    left: -21px;
  }

  &:after {
    transform: translateZ(0) rotate(135deg);
    right: -21px;
  }
`

export const components = {
  h1: Title,
  h2: SubTitle,
  h3: SectionTitle,
  h4: SectionInnerTitle,
  p: Body,
  em: Emphasis,
  hr: Break,
}