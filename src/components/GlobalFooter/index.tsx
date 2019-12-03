import React from "react"
import Footer from "../Footer"
import { Link } from "gatsby"
import { Right } from "../../config/style/mdx"
import { useTranslation } from "react-i18next"
import i18n from "../../utils/i18n"
import Button from "../Button"

const GlobalFooter: React.FC = () => {
  const { t } = useTranslation("GlobalFooter")
  return (
    <Footer>
      Rich Flavell © {new Date().getFullYear()}. All rights reserved
      &nbsp;|&nbsp;
      <Link to="/privacy">{t("privacy")}</Link>
      <Right>
        <Button
          borderless={true}
          compact={true}
          onClick={() => 
              i18n.changeLanguage("en")
          }
        >
          English
        </Button>{" "}
        //{" "}
        <Button
          borderless={true}
          compact={true}
          onClick={() => 
              i18n.changeLanguage("jp")
          }
        >
          日本語
        </Button>
      </Right>
    </Footer>
  )
}

export default GlobalFooter
