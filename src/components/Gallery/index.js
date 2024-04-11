import React, { useState, useEffect } from "react";
//import icon1 from "../../images/annika1.jpg";
//import icon2 from "../../images/p5jsgame.png";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import { Button } from "react-scroll";
import LoadFromTop from "../../Hooks/LoadFromTop";

import { AboutWrapper } from "../About/About_Components";
import {
  GalleryBox,
  GalleryContainer,
  GalleryWrapper,
  Anchor,
  Column1,
  Column2,
  Column3,
  HoverDiv,
  HoverDiv2,
} from "./Gallery_Components";
import {
  GalleryProject,
  GalleryProject2,
  GalleryProject3,
  GalleryProject4,
  GalleryProject5,
  GalleryProject6,
  GalleryProject7,
  GalleryProject8,
  GalleryProject9,
  GalleryProject10,
  GalleryProject11,
  GalleryProject12,
  GalleryProject13,
} from "./Case_Study_Thumbnails";
/*href = {`${process.env.PUBLIC_URL}/markforged`} >
 */
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
const Gallery = () => {
 

  // Your web app's Firebase configuration

  // Initialize Firebase

  const [photoUrls, setPhotoUrls] = useState([]);

 
  // Initialize Firebase

  const [images, setImages] = useState([]);
  const [links, setLinks] = useState([
    "/hiphop",
    "/adidasc",
    "/accenture",
    "/adidascon",
    "/canadag",
    "/rodarte",
    "/brown",
    "/ouai",
    "/googlep",
    "/celgene",
    "/birdsofprey",
    "/hunter",
    "/markforged",
    "/busch",
    "/lolla",
    "/happify",
    "/amazon",
    "/govball",
    "/northface",
    "/kith",
    "/crimecon",
  ]); // Your array of links
  const [texts, setTexts] = useState([
    "HIP HOP 'TIL INFINITY",
    "ADIDAS CREATOR PARK",
    "ACCENTURE IDEAS FOR CHANGE",
    "ADIDAS <br>X<br>CONCEPTS",
    "CANADA GOOSE <br>F&B <br>CART POP-UP",
    "RODARTE",
    "BEN RIACH",
    "OUAI <br> DRY SHEETS <br> LAUNCH",
    "GOOGLE PIXEL <br> X <br>YOUTUBE MUSIC",
    "CELGENE",
    "BIRDS OF PREY",
    "HUNTER <br>X<br> NORDSTROM",
    "MARKFORGED",
    "TREEWORK",
    "LOLLAPALOOZA",
    "YOGA <br> IN  <br>THE PARK",
    "AMAZON ADS",
    "GOVERNOR'S BALL",
    "THE <br> NORTH FACE",
    "MERRY KITHMAS",
    "CRIME CON",
  ]); // Your array of texts
  const photoPaths = [
    "Thumbnails/1692812693709.jpg",
    "Thumbnails/SITW19_AryaCollective_0427_151207_KaylaReefer.jpg",
    "Thumbnails/acc260.png",
    "Thumbnails/IMG_3922.JPG",
    "Thumbnails/CG-3servings.jpg",
    "Thumbnails/IMG_1982.jpg",
    "Thumbnails/180320_BenRiach_APINES_6899.jpg",
    "Thumbnails/IMG_8347.JPG",
    "Thumbnails/FullSizeRender-2.JPG",
    "Thumbnails/03012017+Celgene+5836.jpg",
    "Thumbnails/BOP1.jpeg",
    "Thumbnails/HUNTER8.jpg",
    "Thumbnails/Markforged3.jpg",
    "Thumbnails/BB2.jpg",
    
    "Thumbnails/lolla1new.jpg",
    "Thumbnails/Happify1.jpg",
    "Thumbnails/AA1.png",
    "Thumbnails/GOV3.jpg",
    "Thumbnails/NF1.jpg",
    "Thumbnails/KITH1.jpg",
    "Thumbnails/652f0c94845e49c7544be29e_highres_MB0290-p-500.jpg",
   
   
   
  
 
  
 
    
   
   
   
  
   
  
   
    // Add more photo paths as needed
  ];
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
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

  return (
    <GalleryBox>
      <GalleryContainer>
        <Column1 />
        <Column2>
          <GalleryWrapper>
            {images.map((image, index) => (
              <Anchor key ={index} to={links[index]}>
                <GalleryProject13 style={{ backgroundImage: `url(${image})` }}>
                  <HoverDiv>
                    {" "}
                    <HoverDiv2 dangerouslySetInnerHTML={{ __html: texts[index] }}></HoverDiv2>
                  </HoverDiv>
                </GalleryProject13>
              </Anchor>
            ))}

            {/*
          <Anchor to="/hiphop">
              <GalleryProject13 style={{ backgroundImage: `url(${HHTI})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>
                    HIP HOP <br></br>'TIL <br></br> INFINITY
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/adidasc">
              <GalleryProject13 style={{ backgroundImage: `url(${ADC})` }}>
                <HoverDiv>
                  <HoverDiv2>ADIDAS CREATOR PARK</HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>
            <Anchor to="/accenture">
              <GalleryProject13 style={{ backgroundImage: `url(${ACC})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>ACCENTURE IDEAS FOR CHANGE</HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>
{/*}
            <Anchor to="/lululemonwundermost">
              <GalleryProject13
                style={{backgroundImage:`url(${LULUW})`}}
                onMouseEnter={() => setIsVisible22(true)}
                onMouseLeave={() => setIsVisible22(false)}
              >
                {isVisible22 && <HoverDiv />}
                {isVisible22 && (
                  <HoverDiv2 >LULULEMON <br></br> WUNDERMOST </HoverDiv2>
                )}
              </GalleryProject13>
            </Anchor>
              
            <Anchor to="/adidascon">
              <GalleryProject13 style={{ backgroundImage: `url(${ACON})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>
                    ADIDAS <br></br> X <br></br> CONCEPTS
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/canadag">
              <GalleryProject13 style={{ backgroundImage: `url(${CG})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>
                    CANADA GOOSE <br></br>F&B <br></br>CART POP-UP
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/rodarte">
              <GalleryProject13 style={{ backgroundImage: `url(${ROD})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>RODARTE</HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/brown">
              <GalleryProject13 style={{ backgroundImage: `url(${BROWN})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>BEN RIACH</HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/ouai">
              <GalleryProject13 style={{ backgroundImage: `url(${OUAI})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>
                    OUAI <br></br> DRY SHEETS <br></br> LAUNCH
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/googlep">
              <GalleryProject13 style={{ backgroundImage: `url(${GOOGLE})` }}>
               <HoverDiv>
                  <HoverDiv2>
                    GOOGLE PIXEL <br></br> X <br></br>YOUTUBE MUSIC
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/celgene">
              <GalleryProject13 style={{ backgroundImage: `url(${CELGENE})` }}>
              <HoverDiv>
                  <HoverDiv2>CELGENE</HoverDiv2>
                </HoverDiv>
              </GalleryProject13>
            </Anchor>

            <Anchor to="/birdsofprey">
              <GalleryProject>
              <HoverDiv>  
                  <HoverDiv2>BIRDS OF PREY</HoverDiv2>
                </HoverDiv>
              </GalleryProject>
            </Anchor>
            <Anchor to="/hunter">
              <GalleryProject11>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>
                    HUNTER <br></br>X<br></br> NORDSTROM
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject11>
            </Anchor>
            <Anchor to="/markforged">
              <GalleryProject2>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>MARKFORGED</HoverDiv2>
                </HoverDiv>
              </GalleryProject2>
            </Anchor>
            <Anchor to="/busch">
              <GalleryProject3>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>TREEWORK</HoverDiv2>
                </HoverDiv>
              </GalleryProject3>
            </Anchor>
            <Anchor to="/lolla">
              <GalleryProject4>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>LOLLAPALOOZA</HoverDiv2>
                </HoverDiv>
              </GalleryProject4>
            </Anchor>

            <Anchor to="/happify">
              <GalleryProject5>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>
                    YOGA <br></br> IN <br></br>THE PARK
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject5>
            </Anchor>

            <Anchor to="/amazon">
              <GalleryProject6>
                <HoverDiv>
                  <HoverDiv2>AMAZON ADS</HoverDiv2>
                </HoverDiv>
              </GalleryProject6>
            </Anchor>
            <Anchor to="/govball">
              <GalleryProject7>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>GOVERNOR'S BALL</HoverDiv2>
                </HoverDiv>
              </GalleryProject7>
            </Anchor>
            <Anchor to="/northface">
              <GalleryProject8>
              <HoverDiv>
                  <HoverDiv2>
                    THE <br></br> NORTH FACE
                  </HoverDiv2>
                </HoverDiv>
              </GalleryProject8>
            </Anchor>

            <Anchor to="/kith">
              <GalleryProject10>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>MERRY KITHMAS</HoverDiv2>
                </HoverDiv>
              </GalleryProject10>
            </Anchor>

            <Anchor to="/crimecon">
              <GalleryProject9 style={{ backgroundImage: `url(${CC})` }}>
                <HoverDiv>
                  {" "}
                  <HoverDiv2>CRIME CON</HoverDiv2>
                </HoverDiv>
              </GalleryProject9>
            </Anchor>
            */}
          </GalleryWrapper>
        </Column2>
        <Column3 />
        <LoadFromTop />
      </GalleryContainer>
    </GalleryBox>
  );
};

export default Gallery;
