import React from "react";
import img1 from "../../../Images/Crime_Con/CC1.jpg";
import img2 from "../../../Images/Crime_Con/CC2.png";
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
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/CRIME_CON_PHOTOS";
const CrimeCon = () => {
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv>
              <Column1></Column1>
              <Column2>
                <Heading>Crime Con Austin</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Crime Con</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Austin, Texas</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>3 Days</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Crime Con attendees</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Nancy Grace, Dr. Phil, Don’t F*ck With Cats cast and many
                      more
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>A</span>fter having to
                  cancel the previous year due to the pandemic, Crime Con were
                  ready to come back bigger than ever — and with more attendees
                  and new compliance standards, that meant more than doubling
                  their previous footprint. CoC worked to help advance their
                  largest talent roster to date as well as manage guest
                  registration and the partnership village, which included a
                  “Podcast Alley,“and build-outs and activations with each of
                  their partners.
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


            </Imagebox>
          </ColumnA2B>
          <ColumnA3 />
        </AboutWrapper2>
        <LoadFromTop />
      </BopWrapper>
    </>
  );
};

export default CrimeCon;
