import React from "react";
import img1 from "../../../Images/BuschBeer/BB1.jpg";
import img2 from "../../../Images/BuschBeer/BB2.jpg";
import img3 from "../../../Images/BuschBeer/BB2.jpeg";
import img4 from "../../../Images/BuschBeer/BB4.jpeg";
import img5 from "../../../Images/BuschBeer/BB5.jpeg";
import img6 from "../../../Images/BuschBeer/BB6.jpg";
import img7 from "../../../Images/BuschBeer/BB7.jpg";
import img8 from "../../../Images/BuschBeer/BB8.jpg";
import img9 from "../../../Images/BuschBeer/BB9.jpg";
import img10 from "../../../Images/BuschBeer/BB10.jpeg";
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
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/BUSCH_PHOTOS";
const Busch = () => {
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv>
              <Column1></Column1>
              <Column2>
                <Heading>TreeWork</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Anheuser Busch (Busch Beer)</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Craig, CO</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>M&C Saatchi</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>10 days</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Treework guests</DataH1>
                  </DataDiv>

                  <DataDiv></DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>T</span>REEWORK, a
                  custom, remote communal work space in the wild. With
                  work-from-home becoming the norm, Busch Light wanted to put a
                  big twist on what WFH could mean. CoC produced a fully-custom
                  workspace trailer and planned the week-long guest experience
                  lost in the woods, overlooking Yampa Valley.
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
            </Imagebox>
          </ColumnA2B>
          <ColumnA3 />
        </AboutWrapper2>
        <LoadFromTop />
      </BopWrapper>
    </>
  );
};

export default Busch;
