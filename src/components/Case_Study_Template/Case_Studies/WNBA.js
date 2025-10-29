import React, { useEffect } from "react";
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
import { useState } from "react";
import styles from "../Case_Studies/CaseStudyTemplate.module.css";
import { MdArrowForwardIos, MdArrowBackIos, MdClose } from "react-icons/md";

import { storage } from "../../Firebase/firebase";
const WNBA = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

  const [images, setImages] = useState([]);

  const photoPaths = [
    "WNBA/wnbaimg1.png",
    // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage, "WNBA/wnbaimg1.png");
      const video1Ref = ref(storage, "Videos/WNBA/WNBA1.mp4");
      const video2Ref = ref(storage, "Videos/WNBA/WNBA2.mp4");
      getDownloadURL(img1Ref).then((url) => {
        // The download URL is now available to use
        setImg1(url);
      });
      getDownloadURL(video1Ref).then((url) => {
        // The download URL is now available to use
        setVideo1(url);
      });
      getDownloadURL(video2Ref).then((url) => {
        // The download URL is now available to use
        setVideo2(url);
      });
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
            {" "}
            <PhotoDiv
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
              }}
            >
              {" "}
              <Column1></Column1>{" "}
              <Column2>
                {" "}
                <Heading>Line'Em Up</Heading> <Underline />{" "}
                <DataContainer>
                  {" "}
                  <DataDiv>
                    {" "}
                    <BoldH1>CLIENT:</BoldH1> <DataH1>WNBA/Joan Studios</DataH1>{" "}
                  </DataDiv>{" "}
                  <DataDiv>
                    {" "}
                    <BoldH1>LOCATION:</BoldH1>{" "}
                    <DataH1>
                      {" "}
                      Brooklyn Bridge Park and parks across North America + The
                      Netherlands{" "}
                    </DataH1>{" "}
                  </DataDiv>{" "}
                  <DataDiv>
                    {" "}
                    <BoldH1>AGENCY:</BoldH1>{" "}
                    <DataH1>Chane of Command and Joan Studios</DataH1>{" "}
                  </DataDiv>{" "}
                  <DataDiv>
                    {" "}
                    <BoldH1>DURATION:</BoldH1> <DataH1>3pm - 6pm</DataH1>{" "}
                  </DataDiv>{" "}
                  <DataDiv>
                    {" "}
                    <BoldH1>AUDIENCE:</BoldH1>{" "}
                    <DataH1>Line'Em Up participants and WNBA fans</DataH1>{" "}
                  </DataDiv>{" "}
                  <DataDiv>
                    {" "}
                    <BoldH1>TALENT:</BoldH1>{" "}
                    <DataH1>New York Liberty's Marquesha Davis</DataH1>{" "}
                  </DataDiv>{" "}
                </DataContainer>{" "}
                <Subtitle2>
                  {" "}
                  <span style={{ FontWeight: "bold" }}>T</span>he WNBA's Line'Em
                  Up initiative, seeks to inspire young women across North
                  America to embrace basketball through the groundbreaking
                  inclusion of the women's 3 point line in public basketball
                  courts. The initiative started off with a bang with the
                  hosting of a 5v5 scrimmage between 2 local NYC high school
                  basketball teams at New York's iconic Brooklyn Bridge Park.{" "}
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      WNBA:{" "}
                      <PA target="new" href="https://lineemup.wnba.com/">
                        https://lineemup.wnba.com/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      FOX5 New York:{" "}
                      <PA
                        target="new"
                        href="https://www.fox5ny.com/news/wnba-line-line-em-up-basketball-court"
                      >
                        https://www.fox5ny.com/news/wnba-line-line-em-up-basketball-court{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      NBC Sports:{" "}
                      <PA
                        target="new"
                        href="https://www.nbcsports.com/wnba/news/wnbas-line-em-up-initiative-has-leagues-three-point-line-installed-at-outdoor-courts-around-the-country"
                      >
                        https://www.nbcsports.com/wnba/news/wnbas-line-em-up-initiative-has-leagues-three-point-line-installed-at-outdoor-courts-around-the-country{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      BALLISLIFE.COM:{" "}
                      <PA
                        target="new"
                        href="https://ballislife.com/exclusive-wnba-exec-speaks-about-line-em-up-initiative/"
                      >
                        https://ballislife.com/exclusive-wnba-exec-speaks-about-line-em-up-initiative/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      amNY:{" "}
                      <PA
                        target="new"
                        href="https://www.amny.com/sports/wnba-line-em-up-6-15-25/"
                      >
                        https://www.amny.com/sports/wnba-line-em-up-6-15-25/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                </PressLinks>
                <PlayerWrapper>
                  <PlayerDiv>
                    {" "}
                    <ReactPlayer
                      url={video1}
                      width="100%"
                      height="100%"
                      style={{
                        backgroundColor: "black",
                      }}
                      controls={true}
                    />
                  </PlayerDiv>

                  <PlayerDiv>
                    {" "}
                    <ReactPlayer
                      url={video2}
                      width="100%"
                      height="100%"
                      style={{
                        backgroundColor: "black",
                      }}
                      controls={true}
                    />
                  </PlayerDiv>
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

export default WNBA;
