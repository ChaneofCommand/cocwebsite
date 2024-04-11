import React, {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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
Image,
  Forward,
  Back,
  Close,
  Ratio,

} from "../Case_Study_Template";

import styles from "../Case_Studies/CaseStudyTemplate.module.css"
import { MdArrowForwardIos,MdArrowBackIos,MdClose } from "react-icons/md";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";
import {PhotoDiv} from "../../Case_Study_Template/Case_Study_Images/NF_PHOTOS";

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

const NorthFace = () => {

  const [photoUrls, setPhotoUrls] = useState([]);

 
  // Initialize Firebase

  const [images, setImages] = useState([]);

const photoPaths = [
"TheNorthFace/NF1.jpg",
"TheNorthFace/NF2.jpg",
"TheNorthFace/NF3.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path);
      const img1Ref = ref(storage,   "TheNorthFace/NF1.jpg",);
    

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

  const toggle =()=>{
    setIsVisible(!visible);
    console.log(visible);
  }
  return (
    <>
    <BopWrapper>
      <AboutWrapper id="one">
        <ColumnA1 />

        <ColumnA2>
          <PhotoDiv style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
              }}>
            <Column1></Column1>
            <Column2>
              <Heading>
              More Than A Jacket at Dick’s
 House of Sport
              </Heading>
              <Underline />

              <DataContainer>
                <DataDiv>
                  <BoldH1>CLIENT:</BoldH1>
                  <DataH1>The North Face</DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>LOCATION:</BoldH1>
                  <DataH1>
                  Knoxville, TN + Rochester, NY
                  </DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>AGENCY:</BoldH1>
                  <DataH1>Chane of Command +
 Dick's House of Sport</DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>DURATION:</BoldH1>
                  <DataH1>1 Day</DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>AUDIENCE:</BoldH1>
                  <DataH1>
                    Theater: Private; Times Square: General Public
                  </DataH1>
                </DataDiv>

                <DataDiv>
                  <BoldH1>TALENT:</BoldH1>
                  <DataH1>
                    Margot Robbie, Ewan McGregor, Rosie Perez, Jurnee
                    Smollett, Mary Elizabeth Winstead
                  </DataH1>
                </DataDiv>
              </DataContainer>

              <Subtitle2>
                <span style={{ FontWeight: "bold" }}>C</span>oC produced the
                premiere cast screening, customizing the movie theater and
                creating takeaways for attendees. In celebration, this
                included fully immersive and interactive photo experiences in
                the adjacent Times Square. CoC recreated various scenes from
                Harley Quinn’s life, including her living room; favorite night
                club; and a custom confetti dome, which each featured
                different photo opportunities. We cast 50 Harley Quinns to
                roam the square and interact with guests before the real cast
                took the stage.
                <br />
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
            onClick={() => {setCurrentImageIndex(index);toggle();}}
            
          />
        ))}
          </Imagebox>
<div className={visible ? styles.lightbox : styles.hidden}>
              <Back onClick={()=>{prevImage()}}><MdArrowBackIos/></Back>
              <Forward onClick={()=>{nextImage()}}> <MdArrowForwardIos/></Forward>
              <Close onClick={()=>{toggle()}}> <MdClose/></Close>
              <Ratio>{imgnum}/{images.length}</Ratio>
              <img  className={visible ? styles.zoomimg : styles.hidden}   src={images[currentImageIndex]}                                                                 />
            </div>
        </ColumnA2B>
        <ColumnA3 />
      </AboutWrapper2>
      <LoadFromTop />
    </BopWrapper>
  </>
  );
};

export default NorthFace;
