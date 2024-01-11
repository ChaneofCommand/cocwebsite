import React from "react";
import img1 from "../../../Images/Markforged/Markforged.jpg";
import img2 from "../../../Images/Markforged/Markforged2.jpg";
import img3 from "../../../Images/Markforged/Markforged3.jpg";
import img4 from "../../../Images/Markforged/Markforged4.jpg";
import img5 from "../../../Images/Markforged/Markforged5.jpg";
import img6 from "../../../Images/Markforged/Markforged6.jpg";
import img7 from "../../../Images/Markforged/Markforged7.jpg";
import img8 from "../../../Images/Markforged/Markforged8.jpg";
import img9 from "../../../Images/Markforged/Markforged9.jpg";
import img10 from "../../../Images/Markforged/Markforged10.jpg";
import img11 from "../../../Images/Markforged/Markforged11.jpg";
import img12 from "../../../Images/Markforged/Markforged12.jpg";
import img13 from "../../../Images/Markforged/Markforged13.jpg";
import img14 from "../../../Images/Markforged/Markforged14.jpg";
import img15 from "../../../Images/Markforged/Markforged15.jpg";
import img16 from "../../../Images/Markforged/Markforged16.jpg";
import img17 from "../../../Images/Markforged/Markforged17.jpg";
import img18 from "../../../Images/Markforged/Markforged18.jpg";
import img19 from "../../../Images/Markforged/Markforged19.jpg";
import img20 from "../../../Images/Markforged/Markforged20.jpg";
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
import { PhotoDiv } from "../Case_Study_Images/MARKFORGED_PHOTOS";
const Markforged = () => {
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv>
              <Column1></Column1>
              <Column2>
                <Heading>Markforged IPO Launch Experience</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Markforged</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>NY Stock Exchange</DataH1>
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
                    <DataH1>Private; Broadcast</DataH1>
                  </DataDiv>

                  <DataDiv></DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>T</span>o celebrate 3D
                  printing and manufacturing company Markforged’s listing on the
                  New York Stock Exchange, CoC produced a full day of
                  activities, press tapings and on-site branding opportunities.
                  The centerpiece was custom pedestals made to showcase 3D
                  printers in action on “the floor.” We leveraged every branding
                  opportunity — and created new ones — including various print
                  and digital assets... right down to the closing bell, rung
                  from a bell made from one of the printers.
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

export default Markforged;
