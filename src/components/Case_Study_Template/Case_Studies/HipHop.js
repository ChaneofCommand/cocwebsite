import React, { useEffect} from "react";
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
  PlayerDiv,
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
const HipHop = () => {

  const [photoUrls, setPhotoUrls] = useState([]);

 
  // Initialize Firebase

  const [images, setImages] = useState([]);

  const photoPaths = [
    "HipHop/1692812693709.jpg",
    "HipHop/A49U0269.jpg",
    "HipHop/A49U0272.jpg",
    "HipHop/A49U0300.jpg",
    "HipHop/A49U0308.jpg",
    "HipHop/A49U0333.jpg",
    "HipHop/A49U0359.jpg",
    "HipHop/A49U0370.jpg",
    "HipHop/A49U0384.jpg",
    "HipHop/HHTI_LA-104.jpg",
    "HipHop/HHTI_LA-106.jpg",
    "HipHop/HHTI_LA-121.jpg",
    "HipHop/HHTI_LA-141.jpg",
    "HipHop/HHTI_LA-155.jpg",
    "HipHop/HHTI_LA-156.jpg",
    "HipHop/HHTI_LA-166.jpg",
    "HipHop/HHTI_LA-175.jpg",
    "HipHop/HHTI_LA-191.jpg",
    "HipHop/HHTI_LA-195.jpg",
    "HipHop/HHTI_LA-217.jpg",
    "HipHop/HHTI_LA-22.jpg",
    "HipHop/HHTI_LA-220.jpg",
    "HipHop/HHTI_LA-265.jpg",
    "HipHop/HHTI_LA-29.jpg",
    "HipHop/HHTI_LA-290.jpg",
    "HipHop/HHTI_LA-295.jpg",
    "HipHop/HHTI_LA-314.jpg",
    "HipHop/HHTI_LA-316.jpg",
    "HipHop/HHTI_LA-32.jpg",
    "HipHop/HHTI_LA-334.jpg",
    "HipHop/HHTI_LA-336.jpg",
    "HipHop/HHTI_LA-37.jpg",
    "HipHop/HHTI_LA-452.jpg",
    "HipHop/HHTI_LA-467.jpg",
    "HipHop/HHTI_LA-471.jpg",
    "HipHop/HHTI_LA-473.jpg",
    "HipHop/HHTI_LA-49.jpg",
    "HipHop/HHTI_LA-81.jpg",
    "HipHop/HHTI_LA-83.jpg",
    "HipHop/HHTI_LA-96.jpg",
       // Add more photo paths as needed
      ];
      const [img1, setImg1] = useState(null);
      const [video1, setVideo1] = useState(null);
      const [video2, setVideo2] = useState(null);
      useEffect(() => {
        let imagePromises = photoPaths.map((path) => {
          const imageRef = ref(storage, path);
          const img1Ref = ref(storage,   "HipHop/A49U0300.jpg",);
          const video1Ref = ref(storage,   "Videos/INSTAREEL_HIPHOP_50.mp4",);
          const video2Ref = ref(storage,   "Videos/HipHop2.mp4",);
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
          getDownloadURL(video2Ref)
          .then((url) => {
            // The download URL is now available to use
            setVideo2(url);
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
                <Heading>hip hop 'til infinity</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Mass Appeal</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                      New York City, NY <br></br> Los Angeles, CA <br></br> +
                      More Cities Soon
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>45 Days (NYC); 4 Months (LA)</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>General Public: Hip-Hop Fans</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Nas, Snoop Dogg, DJ Clark Kent, DJ Battlecat
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>M</span>edia brand Mass
                  Appeal tapped CoC to develop “Hip-Hop 'Til Infinity,” an
                  evocative digital installation celebrating 50 years of
                  hip-hop. CoC was involved with procuring rare,
                  never-before-seen artifacts for the exhibition and producing
                  highly Instagrammable ‘surprise and delight’ props, taking
                  guests on an immersive journey through hip-hop’s different
                  eras and regions. After launching the exhibition at Hall Des
                  Lumières during New York City’s #HipHop50 celebrations in
                  August 2023, the exhibition went bigger and better in Los
                  Angeles with a four-month activation that kicked off just
                  before the start of Grammy season in January 2024. CoC helped
                  curate artifacts for the museum, developed the design for and
                  oversaw the buildout of the raw site, procuring vendors and
                  overseeing buildout of new installations including a
                  recreation of the infamous Death Row Records electric chair
                  and Snoop Dogg's 'Doggy Den,' dedicated to the 30 year
                  anniversary of Doggystyle. CoC also managed partnerships with
                  Morrison Hotel Galleries and photographer Estevan Oriol to
                  round out the exhibit. In addition to ticket sales and social
                  media buzz, the pop-up produced massive retail sales via the
                  carefully merchandised gift shop.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Time Out New York:{" "}
                      <PA
                        target="new"
                        href="https://www.timeout.com/newyork/news/walk-through-50-years-of-hip-hop-history-at-this-new-immersive-exhibit-in-nyc-070623"
                      >
                        https://www.timeout.com/newyork/news/walk-through-50-years-of-hip-hop-history-at-this-new-immersive-exhibit-in-nyc-070623{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      Billboard:{" "}
                      <PA
                        target="new"
                        href="https://www.billboard.com/culture/product-recommendations/hip-hop-til-infinity-exhibition-how-get-tickets-1235554519/ "
                      >
                        https://www.billboard.com/culture/product-recommendations/hip-hop-til-infinity-exhibition-how-get-tickets-1235554519/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    Thrillist:{" "}
                      <PA
                        target="new"
                        href="https://www.thrillist.com/lifestyle/new-york/hip-hop-immersive-art-exhibit "
                      >
                        https://www.thrillist.com/lifestyle/new-york/hip-hop-immersive-art-exhibit{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    KTLA:{" "}
                      <PA
                        target="new"
                        href="https://ktla.com/morning-news/hip-hop-til-infinity-honors-50-years-of-hip-hop-with-hollywood-immersive-exhibit/ "
                      >
                        https://ktla.com/morning-news/hip-hop-til-infinity-honors-50-years-of-hip-hop-with-hollywood-immersive-exhibit/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    Artnet News:{" "}
                      <PA
                        target="new"
                        href="https://news.artnet.com/art-world/immersive-experience-hip-hop-til-infinity-hall-des-lumieres-2335114  "
                      >
                        https://news.artnet.com/art-world/immersive-experience-hip-hop-til-infinity-hall-des-lumieres-2335114{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    USA Today:{" "}
                      <PA
                        target="new"
                        href="https://www.usatoday.com/story/travel/2023/08/04/hip-hop-at-50-hall-des-lumieres/70514066007/  "
                      >
                        https://www.usatoday.com/story/travel/2023/08/04/hip-hop-at-50-hall-des-lumieres/70514066007/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    Fast Company:{" "}
                      <PA
                        target="new"
                        href="https://www.fastcompany.com/90925941/hall-des-lumieres-hip-hop-infinity   "
                      >
                        https://www.fastcompany.com/90925941/hall-des-lumieres-hip-hop-infinity{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    Audacy/1010 Wins:{" "}
                      <PA
                        target="new"
                        href="https://www.audacy.com/1010wins/news/local/immersive-experience-hip-hop-til-infinity-covers-5-decades   "
                      >
                        https://www.audacy.com/1010wins/news/local/immersive-experience-hip-hop-til-infinity-covers-5-decades{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    Secret Los Angeles:{" "}
                      <PA
                        target="new"
                        href="https://secretlosangeles.com/hip-hop-til-infinity-la-now-open/    "
                      >
                        https://secretlosangeles.com/hip-hop-til-infinity-la-now-open/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                </PressLinks>
             
                 <PlayerWrapper>
                 <PlayerDiv>  <ReactPlayer
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

export default HipHop;
