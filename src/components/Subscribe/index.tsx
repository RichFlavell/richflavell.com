import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  ButtonIcon,
  CloseIcon,
  Disclaimer,
  LeftContent,
  RightContent,
  SendIcon,
  StyledForm,
  StyledInput,
  StyledTitle,
  SubscribeButton,
  SubscribeContainer,
} from "./style"
import { useTranslation } from "react-i18next"
import Modal from "../Modal"
import { ModalContext } from "../../context/ModalContext"
import { Body } from "../../config/style/mdx"
import Button from "../Button"
import addToMailchimp from "gatsby-plugin-mailchimp"
import SweetAlert from "react-bootstrap-sweetalert"
import { ThemeContext } from "../../context/ThemeContext"
import { Dark } from "../../config/style/theme"

const Subscribe: React.FC<{ floating?: boolean }> = ({ floating }) => {
  const themeContext = useContext(ThemeContext)
  const { t } = useTranslation("Subscribe")
  const [isHidden, setIsHidden] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(
    !!window?.localStorage.getItem("subscribed")
  )
  const modalContext = useContext(ModalContext)
  const [mcResponse, setMCResponse] = useState<string | undefined>(undefined)

  const [name, setName] = useState<string | undefined>(undefined)
  const [email, setEmail] = useState<string | undefined>(undefined)

  const closeModal = useCallback(() => {
    modalContext.dispatch({
      type: "CLOSE_MODAL",
      index: "subscribe_modal",
    })
  }, [modalContext])

  const checkScroll = useCallback(() => {
    // Close modal on scroll
    closeModal()

    if (
      window.pageYOffset >
        document.body.scrollHeight - window.innerHeight - 100 &&
      !isHidden &&
      window.pageYOffset !== 0
    ) {
      setIsHidden(true)
    }
    if (
      window.pageYOffset <=
        document.body.scrollHeight - window.innerHeight - 100 &&
      isHidden
    ) {
      setIsHidden(false)
    }
  }, [closeModal, isHidden])

  const subscribe = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const { result, msg } = (await addToMailchimp(email, {
        FNAME: name,
      })) as {
        result: string
        msg: string
      }
      if (result === "error") {
        setMCResponse(msg)
      } else {
        setIsSubscribed(true)
        window && window.localStorage.setItem("subscribed", "true")
        closeModal()
      }
    } catch (e) {
      setMCResponse(e)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", checkScroll)
    return () => document.removeEventListener("scroll", checkScroll)
  }, [checkScroll, isHidden])

  return (
    <SubscribeContainer floating={floating} hidden={isHidden || isSubscribed}>
      <Modal index="subscribe_modal">
        {mcResponse && (
          <SweetAlert
            title={
              <span dangerouslySetInnerHTML={{ __html: mcResponse }}></span>
            }
            onConfirm={() => setMCResponse(undefined)}
          />
        )}
        <LeftContent isDark={themeContext.state.theme === Dark}>
          <SendIcon icon="send" />{" "}
        </LeftContent>
        <RightContent>
          <CloseIcon onClick={() => closeModal()} icon="close" />
          <StyledTitle>{t("subscribe")}</StyledTitle>
          <Body>Get notified when new content is available!</Body>
          <StyledForm onSubmit={e => subscribe(e)}>
            <StyledInput
              onChange={e => setName(e.currentTarget.value)}
              type="text"
              placeholder="Name"
              required={true}
            />
            <StyledInput
              onChange={e => setEmail(e.currentTarget.value)}
              type="email"
              placeholder="Email"
              required={true}
            />
            <br />
            <Button type="submit" maxWidth={true}>
              <ButtonIcon icon="mail" /> {t("subscribe")}
            </Button>
          </StyledForm>
          <Disclaimer>You can unsubscribe at any time!</Disclaimer>
        </RightContent>
      </Modal>
      {!modalContext.state.activeModal && (
        <SubscribeButton
          subscribed={isSubscribed}
          onClick={() =>
            modalContext.dispatch({
              type: "OPEN_MODAL",
              index: "subscribe_modal",
            })
          }
        >
          <ButtonIcon icon="mail" /> {t("subscribe")}
        </SubscribeButton>
      )}
    </SubscribeContainer>
  )
}

export default Subscribe
