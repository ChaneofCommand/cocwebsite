import React, {useEffect} from "react";
import ReactPlayer from "react-player";
import LoadFromTop from "../../../Hooks/LoadFromTop";
import { initializeApp } from "firebase/app";
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
  PlayerWrapper,
} from "../Case_Study_Template";
import { AmazonProps } from "../Props/Case_Studies-Props1";
import { lazy } from "react";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/AMAZON_PHOTOS";
import { useState } from "react";
import styles from "../Case_Studies/CaseStudyTemplate.module.css";
import { MdArrowForwardIos, MdArrowBackIos, MdClose } from "react-icons/md";
import Lululemon from "./Lululemon";


const firebaseConfig = {
  apiKey: "AIzaSyB-yJUtZ3kOZkCEge_RuNagDlwslKkKDVw",
  authDomain: "chaneofcommand-eb230.firebaseapp.com",
  projectId: "chaneofcommand-eb230",
  storageBucket: "chaneofcommand-eb230.appspot.com",
  messagingSenderId: "114671170130",
  appId: "1:114671170130:web:625dea67da92ad20a9258b",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const AdidasConcepts = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

 
  // Initialize Firebase

  const [images, setImages] = useState([]);

const photoPaths = [
"AdidasConcepts/3AB84A64-5AFC-4EC0-A875-B475B2D24132.JPG",
"AdidasConcepts/Copy of F5830F30-2336-4340-9CEA-BE09AAEB2B08.JPG",
"AdidasConcepts/IMG_0613.JPG",
"AdidasConcepts/IMG_3922.JPG",
"AdidasConcepts/IMG_3938.JPG",
"AdidasConcepts/IMG_0617.JPG",
"AdidasConcepts/Copy of adidas-concepts-boston-1.jpeg",
"AdidasConcepts/Copy of adidas-concepts-recap-13.jpeg",
"AdidasConcepts/Sid_Lee-Adidas_Concepts_Sanctuary-06.jpeg",
"AdidasConcepts/adidas-concepts-hunt-recap-day-1-cambridge-6.jpeg",
"AdidasConcepts/adidas-concepts-boston1.jpeg",
"AdidasConcepts/adidas-concepts-boston-4.jpeg",
"AdidasConcepts/adidas-concepts-boston-1.jpeg",
"AdidasConcepts/adidas-concepts-hunt-recap-day-2-fenway-2.jpeg",
"AdidasConcepts/adidas-concepts-hunt-recap-day-3-finishline-6.jpeg",
"AdidasConcepts/adidas-concepts-recap-18.jpeg",
"AdidasConcepts/adidas-concepts-hunt-recap-day-2-fenway-3.jpeg",
"AdidasConcepts/adidas-concepts-recap-14.jpeg",
"AdidasConcepts/adidas-concepts-recap-21.jpeg",
"AdidasConcepts/adidas-concepts-recap-8.jpeg",
"AdidasConcepts/adidas-concepts-recap-7.jpeg",
"AdidasConcepts/adidas-concepts-recap-6.jpeg",
"AdidasConcepts/adidas-concepts-recap.jpeg",
"AdidasConcepts/adidas_x_cncpts_01_hero.jpeg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,   "AdidasConcepts/adidas-concepts-boston-4.jpeg",);
    

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
                <Heading>Adidas x CONCEPTS</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Adidas</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Boston</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>
                      Chane of Command and ASK (Adidas in-house agency)
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>1 year</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>
                      Sneakerheads; fashionistas; loyal Adidas customers
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Chef Tiffani Faison, DJ Brek One, Boston Red Sox
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>BUDGET:</BoldH1>
                    <DataH1>$1.2 Million</DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>S</span>neaker boutique
                  CONCEPTS and Adidas teamed to open a co-branded retail space
                  on Boston’s Newbury St. COC was hired to help design the space
                  and direct the marketing rollout. We produced the Grand
                  Opening, which included a week-long, city scavenger hunt for
                  consumers; a VIP party for influencers with celebrity chef
                  Tiffani Faison (Top Chef, Chopped); and a ribbon cutting with
                  the local business association.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Kicks on Fire:{" "}
                      <PA
                        target="new"
                        href=" https://www.kicksonfire.com/adidas-x-concepts-store-boston/"
                      >
                        https://www.kicksonfire.com/adidas-x-concepts-store-boston/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                </PressLinks>
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

export default AdidasConcepts;
