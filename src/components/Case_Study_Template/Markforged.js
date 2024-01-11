import React from "react";
import {
  Heading,
  ImageWrapper,
  Subtitle,
  Underline,
  Databox,
  Column1,
  Column2,
  Column3,
  Datasub,
  Dataspan,
  Imagebox,
  ImageWrapper2,
  ImageWrapper4,
  ImageWrapper3,
} from "./Case_Study_Template";

const Markforged = ({}) => {
  return (
    <>
      <AboutContainer>
        <Heading>MARKFORGED IPO LAUNCH EXPERIENCE</Heading>
        <Underline />
        <Databox>
          <Column1>
            <Datasub>
              LOCATION: <Dataspan>NY STOCK EXCHANGE</Dataspan>
            </Datasub>
          </Column1>
          <Column2>
            <Datasub>
              AGENCY: <Dataspan>CHANE OF COMMAND</Dataspan>
            </Datasub>
          </Column2>
        </Databox>
        <Databox>
          <Column1>
            <Datasub>
              DURATION: <Dataspan>1 DAY</Dataspan>
            </Datasub>
          </Column1>
          <Column2>
            <Datasub>
              AUDIENCE: <Dataspan>PRIVATE; BROADCAST</Dataspan>
            </Datasub>
          </Column2>
        </Databox>
        <Subtitle>
          To celebrate 3D printing and manufacturing company Markforged’s
          listing on the New York Stock Exchange, CoC produced a full day of
          activities, press tapings and on-site branding opportunities. The
          centerpiece was custom pedestals made to showcase 3D printers in
          action on “the floor.” We leveraged every branding opportunity — and
          created new ones — including various print and digital assets... right
          down to the closing bell, rung from a bell made from one of the
          printers.
        </Subtitle>
        <Imagebox>
          <Column1>
            <ImageWrapper></ImageWrapper>
          </Column1>
          <Column2>
            <ImageWrapper2></ImageWrapper2>
          </Column2>
        </Imagebox>
        <Imagebox>
          <Column1>
            <ImageWrapper3></ImageWrapper3>
          </Column1>
          <Column2>
            <ImageWrapper4></ImageWrapper4>
          </Column2>
        </Imagebox>
      </AboutContainer>
    </>
  );
};

export default Markforged;
