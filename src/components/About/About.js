import React from "react";
import Win from "../../Images/Winifred.JPG";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Underline,
} from "./About_Components";

const About = ({}) => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
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
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Win} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
