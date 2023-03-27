import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  Footerh2,
  Linkedin,
  Insta,
  Github,
  Anchor
} from "./Footer_Components";
const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>@CHANE OF COMMAND 2023</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <Anchor href=''>
              <Footerh2><Linkedin /> <Insta /></Footerh2>
              </Anchor>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
