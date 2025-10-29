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
import { storage } from "../../Firebase/firebase"; 



const CanadaG = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

 
  

  const [images, setImages] = useState([]);

const photoPaths = [
"CanadaGoose/CG-3servings.jpg",
"CanadaGoose/CG-Ambassador.jpg",
"CanadaGoose/CG-customers.jpg",
"CanadaGoose/CG-kids.jpg",
"CanadaGoose/CG-line-wide.jpg",
"CanadaGoose/CG-serving-customers.jpg",
"CanadaGoose/CG-single-serving.jpg",
"CanadaGoose/CG-sorbet-full.jpg",
"CanadaGoose/CG-sunshine-scooping.jpg",
"CanadaGoose/Canada Goose Cart 1.jpg",
"CanadaGoose/Canada Goose Cart 10.jpg",
"CanadaGoose/Canada Goose Cart 11.jpg",
"CanadaGoose/Canada Goose Cart 14.jpg",
"CanadaGoose/Canada Goose Cart 17.jpg",
"CanadaGoose/Canada Goose Cart 2.jpg",
"CanadaGoose/Canada Goose Cart 22.jpg",
"CanadaGoose/Canada Goose Cart 23.jpg",
"CanadaGoose/Canada Goose Cart 24.jpg",
"CanadaGoose/Canada Goose Cart 25.jpg",
"CanadaGoose/Canada Goose Cart 26.jpg",
"CanadaGoose/Canada Goose Cart 27.jpg",
"CanadaGoose/Canada Goose Cart 29.jpg",
"CanadaGoose/Canada Goose Cart 3.jpg",
"CanadaGoose/Canada Goose Cart 4.jpg",
"CanadaGoose/Canada Goose Cart 5.jpg",
"CanadaGoose/CanadaGooseCart21.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let isMounted = true; // Cleanup flag

    const loadFirebaseAssets = async () => {
      try {
        // Create refs
        const img1Ref = ref(storage, "CanadaGoose/CanadaGooseCart21.jpg");

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
                <Heading>F&B Cart Pop-Up</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Canada Goose</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                    New York City, Chicago, Boston and Miami
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>Multiple Pop-Ups Over 3 Months</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>General Public</DataH1>
                  </DataDiv>

     
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>C</span>anada Goose
                  engaged Chane of Command to create ‘surprise and delight’
                  moments for shoppers during the busy, back-to-school season
                  with custom F&B cart pop-ups at its Chicago, Boston and New
                  York City stores.<br></br> CoC managed the design and build out of the
                  carts and all logistics operations, including transporting and
                  delivering carts to the sites, coordinating with store staff,
                  and working with local authorities to obtain the required
                  permits.<br></br> In Chicago, we built out an Italian ice station with
                  flavors inspired by the brand’s various skews. After two
                  successful weekends, the concept was expanded to Boston
                  (Prudential Center) in the form of a boutique sorbet stand
                  during college freshman arrival week. In New York City, the
                  pop-up took the form of a beverage cart serving cafe
                  specialties during a one-off in-store event.
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

export default CanadaG;
