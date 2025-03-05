import React, {useEffect} from "react";
import ReactPlayer from "react-player";
import LoadFromTop from "../../../Hooks/LoadFromTop";


import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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
 
} from "../Case_Study_Template";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/AMAZON_PHOTOS";
import { useState } from "react";
import styles from "../Case_Studies/CaseStudyTemplate.module.css";
import { MdArrowForwardIos, MdArrowBackIos, MdClose } from "react-icons/md";
import Lululemon from "./Lululemon";
import { storage } from "../../Firebase/firebase"; 


const AdidasCreator = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

 


  const [images, setImages] = useState([]);

  const photoPaths = [
    "AdidasCreator/D5LZr-CWAAIzutg.jpg",
    "AdidasCreator/D5Mk7ogWkAAArG-.jpg",
    "AdidasCreator/SITW19_AryaCollective_0426_074402_MichaelDrummond.jpg",
    "AdidasCreator/SITW19_AryaCollective_0426_075308_MichaelDrummond.jpg",
    "AdidasCreator/SITW19_AryaCollective_0426_075552_MichaelDrummond.jpg",
    "AdidasCreator/SITW19_AryaCollective_0426_074558_MichaelDrummond.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_132546_rohofoto.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_132834_rohofoto.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_133815_rohofoto.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_134530_rohofoto.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_151207_KaylaReefer.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_134434_rohofoto.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_153932_KaylaReefer.jpg",
    "AdidasCreator/SITW19_AryaCollective_0427_153115_KaylaReefer.jpg",
       // Add more photo paths as needed
      ];
      const [img1, setImg1] = useState(null);
      const [video1, setVideo1] = useState(null);
      
      useEffect(() => {
        let imagePromises = photoPaths.map((path) => {
          const imageRef = ref(storage, path);
          const img1Ref = ref(storage,   "AdidasCreator/SITW19_AryaCollective_0427_132546_rohofoto.jpg",);
          const video1Ref = ref(storage,   "Videos/SITW.mp4",);
   
          getDownloadURL(img1Ref)
          .then((url) => {
            // The download URL is now available to use
            setImg1(url);
          })
          getDownloadURL(video1Ref)
          .then((url) => {
            // The download URL is now available to use
            setVideo1(url);
          })
      
          return getDownloadURL(imageRef);
         
        });
    
        Promise.all(imagePromises)
          .then((urls) => {
            setImages(urls);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
// Define a function to import all images from a directory

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
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
              }}
            >
              <Column1></Column1>
              <Column2>
                <Heading>
                  Adidas Creator Park at Something In The Water Festival
                </Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Adidas, BWG</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>ROLE:</BoldH1>
                    <DataH1>Associate Producer, Site Ops, Staffing</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>New Virginia Beach, VA</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>
                      Chane of Command and Baskin Events (Creative by Kamp
                      Grizzly)
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>3 Days</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Festival attendees; general public</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Pharrell, Pusha T, Deepak Chopra, DRAM, Jacquel Knight,
                      various WNBA and NBA top players
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>BUDGET:</BoldH1>
                    <DataH1>$1 Million</DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>B</span>BWG Live hired
                  partners CoC and Baskin Events to help bring the adidas
                  Creator Park at music superstar Pharrell’s inaugural Something
                  in the Water festival to life. CoC oversaw logistics for the
                  activation, centered around a custom pop-up basketball court
                  on the Virginia Beach boardwalk that was free and open to the
                  public. Programming included opportunities to shoot hoops with
                  celebrity participants (Pusha T, D.R.A.M.); boardwalk stage;
                  multiple activation areas for consumers to participate. A
                  dance competition featuring ten crews, selected and judged by
                  Beyoncé choreographer Jacquel Knight, battled it out for a
                  spot to perform at the festival with Pharrell; Other
                  activities included court challenges on the beach basketball
                  court, tote and sandal customization stations; and panels.
                  While challenges included a hurricane, which reduced the
                  festival duration from three days to two, the activation
                  proved so impactful that a petition to keep the basketball
                  court at the site permanently generated over 10,000
                  signatures.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Respect Mag:{" "}
                      <PA
                        target="new"
                        href="https://respect-mag.com/2019/04/something-in-the-water-festival-recap-pharrell-gives-virginia-something-to-be-proud-of/"
                      >
                        https://respect-mag.com/2019/04/something-in-the-water-festival-recap-pharrell-gives-virginia-something-to-be-proud-of/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      WAVY:{" "}
                      <PA
                        target="new"
                        href="https://www.wavy.com/news/local-news/virginia-beach/petition-to-keep-sitw-basketball-court-has-more-than-10000-signatures/ "
                      >
                        https://www.wavy.com/news/local-news/virginia-beach/petition-to-keep-sitw-basketball-court-has-more-than-10000-signatures/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      ABC Local News:{" "}
                      <PA
                        target="new"
                        href="https://www.13newsnow.com/video/entertainment/music/sitwfest/beyond-the-music-something-in-the-water-has-a-lot-more-to-offer/291-a99ae0a5-87da-4c4d-890c-08a607ad4e02?jwsource=cl "
                      >
                        https://www.13newsnow.com/video/entertainment/music/sitwfest/beyond-the-music-something-in-the-water-has-a-lot-more-to-offer/291-a99ae0a5-87da-4c4d-890c-08a607ad4e02?jwsource=cl{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                </PressLinks>
                <ReactPlayer
                  url={video1}
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

export default AdidasCreator;
