import React, { useEffect, useState } from "react";
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
  PlayerWrapper,
  PlayerDiv,
} from "../Case_Study_Template";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/AMAZON_PHOTOS";

import styles from "../Case_Studies/CaseStudyTemplate.module.css";
import { MdArrowForwardIos, MdArrowBackIos, MdClose } from "react-icons/md";


import { storage } from "../../Firebase/firebase"; 
const BapeXKidSuper = () => {
  console.log("BapeXKidSuper component rendering - Updated version Oct 29, 2024...");
  const [images, setImages] = useState([]);

  const photoPaths = [
   "BapeXKidSuper/Bape1.jpg",
   "BapeXKidSuper/Bape2.jpg",
    "BapeXKidSuper/Bape3.jpg",
       // Add more photo paths as needed
      ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  
  useEffect(() => {
    let isMounted = true;

    const loadFirebaseAssets = async () => {
      console.log("Loading Firebase assets...");
      try {
        const img1Ref = ref(storage, "BapeXKidSuper/Bape1.jpg");
        const video1Ref = ref(storage, "Videos/BapeXKidSuper/Bapevid1.mp4");
        const video2Ref = ref(storage, "Videos/BapeXKidSuper/Bapevid2.mp4");

        const assetPromises = [
          getDownloadURL(img1Ref).catch(error => {
            console.error("Error loading main image:", error);
            return null;
          }),
          getDownloadURL(video1Ref).catch(error => {
            console.error("Error loading video 1:", error);
            return null;
          }),
          getDownloadURL(video2Ref).catch(error => {
            console.error("Error loading video 2:", error);
            return null;
          })
        ];

        const imagePromises = photoPaths.map((path) => {
          const imageRef = ref(storage, path);
          return getDownloadURL(imageRef).catch(error => {
            console.error(`Error loading image ${path}:`, error);
            return null;
          });
        });

        const [img1Url, video1Url, video2Url] = await Promise.all(assetPromises);
        const imageUrls = await Promise.all(imagePromises);

        if (isMounted) {
          if (img1Url) setImg1(img1Url);
          if (video1Url) setVideo1(video1Url);
          if (video2Url) setVideo2(video2Url);
          
          const validImageUrls = imageUrls.filter(url => url !== null);
          setImages(validImageUrls);
        }
      } catch (error) {
        console.error("Error in loadFirebaseAssets:", error);
      }
    };

    loadFirebaseAssets();

    return () => {
      isMounted = false;
    };
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visible, setIsVisible] = useState(false);

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
    console.log(`Zooming in on image ${imageIndex}`);
  };

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
                <Heading>bape x kidsuper screen printing class</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Kidsuper</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                      158 Roebling ST <br></br> Brooklyn, NY
                    
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>2pm-5pm</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Invited Influencers</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                    Kidsuper AKA Colm Dillane
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>I</span>n collboration with Bape, Kidsuper AKA Colm Dillane hosted a screenprinting class at their Brooklyn location in April 2025. During this class, invited infleuncers were able to select iconic Bape and Kidsuper prints which they got to learn how to apply themselves to Bape tshirts or any Bape clothing items that they brought with them from Dillane himself. Attendees were also able to get custom Bape tshirts printed in house by master screenprinters.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Bape:{" "}
                      <PA
                        target="new"
                        href="https://en.jp.bape.com/blogs/news/asuperape-kidsuper"
                      >
                        https://en.jp.bape.com/blogs/news/asuperape-kidsuper
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      Collab Review:{" "}
                      <PA
                        target="new"
                        href="https://collabcode.substack.com/p/collab-review-kid-super-x-bape-spring "
                      >
                        https://collabcode.substack.com/p/collab-review-kid-super-x-bape-spring
                      </PA>
                    </PLink>
                  </PLBox>
               
                </PressLinks>

                <PlayerWrapper>
                  <PlayerDiv>
                    <ReactPlayer
                      url={video1}
                      width="100%"
                      height="100%"
                      style={{
                        backgroundColor: "black",
                    
                      
                    }}
                    controls={true}
                  /></PlayerDiv>
                   
             
                   <PlayerDiv>  <ReactPlayer
                    url={video2}
                   width="100%"
                    height="100%"
                    style={{
                   
                      backgroundColor: "black",
                    
                      
                    }}
                    controls={true}
                  /></PlayerDiv>
                   
             </PlayerWrapper>
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

export default BapeXKidSuper;
