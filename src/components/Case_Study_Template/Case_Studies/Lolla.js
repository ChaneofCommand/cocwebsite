import React from "react";
import img1 from "../../../Images/GrubHubXLolla/LOLLA1.jpg";
import img2 from "../../../Images/GrubHubXLolla/LOLLA2.jpg";
import img3 from "../../../Images/GrubHubXLolla/LOLLA3.jpg";
import img4 from "../../../Images/GrubHubXLolla/LOLLA4.jpg";
import img5 from "../../../Images/GrubHubXLolla/LOLLA5.jpg";
import img6 from "../../../Images/GrubHubXLolla/LOLLA6.jpg";
import img7 from "../../../Images/GrubHubXLolla/LOLLA7.jpg";
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
import { ImageWrapper2 } from "../Case_Study_Images/LOLLA_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/LOLLA_PHOTOS";
const Lolla = () => {
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv>
              <Column1></Column1>
              <Column2>
                <Heading>
                  GrubHub refueling station at Lollapalooza 2021
                </Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>GrubHub x Lolla</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Chicago’s Grant Park</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>4 Days</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Lollapalooza attendants</DataH1>
                  </DataDiv>

                  <DataDiv></DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>A</span>s a title stage
                  sponsor of Lollapalooza, GrubHub consulted with us to create a
                  “Refueling Station” for concert-goers This included a DIY bead
                  station; phone charging lockers; interactive photo moments and
                  booth; and space for partner influencers to hold panel
                  conversations and meet-and-greets with guests.
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
          <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
            <Imagebox>
              <Image src={img1} border={true} zoom={true}></Image>

              <Image src={img2} border={true} zoom={true}></Image>

              <Image src={img3} border={true} zoom={true}></Image>

              <Image src={img4} border={true} zoom={true}></Image>

              <Image src={img5} border={true} zoom={true}></Image>

              <Image src={img6} border={true} zoom={true}></Image>

              <Image src={img7} border={true} zoom={true}></Image>


            </Imagebox>
            </div>
          </ColumnA2B>
          <ColumnA3 />
        </AboutWrapper2>
        <LoadFromTop />
      </BopWrapper>
    </>
  );
};

export default Lolla;
