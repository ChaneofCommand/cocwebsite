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
  Anchor,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5
} from "./Footer_Components";

const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <Column1/>
            <Column2>
            <FooterLinkItems>
              <FooterLinkTitle>@CHANE OF COMMAND 2025</FooterLinkTitle>
            </FooterLinkItems>
            </Column2>
            <Column3/>
            <Column4>
            <FooterLinkItems>
              
              <Footerh2> <Anchor href = 'https://www.linkedin.com/company/chaneofcommand/'><Linkedin /> </Anchor> <Anchor href ='https://www.instagram.com/winisworld/'><Insta /> </Anchor></Footerh2>
             
            </FooterLinkItems>
            </Column4>
            <Column5/>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
