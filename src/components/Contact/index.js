import React, { useRef, useState } from 'react';
import Decal from "../../Images/Decal2.png";
import LoadFromTop from "../../Hooks/LoadFromTop"
import decalImg from "../../Images/Decal2.png"
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
  DecalImg
} from "./Contact_Components";

function Contact () {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  return (
    <>
      <SEO 
        title="Contact - Chane of Command | Get In Touch"
        description="Contact Chane of Command for your experiential marketing needs. Reach out to discuss event production, creative consultation, and marketing services."
        keywords="contact Chane of Command, experiential marketing inquiry, event production quote, marketing consultation"
        url="https://chaneofcommand.com/contact"
      />
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1/>
            <Column2>
              <TextWrapper>
                <Heading>CONTACT </Heading>
                <Underline />
                <FormContainer
                target="_blank" action= "https://formsubmit.co/cocgithub@gmail.com" method="POST"
                >
                  <FirstLastContainer>
                    <FirsCol>
                      <FormLabel>FIRST NAME</FormLabel>
                      <FirstInput
                        type="text" 
                        name="firstname"
                        class = "form-control"
                        required value={firstname} onChange={(e)=> setFirstName(e.target.value)}
                      />
                    </FirsCol>
                    <LastCol>
                      <LastNameLabel>LAST NAME</LastNameLabel>
                      <LastInput
                        type="text"
                        name="lastname"
                        class = "form-control"
                        required value={lastname} onChange={(e)=> setLastName(e.target.value)}
                      />
                    </LastCol>
                  </FirstLastContainer>
                  <FormLabel>EMAIL</FormLabel>
                  <GeneralInput
                  type="email" name="email" class="form-control" required value={email} onChange={(e)=> setEmail(e.target.value)}
                  />
                  <FormLabel>SUBJECT</FormLabel>
                  <GeneralInput
                  type="subject" name="subject" class="form-control" required value={subject} onChange={(e)=> setSubject(e.target.value)}
                  />
                  <FormLabel>MESSAGE</FormLabel>
                  <MessageArea
                  class="form-control" name="message" required value={message} onChange={(e)=> setMessage(e.target.value)}
                  />
                  <SubButton type="submit" value="SUBMIT"></SubButton>
                </FormContainer>
              </TextWrapper>
            </Column2>
            <Column3>
            <DecalContainer>
            <DecalImg src = {decalImg} />
            </DecalContainer>
            </Column3>
            <Column4>
                  <InfoContainer>
                    <Infoh1>CHANE OF COMMAND </Infoh1>
                    <Infoh2>WINIFRED W. CHANE</Infoh2>
                    <Infoh2>781-608-6423</Infoh2>
                    <Infoh2>WINIFRED.CHANE@GMAIL.COM</Infoh2>
                    <Infoh2>508 HUMBOLDT STREET</Infoh2>
                    <Infoh2>BROOKLYN, NY 11222</Infoh2>
                  </InfoContainer>
              </Column4>
            <Column5/>
          </AboutRow>
        </AboutWrapper>
        <LoadFromTop/>
      </AboutContainer>
    </>
  );
};

export default Contact;
