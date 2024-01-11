import React, { useState } from "react";
import img1 from "../../../Images/Hunter/HUNTER1.JPG";
import img2 from "../../../Images/Hunter/HUNTER2.JPG";
import img3 from "../../../Images/Hunter/HUNTER3.JPG";
import img4 from "../../../Images/Hunter/HUNTER4.JPG";
import img5 from "../../../Images/Hunter/HUNTER5.JPG";
import img6 from "../../../Images/Hunter/HUNTER6.JPG";
import img7 from "../../../Images/Hunter/HUNTER7.jpg";
import img8 from "../../../Images/Hunter/HUNTER8.jpg";
import img9 from "../../../Images/Hunter/HUNTER9.jpg";
import img10 from "../../../Images/Hunter/HUNTER10.jpg";
import img11 from "../../../Images/Hunter/HUNTER11.jpg";
import img12 from "../../../Images/Hunter/HUNTER12.jpg";
import img13 from "../../../Images/Hunter/HUNTER13.jpg";
import img14 from "../../../Images/Hunter/HUNTER14.jpg";
import img15 from "../../../Images/Hunter/HUNTER15.jpg";
import img16 from "../../../Images/Hunter/HUNTER16.jpg";
import img17 from "../../../Images/Hunter/HUNTER17.jpg";
import img18 from "../../../Images/Hunter/HUNTER18.jpg";
import img19 from "../../../Images/Hunter/HUNTER19.jpg";
import img20 from "../../../Images/Hunter/HUNTER20.jpg";
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
import { PhotoDiv } from "../Case_Study_Images/HUNTER_PHOTOS";
const Hunter = () => {
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv>
              <Column1></Column1>
              <Column2>
                <Heading>Hunter Holiday x Nordstrom</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>HUNTER</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Nordstrom (36 Stores nationwide)</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>3 months</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>General Public & one VIP event</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Local artisans for shoe custimization station
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>IC</span>n celebration of
                  their Autumn/Winter 2022 line, World of Hunter (Sandra
                  Romboli, Global Design Director's first line with the brand in
                  the role) CoC managed a partnership with the brand and
                  Nordstrom to pop-up in 36 stores nationwide, creating an
                  engaging and exciting experience for customers during peak
                  season, November 2022 through January 2023. Retail displays
                  were customized to hIghlight the brand's signature
                  red/white/black stripe and textiles from the brand's products
                  (rubber, sherpa, puffer, cording & ropes) throughout. An
                  interactive photo moment highlighting the brand's
                  personalization campaign was an audience favorite. CoC also
                  managed an amplified pop-up including a boot customization
                  station and custom catering for A Night at Nordstrom (the
                  store's annual VIP event) and four weekends leading up to the
                  holiday at the NYC flagship store.
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

export default Hunter;
