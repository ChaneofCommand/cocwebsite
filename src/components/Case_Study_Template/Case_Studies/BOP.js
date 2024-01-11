import React, { useState } from "react";
import img1 from "../../../Images/WarnerBros/BOP1.jpeg";
import img2 from "../../../Images/WarnerBros/BOP2.jpeg";
import img3 from "../../../Images/WarnerBros/BOP3.jpeg";
import img4 from "../../../Images/WarnerBros/BOP4.jpeg";
import img5 from "../../../Images/WarnerBros/BOP5.jpeg";
import img6 from "../../../Images/WarnerBros/BOP6.jpeg";
import img7 from "../../../Images/WarnerBros/BOP7.jpeg";
import img8 from "../../../Images/WarnerBros/BOP8.jpeg";
import img9 from "../../../Images/WarnerBros/BOP9.jpeg";
import img10 from "../../../Images/WarnerBros/BOP10.jpeg";
import img11 from "../../../Images/WarnerBros/BOP11.jpeg";
import img12 from "../../../Images/WarnerBros/BOP12.jpeg";
import img13 from "../../../Images/WarnerBros/BOP13.jpeg";
import img14 from "../../../Images/WarnerBros/BOP14.jpeg";
import img15 from "../../../Images/WarnerBros/BOP15.jpeg";
import img16 from "../../../Images/WarnerBros/BOP16.jpeg";
import img17 from "../../../Images/WarnerBros/BOP17.jpeg";
import img18 from "../../../Images/WarnerBros/BOP18.jpeg";
import img19 from "../../../Images/WarnerBros/BOP19.jpeg";
import img20 from "../../../Images/WarnerBros/BOP20.jpg";
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
  PhotoDiv,
  ColumnA2B,
} from "../Case_Study_Template";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
const BOP = () => {
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
                  HARLEY QUINN: BIRDS OF PREY PREMIERE AND INTERACTIVE
                  EXPERIENCE
                </Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Warner Bros.</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                      Times Square & AMC Empire 25 - 42nd St.: NYC, NY
                    </DataH1>
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

export default BOP;
