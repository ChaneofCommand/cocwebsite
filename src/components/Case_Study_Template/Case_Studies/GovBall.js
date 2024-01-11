import React from "react";
import img1 from "../../../Images/GrubHubXGovBall/GOV1.jpg";
import img2 from "../../../Images/GrubHubXGovBall/GOV2.jpg";
import img3 from "../../../Images/GrubHubXGovBall/GOV3.jpg";
import img4 from "../../../Images/GrubHubXGovBall/GOV4.jpg";
import img5 from "../../../Images/GrubHubXGovBall/GOV5.jpg";
import img6 from "../../../Images/GrubHubXGovBall/GOV6.jpg";
import img7 from "../../../Images/GrubHubXGovBall/GOV7.jpg";
import img8 from "../../../Images/GrubHubXGovBall/GOV8.jpg";
import img9 from "../../../Images/GrubHubXGovBall/GOV9.jpg";
import img10 from "../../../Images/GrubHubXGovBall/GOV10.jpg";
import img11 from "../../../Images/GrubHubXGovBall/GOV11.jpg";
import img12 from "../../../Images/GrubHubXGovBall/GOV12.jpg";
import img13 from "../../../Images/GrubHubXGovBall/GOV13.jpg";
import img14 from "../../../Images/GrubHubXGovBall/GOV14.jpg";
import img15 from "../../../Images/GrubHubXGovBall/GOV15.jpg";
import img16 from "../../../Images/GrubHubXGovBall/GOV16.jpg";
import img17 from "../../../Images/GrubHubXGovBall/GOV17.jpg";
import img18 from "../../../Images/GrubHubXGovBall/GOV18.jpg";
import img19 from "../../../Images/GrubHubXGovBall/GOV19.jpg";
import img20 from "../../../Images/GrubHubXGovBall/GOV20.jpg";
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
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/GOVBALL_PHOTOS";
const GovBall = () => {
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
                  GrubHub refueling station at governors ball 2021
                </Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>GrubHub x Gov Ball</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Citi Field, NYC</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>1 Day</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Gov Ball attendants</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Margot Robbie, Ewan McGregor, Rosie Perez, Jurnee
                      Smollett, Mary Elizabeth Winstead
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>A</span>s a title stage
                  sponsor of The Governors Ball Music Festival, GrubHub
                  consulted with us to create a “Refueling Station” for
                  concert-goers. featuring a temporary tattoo station; an
                  interactive photo booth; and top local DJs spinning between
                  main-stage sets. This included partnering with many of the
                  festival’s restaurant partners and customizing a delivery
                  system for expedited food deliveries to the footprint.
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

              <Image src={img4} border={true} zoom={true}></Image>

              <Image src={img5} border={true} zoom={true}></Image>

              <Image src={img6} border={true} zoom={true}></Image>

              <Image src={img7} border={true} zoom={true}></Image>

              <Image src={img8} border={true} zoom={true}></Image>

              <Image src={img9} border={true} zoom={true}></Image>

              <Image src={img10} border={true} zoom={true}></Image>

              <Image src={img11} border={true} zoom={true}></Image>

              <Image src={img12} border={true} zoom={true}></Image>

              <Image src={img13} border={true} zoom={true}></Image>

              <Image src={img14} border={true} zoom={true}></Image>

              <Image src={img15} border={true} zoom={true}></Image>

              <Image src={img16} border={true} zoom={true}></Image>

              <Image src={img17} border={true} zoom={true}></Image>

              <Image src={img18} border={true} zoom={true}></Image>

              <Image src={img19} border={true} zoom={true}></Image>

              <Image src={img20} border={true} zoom={true}></Image>
            </Imagebox>
          </ColumnA2B>
          <ColumnA3 />
        </AboutWrapper2>
        <LoadFromTop />
      </BopWrapper>
    </>
  );
};

export default GovBall;
