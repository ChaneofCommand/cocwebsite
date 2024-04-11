import React, {useEffect} from "react";
import { initializeApp } from "firebase/app";
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

const Rodarte = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

 
  // Initialize Firebase

  const [images, setImages] = useState([]);

const photoPaths = [
"Rodarte/66612664355__72795C87-5CE6-4B96-AC88-DB55EC42A543.jpg",
"Rodarte/6B1E98C5-D922-4CF0-B118-E0EC9B6202FF.jpg",
"Rodarte/IMG_1774.jpg",
"Rodarte/IMG_1782.jpg",
"Rodarte/IMG_1802.jpg",
"Rodarte/IMG_1821.jpg",
"Rodarte/IMG_1850.jpg",
"Rodarte/IMG_1856.jpg",
"Rodarte/IMG_1884.jpg",
"Rodarte/IMG_1892.jpg",
"Rodarte/IMG_1893.jpg",
"Rodarte/IMG_1896.jpg",
"Rodarte/IMG_1897.jpg",
"Rodarte/IMG_1916.jpg",
"Rodarte/IMG_1928.jpg",
"Rodarte/IMG_1944.jpg",
"Rodarte/IMG_1982.jpg",
"Rodarte/IMG_2028.jpg",
"Rodarte/IMG_2030.jpg",
"Rodarte/IMG_2112.jpg",
"Rodarte/IMG_2120.jpg",
"Rodarte/IMG_2142.jpg",
"Rodarte/IMG_2164.jpg",
"Rodarte/IMG_2174.jpg",
"Rodarte/IMG_2212.jpg",
"Rodarte/IMG_2215.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,   "Rodarte/IMG_1897.jpg",);
    

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
                <Heading>Art by Rodarte</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Rodarte/IMG Fashion Week</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                      New York City
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command and Baskin Events</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>One Week (Fashion Week)</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>Fashionistas; NYFW Attendees; general public</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>Kate and Laura Mulleavy; Maude Apatow; Claire Danes</DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>I</span>MG Focus hired
                  CoC to bring the world of fashion label and design house
                  Rodarte to life during New York Fashion Week with an immersive
                  exhibition at New York’s Spring Studios. In addition to
                  showcasing iconic looks from nearly 20 years of Rodarte
                  collections, the exhibit, powered by Yahoo technology,
                  featured project-mapped holograms of Rodarte founders Kate and
                  Laura Mulleavy’s designs from movies “Black Swan,” and “Sing
                  2” and a Q+A with actress Maude Apatow. CoC oversaw the
                  crating and shipping of garments across coasts, hiring
                  museum-grade staffing to dress mannequins, scanning hi-res
                  film cells to create projection mapped holograms, among other
                  fine-tuned details to bring the experience to life.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      New York Times:{" "}
                      <PA
                        target="new"
                        href="https://www.nytimes.com/2022/02/16/style/ny-fashion-week-2022-parties.html"
                      >
                        https://www.nytimes.com/2022/02/16/style/ny-fashion-week-2022-parties.html{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      WWD:{" "}
                      <PA
                        target="new"
                        href="https://wwd.com/fashion-news/designer-luxury/rodartes-kate-and-laura-mulleavy-talk-fashion-off-and-on-the-runway-1235070836/ "
                      >
                        https://wwd.com/fashion-news/designer-luxury/rodartes-kate-and-laura-mulleavy-talk-fashion-off-and-on-the-runway-1235070836/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Just Jared:{" "}
                      <PA
                        target="new"
                        href="https://www.justjared.com/photo-gallery/4703543/jasmin-savoy-brown-maude-apatow-rodarte-event-05/ "
                      >
                        https://www.justjared.com/photo-gallery/4703543/jasmin-savoy-brown-maude-apatow-rodarte-event-05/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Grazia Magazine:{" "}
                      <PA
                        target="new"
                        href="https://graziamagazine.com/us/articles/the-art-of-rodarte-celebrates-mulleavy-sisters-creative-success/ "
                      >
                        https://graziamagazine.com/us/articles/the-art-of-rodarte-celebrates-mulleavy-sisters-creative-success/{" "}
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

export default Rodarte;
