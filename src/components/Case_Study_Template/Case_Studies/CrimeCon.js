import React, {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import LoadFromTop from "../../../Hooks/LoadFromTop";
import styles from "../Case_Studies/CaseStudyTemplate.module.css";
import { MdArrowForwardIos, MdArrowBackIos, MdClose } from "react-icons/md";
import ReactPlayer from 'react-player'
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
  PressLinks,
  PLBox,
  LinkHeader,
  PLink,
  PA,
  PlayerWrapper,
  PlayerDiv,
  PlayerWrapperSolo,
  PlayerDivSolo,
} from "../Case_Study_Template";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import { PhotoDiv } from "../../Case_Study_Template/Case_Study_Images/CRIME_CON_PHOTOS";

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

const CrimeCon = () => {

  const [photoUrls, setPhotoUrls] = useState([]);

 
  // Initialize Firebase

  const [images, setImages] = useState([]);

const photoPaths = [
"CrimeCon/652f0c9444b989ede36a11a1_highres_MUN6126-p-500.jpg",
"CrimeCon/652f0c9467a32b3750a12ac6_highres_MUN6651-p-500.jpg",
"CrimeCon/652f0c9467a32b3750a12adc_highres_MUN6138-p-500.jpg",
"CrimeCon/652f0c94845e49c7544be29e_highres_MB0290-p-500.jpg",
"CrimeCon/652f0c9485906dcdcf3e0c89_IMG_1696-p-500.jpg",
"CrimeCon/652f0c952912327908bd50df_Foster+-+CrimeCon2022-38+Sean+Foster-p-500.jpg",
"CrimeCon/652f0c94e31bdfd1a1d33e40_highres_MUN6094-p-500.jpg",
"CrimeCon/CC1.jpg",
"CrimeCon/652f0c9592ecc4e7deae00cf_highres_MB2042-p-500.jpg",
"CrimeCon/Foster+-+CrimeCon2022-07+Sean+Foster-1920w.webp",
"CrimeCon/Foster+-+CrimeCon2022-37+Sean+Foster-1920w.webp",
"CrimeCon/Foster+-+CrimeCon2022-44+Sean+Foster-3236be58-1920w.webp",
"CrimeCon/IMG_1247-1920w.webp",
"CrimeCon/IMG_1264-1920w.webp",
"CrimeCon/highres_MB0886-1920w.webp",
"CrimeCon/highres_MB0974-1920w.webp",
"CrimeCon/highres_MB0347-1920w.webp",
"CrimeCon/IMG_1692-1920w.webp",
"CrimeCon/highres_MB0697-1920w.webp",
"CrimeCon/highres_MB0656-1920w.webp",
"CrimeCon/highres_MB2042-1920w.webp",
"CrimeCon/highres_MB2143-1920w.webp",
"CrimeCon/highres_MB1148-1920w.webp",
"CrimeCon/highres_MB1138-1920w.webp",
"CrimeCon/highres_MB1213-1920w.webp",
"CrimeCon/highres_MB1413-1920w.webp",
"CrimeCon/highres_NJP4412-1920w.webp",
"CrimeCon/highres_MUN7464-6fc3e07e-1920w.webp",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  const video1Ref = ref(storage,   "Videos/CrimeCon.mp4",);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,  "CrimeCon/CC1.jpg",);
    

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
            style={{backgroundImage:`url(${img1})`}}
            >
              <Column1></Column1>
              <Column2>
                <Heading>
                  Crime Con Austin 2021 <br></br>Crime Con Las Vegas 2022
                </Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Crime Con</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>ROLE:</BoldH1>
                    <DataH1>Registration, Talent Wrangling, Special Event Planning</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>Austin, TX & Las Vegas, NV</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>The Syndicate</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>3 Days</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>General Public; True Crime Fans</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      Nancy Grace, Dr. Phil, Don’t F*ck With Cats cast and many
                      more
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>A</span>fter a year off for the pandemic, Crime Con were ready to come back bigger than ever — and with more attendees and new compliance standards, that meant more than doubling their previous footprint.

CoC managed advance and on-site Guest Registration, the festival's C19 Compliance Plan, and various sponsors in the Partnership Village, which included a “Podcast Alley,“and various build-outs and activations.  On Site CoC also manage various VIP events, helped wrangle the festival's largest talent roster to date, and assisted with stage management and show calling some of the panels.
                  <br />
                </Subtitle2>
<PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      People.com:{" "}
                      <PA
                        target="new"
                        href="https://people.com/human-interest/100-reasons-to-love-america-2018/"
                      >
                        https://people.com/human-interest/100-reasons-to-love-america-2018/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      Variety 2024:{" "}
                      <PA
                        target="new"
                        href="https://variety.com/2024/tv/news/crimecon-2024-clue-awards-submissions-1235906720/ "
                      >
                        https://variety.com/2024/tv/news/crimecon-2024-clue-awards-submissions-1235906720/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    Variety 2022:{" "}
                      <PA
                        target="new"
                        href="https://variety.com/2022/awards/news/dan-abrams-clue-awards-1235236457/ "
                      >
                        https://variety.com/2022/awards/news/dan-abrams-clue-awards-1235236457/ {" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    AETV:{" "}
                      <PA
                        target="new"
                        href="https://www.aetv.com/real-crime/theres-a-crimecon-who-knew "
                      >
                      https://www.aetv.com/real-crime/theres-a-crimecon-who-knew {" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                    The SYN:{" "}
                      <PA
                        target="new"
                        href="https://www.thesyn.com/case-studies/crime-con-2022-vegas  "
                      >
                        https://www.thesyn.com/case-studies/crime-con-2022-vegas  {" "}
                      </PA>
                    </PLink>
                  </PLBox>

                </PressLinks>
                <PlayerWrapperSolo>
                 <PlayerDivSolo>  <ReactPlayer
                    url={video1}
                   width="100%"
                    height="100%"
                    style={{
                   
                      backgroundColor: "black",
                    
                      
                    }}
                    controls={true}
                  /></PlayerDivSolo>
                   
             
             
                   
             </PlayerWrapperSolo>
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

export default CrimeCon;
