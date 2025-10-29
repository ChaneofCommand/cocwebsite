import React, {useEffect, useState} from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import LoadFromTop from "../../../Hooks/LoadFromTop";
import styles from "../Case_Studies/CaseStudyTemplate.module.css"
import { MdArrowForwardIos,MdArrowBackIos,MdClose } from "react-icons/md";
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
import { storage } from "../../Firebase/firebase"; 
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/AMAZON_PHOTOS";


const Amazon = () => {

  const [photoUrls, setPhotoUrls] = useState([]);

 
  

  const [images, setImages] = useState([]);

const photoPaths = [
"AmazonAds/AA1.png",
"AmazonAds/AA2.jpg",
"AmazonAds/AA3.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let isMounted = true; // Cleanup flag

    const loadFirebaseAssets = async () => {
      try {
        // Create refs
        const img1Ref = ref(storage, "AmazonAds/AA1.png");

        // Load main image with error handling
        const img1Promise = getDownloadURL(img1Ref).catch(error => {
          console.error("Error loading main image:", error);
          return null;
        });

        // Load gallery images
        const imagePromises = photoPaths.map((path) => {
          const imageRef = ref(storage, path);
          return getDownloadURL(imageRef).catch(error => {
            console.error(`Error loading image ${path}:`, error);
            return null; // Return null for failed images
          });
        });

        // Wait for all assets to load
        const [img1Url, ...imageUrls] = await Promise.all([img1Promise, ...imagePromises]);

        // Only update state if component is still mounted
        if (isMounted) {
          if (img1Url) setImg1(img1Url);
          
          // Filter out null values from failed image loads
          const validImageUrls = imageUrls.filter(url => url !== null);
          setImages(validImageUrls);
        }
      } catch (error) {
        console.error("Error in loadFirebaseAssets:", error);
      }
    };

    loadFirebaseAssets();

    // Cleanup function
    return () => {
      isMounted = false;
    };
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
                  Ad Week UnBoxed Closing Party presented by Amazon Ads
                </Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Amazon Ads</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Hudson Yards Gardens & Plaza</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Salt</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>5pm - 10pm</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>
                      UnBoxed and Ad Week badge holders including a live
                      Broadcast
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Anderson .Paak and the Free Nationals, Natasha Diggs &
                      Soul in the Horn, DJ Toy
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>A</span>mazon Ads and Ad
                  Week — the world's premier event for the marketing,
                  advertising, and technology industries — continued their
                  ongoing partnership with their UnBoxed afterparty.
                  Post-pandemic, they went big with a concert experience at The
                  Vessel at Hudson Yards. CoC managed budget, talent and venue
                  from the top down, securing big- name talent like Anderson
                  .Paak.
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

export default Amazon;
