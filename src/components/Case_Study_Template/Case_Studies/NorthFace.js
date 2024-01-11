import React from "react";
import img1 from "../../../Images/The_North_Face/NF1.jpg";
import img2 from "../../../Images/The_North_Face/NF2.jpg";
import img3 from "../../../Images/The_North_Face/NF3.jpg";
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
import {PhotoDiv} from "../../Case_Study_Template/Case_Study_Images/NF_PHOTOS";
const NorthFace = () => {
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
              More Than A Jacket at Dick’s
 House of Sport
              </Heading>
              <Underline />

              <DataContainer>
                <DataDiv>
                  <BoldH1>CLIENT:</BoldH1>
                  <DataH1>The North Face</DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>LOCATION:</BoldH1>
                  <DataH1>
                  Knoxville, TN + Rochester, NY
                  </DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>AGENCY:</BoldH1>
                  <DataH1>Chane of Command +
 Dick's House of Sport</DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>DURATION:</BoldH1>
                  <DataH1>1 Day</DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>AUDIENCE:</BoldH1>
                  <DataH1>
                    Theater: Private; Times Square: General Public
                  </DataH1>
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
                <span style={{ FontWeight: "bold" }}>C</span>oC produced the
                premiere cast screening, customizing the movie theater and
                creating takeaways for attendees. In celebration, this
                included fully immersive and interactive photo experiences in
                the adjacent Times Square. CoC recreated various scenes from
                Harley Quinn’s life, including her living room; favorite night
                club; and a custom confetti dome, which each featured
                different photo opportunities. We cast 50 Harley Quinns to
                roam the square and interact with guests before the real cast
                took the stage.
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

export default NorthFace;
