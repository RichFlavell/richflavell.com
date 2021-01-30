import React from "react"
import ButtonLink from "../../components/ButtonLink"
import { Content, SubTitle, Title, Break } from "../../config/style/mdx"
import SEO from "../../utils/SEO"
import { Buttonicon, Holder } from "./style"
import { useTranslation } from "react-i18next"

const NotFoundErrorHandler: React.FC = () => {
  const { t } = useTranslation("NotFound")
  return (
    <Holder>
      <SEO title="404: Not Found" />
      <Content>
        <Title>:( 404</Title>
        <SubTitle>{t("pageNotFound")}</SubTitle>
        <Break />
        <ButtonLink to="/">
          <Buttonicon icon="arrow_back" />
          {t("return")}
        </ButtonLink>
      </Content>
    </Holder>
  )
}

export default NotFoundErrorHandler
