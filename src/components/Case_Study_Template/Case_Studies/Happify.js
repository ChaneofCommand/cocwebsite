import React from "react";
import img1 from "../../../Images/Happify/Happify1.jpg";
import img2 from "../../../Images/Happify/Happify2.png";
import img3 from "../../../Images/Happify/Happify3.jpg";
import LoadFromTop from "../../../Hooks/LoadFromTop";
import Image from "../../ZoomImage/Image";
import {
  Heading,
  Underline,
  Column1,
  Column2,
  Column3,
  Imagebox,
  Subtitle2,
  DataDiv,
  AboutWrapper,
  AboutWrapper2,
  ColumnA1,
  ColumnA2,
  ColumnA3,
  DataContainer,
  DataH1,
  BoldH1,
  ColumnA2B,
} from "../Case_Study_Template";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/HAPPIFY_PHOTOS";
const Happify = () => {
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv>
              <Column1></Column1>
              <Column2>
                <Heading>Yoga in the Park</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Happify</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Bryant Park, NYC</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>Summer 2021 (10x)</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>New Yorkers (Free admission)</DataH1>
                  </DataDiv>

                  <DataDiv></DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>T</span>o help spread
                  awareness for their app, Happify enlisted CoC to identify and
                  produce a wellness partnership for them. Bryant Park’s weekly
                  yoga series, free to hundreds of New Yorkers each summer, was
                  a homerun ,offering multiple branding opportunities and social
                  media tie-ins. CoC coordinated all aspects of the partnership,
                  held each Wednesday for 10 consecutive weeks, including a
                  weekly pop-up station with various ‘surprise-and-delight’
                  gifts for participants.
                  <br />
                </Subtitle2>
              </Column2>
              <Column3></Column3>
            </PhotoDiv>
          </ColumnA2>

          <ColumnA3 />
        </AboutWrapper>

        <AboutWrapper2 id="two">
          <ColumnA1 />
          <ColumnA2B>
            <Imagebox>
              <Image src={img1} border={true} zoom={true}></Image>

              <Image src={img2} border={true} zoom={true}></Image>

              <Image src={img3} border={true} zoom={true}></Image>

            </Imagebox>
          </ColumnA2B>
          <ColumnA3 />
        </AboutWrapper2>
        <LoadFromTop />
      </BopWrapper>
    </>
  );
};

export default Happify;
