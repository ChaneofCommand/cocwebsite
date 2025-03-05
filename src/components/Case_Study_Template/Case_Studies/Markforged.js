import React, {useEffect} from "react";

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
import { useState } from "react";
import styles from "../Case_Studies/CaseStudyTemplate.module.css"
import { MdArrowForwardIos,MdArrowBackIos,MdClose } from "react-icons/md";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../Case_Study_Images/MARKFORGED_PHOTOS";
import { storage } from "../../Firebase/firebase"; 
const Markforged = () => {
  const [photoUrls, setPhotoUrls] = useState([]);


  const [images, setImages] = useState([]);

const photoPaths = [
"Markforged/250_2.jpg",
"Markforged/250_3.jpg",
"Markforged/250_1.jpg",
"Markforged/250_4.jpg",
"Markforged/Marforged5.jpg",
"Markforged/Markforged.jpg",
"Markforged/Markforged10.jpg",
"Markforged/Markforged11.jpg",
"Markforged/Markforged12.jpg",
"Markforged/Markforged13.jpg",
"Markforged/Markforged14.jpg",
"Markforged/Markforged15.jpg",
"Markforged/Markforged16.jpg",
"Markforged/Markforged17.jpg",
"Markforged/Markforged18.jpg",
"Markforged/Markforged19.jpg",
"Markforged/Markforged2.jpg",
"Markforged/Markforged250.jpg",
"Markforged/Markforged20.jpg",
"Markforged/Markforged3.jpg",
"Markforged/Markforged310.jpg",
"Markforged/Markforged4.jpg",
"Markforged/Markforged5.jpg",
"Markforged/Markforged6.jpg",
"Markforged/Markforged7.jpg",
"Markforged/Markforged8.jpg",
"Markforged/Markforged9.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,   "Markforged/250_1.jpg",);
    

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

export default Markforged;
