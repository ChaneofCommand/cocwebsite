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
import { PhotoDiv } from "../Case_Study_Images/AMAZON_PHOTOS";
import styles from "../Case_Studies/CaseStudyTemplate.module.css";
import { MdArrowForwardIos, MdArrowBackIos, MdClose } from "react-icons/md";


import { storage } from "../../Firebase/firebase";
const Camouflage = () => {
  console.log("Camouflage component rendering...");
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const photoPaths = [
    "Camouflage/camouflage1.jpg",
    "Camouflage/camouflage2.jpg",
    "Camouflage/camouflage3.jpeg",
    "Camouflage/camouflage4.jpeg",

    // Add more photo paths as needed
  ];
  const [img1, setImg1] = useState(null);
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  useEffect(() => {
    let isMounted = true; // Cleanup flag

    const loadFirebaseAssets = async () => {
      console.log("Loading Firebase assets...");
      try {
        // Create refs
        const img1Ref = ref(storage, "Camouflage/camouflage3.jpeg");
        const video1Ref = ref(storage, "Videos/Camouflage/Camouflage1.mp4");
        const video2Ref = ref(storage, "Videos/Camouflage/fourfreedoms.mp4");

        // Load main image and videos with error handling
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

        // Load gallery images
        const imagePromises = photoPaths.map((path) => {
          const imageRef = ref(storage, path);
          return getDownloadURL(imageRef).catch(error => {
            console.error(`Error loading image ${path}:`, error);
            return null; // Return null for failed images
          });
        });

        // Wait for all assets to load
        const [img1Url, video1Url, video2Url] = await Promise.all(assetPromises);
        const imageUrls = await Promise.all(imagePromises);

        // Only update state if component is still mounted
        if (isMounted) {
          if (img1Url) setImg1(img1Url);
          if (video1Url) setVideo1(video1Url);
          if (video2Url) setVideo2(video2Url);
          
          // Filter out null values from failed image loads
          const validImageUrls = imageUrls.filter(url => url !== null);
          setImages(validImageUrls);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error in loadFirebaseAssets:", error);
        if (isMounted) {
          setLoading(false);
        }
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
                <Heading>Camouflage By AiWeiWei</Heading>
                <Underline />

                <DataContainer>
                  <DataDiv>
                    <BoldH1>CLIENT:</BoldH1>
                    <DataH1>Four Freedoms Conservancy</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>LOCATION:</BoldH1>
                    <DataH1>
                      Four Freedoms State Park<br></br> Roosevelt Island, NY
                    </DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AGENCY:</BoldH1>
                    <DataH1>Chane of Command</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>DURATION:</BoldH1>
                    <DataH1>September - November 2025</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>AUDIENCE:</BoldH1>
                    <DataH1>General Public</DataH1>
                  </DataDiv>

                  <DataDiv>
                    <BoldH1>TALENT:</BoldH1>
                    <DataH1>
                      AiWeiWei
                    </DataH1>
                  </DataDiv>
                </DataContainer>

                <Subtitle2>
                  <span style={{ FontWeight: "bold" }}>I</span>n the fall of 2025, the grand Four Freedoms Memorial situated at the tip of the Four Freedoms State Park on Roosevelt Island, was entirely wreathed in a layer of camouflage. Designed by Renowned contemporary artitst Aiweiwei; "Camouflage" seeks to convey the modern nuances of war.
                   Relating pets left behind in war, and cats left behind at the cat sanctuary on Roosevelt island, Aiweiwei's "Camouflauge" is comprised of several different images of cats rather than abstract shapes. The hallowed setting of the morial to Roosevelt's Four Freedomns: of speech, from fear, of worship, and from want; Coupled with a Ukranian proverb "Кому війна, кому мати рідна" which says for some people, war is war; for others, war is the dear mother'
                   brings to light the duality of war, where some profit and many suffer and at what cost. The exhibit also had an interactive experience for guests, who were welcome to write positive messages on the back of colorful ribbons, each printed with one of the four freedoms, which they could then themselves tie onto the camouflage for all to see.
                </Subtitle2>
                <PressLinks>
                  <PLBox>
                    <LinkHeader>PRESS LINKS: </LinkHeader>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      Four Freedoms Conservancy:{" "}
                      <PA
                        target="new"
                        href="https://www.fdrfourfreedomspark.org/art-x-freedom/"
                      >
                        https://www.fdrfourfreedomspark.org/art-x-freedom/{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    {" "}
                    <PLink>
                      PBS:{" "}
                      <PA
                        target="new"
                        href="https://www.pbs.org/newshour/show/ai-weiweis-camouflage-art-installation-reflects-on-fdrs-four-freedoms"
                      >
                        https://www.pbs.org/newshour/show/ai-weiweis-camouflage-art-installation-reflects-on-fdrs-four-freedoms{" "}
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      The Architect's Newspaper:{" "}
                      <PA
                        target="new"
                        href="https://www.archpaper.com/2025/09/ai-weiwei-installation-roosevelt-island/ "
                      >
                        https://www.archpaper.com/2025/09/ai-weiwei-installation-roosevelt-island/
                      </PA>
                    </PLink>
                  </PLBox>
                  <PLBox>
                    <PLink>
                      The Art Newspaper:{" "}
                      <PA
                        target="new"
                        href="https://www.theartnewspaper.com/2025/09/03/ai-weiwei-camouflage-cat-four-freedoms-park-new-york "
                      >
                        https://www.theartnewspaper.com/2025/09/03/ai-weiwei-camouflage-cat-four-freedoms-park-new-york{" "}
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

export default Camouflage;
