import React from "react"
import ButtonLink from "../../components/ButtonLink"
import { Content, SubTitle, Title } from "../../config/style/mdx"
import SEO from "../../utils/SEO"
import { Buttonicon, Holder } from "./style"

const NotFoundErrorHandler: React.FC = () => {
  return (
    <Holder>
      <SEO title={"404: Not Found"} />
      <Content>
        <Title>:( 404</Title>
        <SubTitle>Page Not Found</SubTitle>
        <ButtonLink to="/">
          <Buttonicon icon="arrow_back" />
          Click here to return
        </ButtonLink>
      </Content>
    </Holder>
  )
}

export default NotFoundErrorHandler
