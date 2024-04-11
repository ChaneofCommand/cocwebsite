import React, { useEffect } from "react";
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

const Accenture = () => {
  // Define a function to import all images from a directory
  const [photoUrls, setPhotoUrls] = useState([]);

 
  // Initialize Firebase

  const [images, setImages] = useState([]);

const photoPaths = [
"Accenture/acc243.png",
"Accenture/acc244.png",
"Accenture/acc245.png",
"Accenture/acc246.png",
"Accenture/acc248.png",
"Accenture/acc249.png",
"Accenture/acc251.png",
"Accenture/acc250.png",
"Accenture/acc252.png",
"Accenture/acc253.png",
"Accenture/acc254.png",
"Accenture/acc255.png",
"Accenture/acc256.png",
"Accenture/acc259.png",
"Accenture/acc257.png",
"Accenture/acc260.png",
"Accenture/acc261.png",
"Accenture/acc263.png",
"Accenture/acc264.png",
"Accenture/acc265.png",
   // Add more photo paths as needed
  ];

  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,   "Accenture/acc260.png",);
      const video1Ref = ref(storage,   "Videos/Accenture_Ideas_For_Change.mp4",);
  
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
                <Heading>Ideas For Change</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Accenture</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>ROLE:</BoldH1>
                    <DataH1>
                      Design, Build, Project Management, Technical Integration,
                      Maintenance Plan
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>1 Manhattan West, New York City</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command and Landor & Fitch</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>Permanent Installation</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Corporate; Staff, Clients & Partners</DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>C</span>oming out of the
                  pandemic, IT services and consulting firm Accenture & their
                  Creative Agency Landor & Fitchh, tapped CoC for the launch of
                  an innovative art installation experience at its new U.S.
                  innovation hub in New York City, aimed at encouraging
                  collaboration and incentivizing workers to return to the
                  office. The project, dubbed “Building Ideas For Change,”
                  utilized cutting-edge design and technology in creating an
                  interactive sculpture that allows guests to leave ideas that
                  can then be tracked in the installation as they blossom into
                  reality. Initially tapped as a design consultant, CoC was
                  ultimately also responsible for the build, technical
                  integration, install and maintenance plan of the structure.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Accenture:{" "}
                      <PA
                        target="new"
                        href="https://www.accenture.com/us-en/about/company/building-ideas-change"
                      >
                        https://www.accenture.com/us-en/about/company/building-ideas-change{" "}
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

export default Accenture;
