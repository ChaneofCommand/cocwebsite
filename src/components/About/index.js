import React from "react";
import Win from "../../Images/Winifred.JPG"
import LoadFromTop from "../../Hooks/LoadFromTop"
import SEO from "../SEO"
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Underline,
} from "./About_Components";

const About = () => {
  return (
    <>
      <SEO 
        title="About - Chane of Command | Experiential Marketing Agency"
        description="Meet Winifred Chane, founder of Chane of Command. Learn about our experiential marketing expertise and innovative approach to event production and management."
        keywords="Winifred Chane, about Chane of Command, experiential marketing expert, event management, production director"
        url="https://chaneofcommand.com/about"
      />
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1/>
            <Column2>
              <TextWrapper>
                <Heading>ABOUT</Heading>
                <Underline />
                <Subtitle>
                  CHANE OF COMMAND is your one-stop shop for experiential
                  marketing, and event management and production.
                </Subtitle>
                <Subtitle>
                  CoC founder and executive director Winifred Chane is an
                  experiential marketing and production expert experienced in
                  directing consumer-facing and B2B initiatives both large and
                  small, domestic and international.
                </Subtitle>
                <Subtitle>
                  A company built on relationships with the most innovative
                  thinkers, makers and doers, we leverage the best talent,
                  vendors, partners and venues to efficiently maximize every
                  experience.
                </Subtitle>
              </TextWrapper>
            </Column2>
            <Column3 />
            <Column4>
              <ImgWrap>
                <Img  src = {Win} alt = 'Winifred'/>
              </ImgWrap>
            </Column4>
            <Column5 />
          </AboutRow>
        </AboutWrapper>
        <LoadFromTop/>
      </AboutContainer>
    </>
  );
};

export default About;
