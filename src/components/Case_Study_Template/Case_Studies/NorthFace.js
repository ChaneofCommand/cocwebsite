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
import {PhotoDiv} from "../../Case_Study_Template/Case_Study_Images/NF_PHOTOS";

import { storage } from "../../Firebase/firebase"; 

const NorthFace = () => {

  const [photoUrls, setPhotoUrls] = useState([]);

 

  const [images, setImages] = useState([]);

const photoPaths = [
"TheNorthFace/NF1.jpg",
"TheNorthFace/NF2.jpg",
"TheNorthFace/NF3.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,   "TheNorthFace/NF1.jpg",);
    

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
                  <DataH1>2 WEEKS</DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>AUDIENCE:</BoldH1>
                  <DataH1>
                  TNF SHOPPERS/OWNERS;
                  </DataH1>
                </DataDiv>

               
              </DataContainer>

              <Subtitle2>
                <span style={{ FontWeight: "bold" }}>C</span>oC worked with key retail
          partner, Dick’s House of Sport, to amplify the message of The North
          Face’s ‘More Than a Jacket’ initiative, a campaign celebrating the
          memories outdoor enthusiasts have made while wearing its outerwear.
          For two weeks during the holiday retail rush, we created and staffed a
          customization station at each store for shoppers and existing TNF
          jacket wearers to customize their jacket’s interior with a selection
          of custom patches.{" "}
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

export default NorthFace;
