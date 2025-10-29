import React, {useEffect, useState} from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase/firebase"; 
import LoadFromTop from "../../../Hooks/LoadFromTop";
import styles from "../Case_Studies/CaseStudyTemplate.module.css"
import { MdArrowForwardIos,MdArrowBackIos,MdClose } from "react-icons/md";
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
  PhotoDiv,
  ColumnA2B,
Image,
  Forward,
  Back,
  Close,
  Ratio,
} from "../Case_Study_Template";
import { BopWrapper } from "../Case_Study_Images/BOP_PHOTOS";



const BOP = () => {

  const [photoUrls, setPhotoUrls] = useState([]);

 
  

  const [images, setImages] = useState([]);

const photoPaths = [
"BOP/BOP1.jpeg",
"BOP/BOP10.jpeg",
"BOP/BOP11.jpeg",
"BOP/BOP12.jpeg",
"BOP/BOP13.jpeg",
"BOP/BOP15.jpeg",
"BOP/BOP16.jpeg",
"BOP/BOP14.jpeg",
"BOP/BOP17.jpeg",
"BOP/BOP18.jpeg",
"BOP/BOP19.jpeg",
"BOP/BOP2.jpeg",
"BOP/BOP3.jpeg",
"BOP/BOP4.jpeg",
"BOP/BOP5.jpeg",
"BOP/BOP6.jpeg",
"BOP/BOP8.jpeg",
"BOP/BOP9.jpeg",
"BOP/BOP7.jpeg",
"BOP/BOP20.jpg",
   // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  
  useEffect(() => {
    let isMounted = true; // Cleanup flag

    const loadFirebaseAssets = async () => {
      try {
        // Create refs
        const img1Ref = ref(storage, "BOP/BOP1.jpeg");

        // Load main image with error handling
        const img1Promise = getDownloadURL(img1Ref).catch(error => {
          console.error("Error loading main image:", error);
          return null;
        });

        // Load gallery images
        const imagePromises = photoPaths.map((path) => {
          const imageRef = ref(storage, path);
          return getDownloadURL(imageRef).catch(error => {
            console.error(`Error loading image ${path}:`, error);
            return null; // Return null for failed images
          });
        });

        // Wait for all assets to load
        const [img1Url, ...imageUrls] = await Promise.all([img1Promise, ...imagePromises]);

        // Only update state if component is still mounted
        if (isMounted) {
          if (img1Url) setImg1(img1Url);
          
          // Filter out null values from failed image loads
          const validImageUrls = imageUrls.filter(url => url !== null);
          setImages(validImageUrls);
        }
      } catch (error) {
        console.error("Error in loadFirebaseAssets:", error);
      }
    };

    loadFirebaseAssets();

    // Cleanup function
    return () => {
      isMounted = false;
    };
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
            <PhotoDiv   style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
              }}>
              <Column1></Column1>
              <Column2>
                <Heading>
                  HARLEY QUINN: BIRDS OF PREY PREMIERE AND INTERACTIVE
                  EXPERIENCE
                </Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Warner Bros.</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                      Times Square & AMC Empire 25 - 42nd St.: NYC, NY
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
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

export default BOP;
