import React from "react";
import ReactPlayer from "react-player";
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
  PressLinks,
  PLBox,
  LinkHeader,
  PLink,
  PA,
  Image,
  Forward,
  Back,
  Close,
  Ratio,
  PlayerWrapper,
} from "../Case_Study_Template";
import { AmazonProps } from "../Props/Case_Studies-Props1";
import { lazy } from "react";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/AMAZON_PHOTOS";
import { useState } from "react";
import styles from "../Case_Studies/CaseStudyTemplate.module.css";
import { MdArrowForwardIos, MdArrowBackIos, MdClose } from "react-icons/md";


const HipHop = () => {
  // Define a function to import all images from a directory
  function importAllImages(r) {
    return r.keys().map(r);
  }

  // Use require.context to import all images from a directory
  const images = [];
  const photoPaths = [
    "LululemonWundermost/411A2440.jpg",
    "LululemonWundermost/411A2520.jpg",
    "LululemonWundermost/411A2569.jpg",
    "LululemonWundermost/411A2725-Enhanced-NR-brighter_PR.jpg",
    "LululemonWundermost/411A2815.jpg",
    "LululemonWundermost/411A3435.jpg",
    "LululemonWundermost/411A3485-Enhanced-NR.jpg",
    "LululemonWundermost/411A3503-Enhanced-NR.jpg",
    "LululemonWundermost/411A3597.jpg",
    "LululemonWundermost/411A3704-Enhanced-NR-2.jpg",
    "LululemonWundermost/411A3716-Enhanced-NR.jpg",
    "LululemonWundermost/411A3788.jpg",
    "LululemonWundermost/411A6538.jpg",
    "LululemonWundermost/411A6546.jpg",
    "LululemonWundermost/411A6562-Enhanced-NR.jpg",
    "LululemonWundermost/411A6581.jpg",
       // Add more photo paths as needed
      ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentImageIndex);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log(currentImageIndex);
  };
  const imgnum = currentImageIndex + 1;
  const zoomIn = (imageIndex) => {
    // Your zoom-in logic here
    console.log(`Zooming in on image ${imageIndex}`);
  };

  const [visible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!visible);
    console.log(visible);
  };
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv
              style={{
                backgroundImage: `url(${''})`,
                backgroundSize: "cover",
              }}
            >
              <Column1></Column1>
              <Column2>
                <Heading>Wundermost Pop-Up</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Lululemon</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                    New York City
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Optimist Inc</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>3 weeks</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>General Public/Shoppers; Media, VIPs and Influencers</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>Shay Mitchell, Campaign Stylist Nell Kalonji</DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>L</span>ululemon tapped
                  CoC to oversee the creation of a one-of-a-kind New York City
                  pop-up shop for the exclusive launch of its Wundermost
                  bodywear collection, and innovative new 'Ultra Soft Nulu'
                  fabric.<br></br> After combing NYC for a perfect location, we selected
                  a space in a landmarked building in SoHo, securing the
                  necessary permits to paint the exterior green and turn the
                  site into a neon beacon for the Lululemon brand on Manhattan’s
                  chic West Broadway shopping strip. Inside, we were tasked with
                  the build, design and creative development of the "Gallery of
                  Softness" — a space activating the Ultra Soft Nulu fabric
                  through props, mannequins and even the walls, for maximum
                  sensory experience — and overseeing operations, including
                  staffing, styling and portrait (photography) stations, bespoke
                  F&B color coordinated with the activation's green theme, an
                  LED display gallery and a florist pop-up which continued the
                  theme on the street outside.<br></br> The three-week-long activation
                  also saw CoC producing and managing three VIP special events
                  with influencers.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Essence:{" "}
                      <PA
                        target="new"
                        href="https://hellobeautiful.com/3977907/lululemon-bodyweat-wundermost/"
                      >
                        https://hellobeautiful.com/3977907/lululemon-bodyweat-wundermost/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      Hello Beautiful:{" "}
                      <PA
                        target="new"
                        href="https://www.billboard.com/culture/product-recommendations/hip-hop-til-infinity-exhibition-how-get-tickets-1235554519/ "
                      >
                        https://www.billboard.com/culture/product-recommendations/hip-hop-til-infinity-exhibition-how-get-tickets-1235554519/{" "}
                      </PA>
                    </PLink>
                  </PLBox>

                </PressLinks>
                <ReactPlayer
                  url={''}
                  width="640px"
                  height="500px"
                  style={{
                    marginLeft: "50%",
                    transform: "translate(-50%)",
                    backgroundColor: "black",
                    marginTop: "5%",
                    maxWidth: "100%",
                  }}
                  controls={true}
                />
                                <ReactPlayer
                  url={''}
                  width="640px"
                  height="500px"
                  style={{
                    marginLeft: "50%",
                    transform: "translate(-50%)",
                    backgroundColor: "black",
                    marginTop: "5%",
                    maxWidth: "100%",
                  }}
                  controls={true}
                />
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
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    toggle();
                  }}
                />
              ))}
            </Imagebox>
            <div className={visible ? styles.lightbox : styles.hidden}>
              <Back
                onClick={() => {
                  prevImage();
                }}
              >
                <MdArrowBackIos />
              </Back>
              <Forward
                onClick={() => {
                  nextImage();
                }}
              >
                {" "}
                <MdArrowForwardIos />
              </Forward>
              <Close
                onClick={() => {
                  toggle();
                }}
              >
                {" "}
                <MdClose />
              </Close>
              <Ratio>
                {imgnum}/{images.length}
              </Ratio>
              <img
                className={visible ? styles.zoomimg : styles.hidden}
                src={images[currentImageIndex]}
              />
            </div>
          </ColumnA2B>
          <ColumnA3 />
        </AboutWrapper2>
        <LoadFromTop />
      </BopWrapper>
    </>
  );
};

export default HipHop;
