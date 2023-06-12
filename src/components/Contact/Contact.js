import React from "react";
import me from "../../Images/Decal2.png";

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
  FormContainer,
  FormLabel,
  FirstLastContainer,
  FirstInput,
  LastInput,
  LastNameLabel,
  SubButton,
  GeneralInput,
  FirsCol,
  LastCol,
  MessageArea,
  DataContainer,
  DecalCol,
  DataCol,
  DecalContainer,
  InfoContainer,
  Infoh1,
  Infoh2,
} from "./Contact_Components";

const Contact = ({}) => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Heading>CONTACT </Heading>
                <Underline />
                <FormContainer>
                  <FirstLastContainer>
                    <FirsCol>
                      <FormLabel>FIRST NAME</FormLabel>
                      <FirstInput
                        type="text"
                        id="fname"
                        name="firstname"
                      ></FirstInput>
                    </FirsCol>
                    <LastCol>
                      <LastNameLabel>LAST NAME</LastNameLabel>
                      <LastInput
                        type="text"
                        id="lname"
                        name="lastname"
                      ></LastInput>
                    </LastCol>
                  </FirstLastContainer>
                  <FormLabel>EMAIL</FormLabel>
                  <GeneralInput></GeneralInput>
                  <FormLabel>SUBJECT</FormLabel>
                  <GeneralInput></GeneralInput>
                  <FormLabel>MESSAGE</FormLabel>
                  <MessageArea></MessageArea>
                  <SubButton type="submit" value="SUBMIT"></SubButton>
                </FormContainer>
              </TextWrapper>
            </Column1>
            <Column2>
              <DataContainer>
                <DecalCol>
                  <DecalContainer>
                    <img src = {me}></img>
                  </DecalContainer>
                </DecalCol>
                <DataCol>
                  <InfoContainer>
                    <Infoh1>CHANE OF COMMAND </Infoh1>
                    <Infoh2>WINIFRED W. CHANE</Infoh2>
                    <Infoh2>781-608-6423</Infoh2>
                    <Infoh2>WINIFRED.CHANE@GMAIL.COM</Infoh2>
                    <Infoh2>508 HUMBOLDT STREET</Infoh2>
                    <Infoh2>BROOKLYN, NY 11222</Infoh2>
                  </InfoContainer>
                </DataCol>
              </DataContainer>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default Contact;
