import React from "react";
import img1 from "../../../Images/KITH/KITH1.jpg";
import img2 from "../../../Images/KITH/KITH2.jpg";
import img3 from "../../../Images/KITH/KITH3.jpg";
import LoadFromTop from "../../../Hooks/LoadFromTop";
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

import Image from "../../ZoomImage/Image";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/KITH_PHOTOS";
const Kith = () => {
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv>
              <Column1></Column1>
              <Column2>
                <Heading>Merry Kithmas</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>KITH</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>KITH, SoHo NYC</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>40 days</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Kith Shoppers</DataH1>
                  </DataDiv>

                  <DataDiv></DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>C</span>oC worked with
                  celebrated streetwear brand KITH to build a custom, holiday
                  living room set in the gallery space of their flagship store
                  in SoHo, NYC. The space was outfitted with a gift wrapping
                  station that we staffed through the month, where shoppers
                  could get their packages wrapped in custom KITH gift wrap.
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

export default Kith;
