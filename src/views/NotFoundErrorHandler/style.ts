import MaterialIcon from "@material/react-material-icon"
import styled from "styled-components"

export const Holder = styled.main`
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  flex-grow: 1;
  align-content: center;
  justify-content: center;
  height: 100%;
  margin: auto;
  text-align: center;
`

export const Buttonicon = styled(MaterialIcon)`
  font-size: ${props => props.theme.size.md};
  margin-right: ${props => props.theme.spacing.sm};
`
