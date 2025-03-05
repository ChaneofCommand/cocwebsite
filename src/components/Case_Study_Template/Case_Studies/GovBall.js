import React, {useEffect, useState} from "react";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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
Image,
  Forward,
  Back,
  Close,
  Ratio,
} from "../Case_Study_Template";

import styles from "../Case_Studies/CaseStudyTemplate.module.css"
import { MdArrowForwardIos,MdArrowBackIos,MdClose } from "react-icons/md";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/GOVBALL_PHOTOS";
import { storage } from "../../Firebase/firebase"; 
const GovBall = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

 
  

  const [images, setImages] = useState([]);

const photoPaths = [
"GrubHubXGovBall/GOV1.jpg",
"GrubHubXGovBall/GOV10.jpg",
"GrubHubXGovBall/GOV11.jpg",
"GrubHubXGovBall/GOV12.jpg",
"GrubHubXGovBall/GOV13.jpg",
"GrubHubXGovBall/GOV14.jpg",
"GrubHubXGovBall/GOV15.jpg",
"GrubHubXGovBall/GOV16.jpg",
"GrubHubXGovBall/GOV17.jpg",
"GrubHubXGovBall/GOV18.jpg",
"GrubHubXGovBall/GOV19.jpg",
"GrubHubXGovBall/GOV2.jpg",
"GrubHubXGovBall/GOV20.jpg",
"GrubHubXGovBall/GOV3.jpg",
"GrubHubXGovBall/GOV4.jpg",
"GrubHubXGovBall/GOV5.jpg",
"GrubHubXGovBall/GOV6.jpg",
"GrubHubXGovBall/GOV7.jpg",
"GrubHubXGovBall/GOV8.jpg",
"GrubHubXGovBall/GOV9.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,  "GrubHubXGovBall/GOV1.jpg",);
    

      getDownloadURL(img1Ref)
      .then((url) => {
        // The download URL is now available to use
        setImg1(url);
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

  const toggle =()=>{
    setIsVisible(!visible);
    console.log(visible);
  }
  return (
    <>
      <BopWrapper>
        <AboutWrapper id="one">
          <ColumnA1 />

          <ColumnA2>
            <PhotoDiv style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
              }}>
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
              {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => {setCurrentImageIndex(index);toggle();}}
            
          />
        ))}
            </Imagebox>
<div className={visible ? styles.lightbox : styles.hidden}>
              <Back onClick={()=>{prevImage()}}><MdArrowBackIos/></Back>
              <Forward onClick={()=>{nextImage()}}> <MdArrowForwardIos/></Forward>
              <Close onClick={()=>{toggle()}}> <MdClose/></Close>
              <Ratio>{imgnum}/{images.length}</Ratio>
              <img  className={visible ? styles.zoomimg : styles.hidden}   src={images[currentImageIndex]}                                                                 />
            </div>
          </ColumnA2B>
          <ColumnA3 />
        </AboutWrapper2>
        <LoadFromTop />
      </BopWrapper>
    </>
  );
};

export default GovBall;
