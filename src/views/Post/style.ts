import styled from "styled-components"
import { SharpContainer } from "../../components/Images/style"

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 980px;
  padding: 0 ${props => props.theme.spacing.md};

  & > ${SharpContainer} {
    border-radius: 2px;
    overflow: hidden;
  }
`
export const FeaturedImageContainer = styled.div`
  max-width: 2160px;
  margin: auto;
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
  justify-content: center;

  span {
    margin: auto ${props => props.theme.spacing.sm};
  }

  time {
    margin: auto ${props => props.theme.spacing.sm};
    flex: 1;
    text-align: right;
  }

  span:last-of-type {
    flex: 1;
    text-align: left;
  }
`
