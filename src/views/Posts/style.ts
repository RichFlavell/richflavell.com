import styled from "styled-components"
import { Heading, Title, Content } from "../../config/style/mdx"
import GridList from "../../components/GridList"
import { media } from "../../config/style/global"

export const Wrapper = styled(Content)`
  padding: 0 ${props => props.theme.spacing.md};
`

export const Actions = styled.div`
  margin: auto;
  display: flex;
  width: 95%;
  max-width: 90em;

  ${media.lessThan("tablet")`
    padding: 0px ${props => props.theme.spacing.md};
  `}
`

export const PageHeading = styled(Heading)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${props => props.theme.spacing.md};
  max-width: 90em;
  width: 95%;
  margin: auto;

  ${media.lessThan("tablet")`
    margin: 0px ${props => props.theme.spacing.md};
    width: auto;
  `}
`

export const PageTitle = styled(Title)`
  color: ${props => props.theme.palette.text.primary};
  margin: 0px;
`

export const PageCount = styled.div`
  margin-left: auto;
  margin-top: auto;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
`

export const PostsGridList = styled(GridList)`
  max-width: 90em;

  ${media.lessThan("tablet")`
    padding: 0px ${props => props.theme.spacing.md}
  `}
`
