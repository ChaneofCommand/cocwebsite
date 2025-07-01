import React, {useEffect} from "react";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
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

import { storage } from "../../Firebase/firebase"; 
const Ouai = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

 


  const [images, setImages] = useState([]);

const photoPaths = [
"Ouai/IMG_8338.JPG",
"Ouai/IMG_8337.JPG",
"Ouai/IMG_8344.JPG",
"Ouai/IMG_8340.JPG",
"Ouai/IMG_8347.JPG",
"Ouai/IMG_8412 copy 3.JPG",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,   "Ouai/IMG_8337.JPG",);
    

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
                <Heading>Ouai Dry Sheets Launch & Press Preview</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Mass Appeal</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>ROLE:</BoldH1>
                    <DataH1>
                      Executive Producer, Creative & Design Director
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                    New York City
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>One Day</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Press, VIPs, Member Shoppers</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>John Legend, Chrissy Teigen, Bella Hadid, Jen Atkin</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1></BoldH1>
                    <DataH1></DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>C</span>oC worked with
                  haircare, bodycare and fragrance brand Ouai to produce a press
                  preview/launch and retail mini-popup for the debut of its
                  inaugural line of dry sheets. To bring the theme to life, CoC
                  turned the pop-up site into a mini-laundromat, and created
                  props including a prototype magazine. CoC oversaw the creative
                  design, install and staffing for the event, which included
                  celebrity meet-and-greets and photo-ops with talent John
                  Legend, Chrissy Teigen, Bella Hadid and celebrity hairstylist
                  (and Ouai founder) Jen Atkin.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Galore Mag:{" "}
                      <PA
                        target="new"
                        href="https://galoremag.com/jen-atkin-kim-kardashian-hairstylist-tell-us-how-everyones-going-to-want-their-hair-in-2018/"
                      >
                        https://galoremag.com/jen-atkin-kim-kardashian-hairstylist-tell-us-how-everyones-going-to-want-their-hair-in-2018/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      Beauty Matter:{" "}
                      <PA
                        target="new"
                        href="https://beautymatter.com/articles/ouai-haircare-anti-frizz-sheets-launch-this-sheet-is-the-real-deal "
                      >
                        https://beautymatter.com/articles/ouai-haircare-anti-frizz-sheets-launch-this-sheet-is-the-real-deal{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Pop Sugar:{" "}
                      <PA
                        target="new"
                        href="https://www.popsugar.com/beauty/ouai-launches-anti-frizz-sheets-44365086 "
                      >
                        https://www.popsugar.com/beauty/ouai-launches-anti-frizz-sheets-44365086{" "}
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

export default Ouai;
