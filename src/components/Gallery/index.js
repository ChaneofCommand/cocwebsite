import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
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

  const photoPaths = [
    {
      photolink: "Thumbnails/1692812693709.jpg",
      index: "0",
      link: "/hiphop",
      text: "HIP HOP 'TIL INFINITY",
      keywords: [
        "Art Installation",
        "Special Event Planning",
        "Design",
        "Staffing",
       "Buildout",
       "All"
      ],
    },
    {
      photolink: "Thumbnails/SITW19_AryaCollective_0427_151207_KaylaReefer.jpg",
      index: "1",
      link: "/adidasc",
      text:  "ADIDAS CREATOR PARK",
      keywords: [
        "Executive Producer",
      "Talent Wrangling",
        "Special Event Planning",
        "Fabrication",
        "Design",
        "Staffing",
        "Operations",
        "All"
      
      ],
    },
    {
      photolink: "Thumbnails/acc260.png",
      index: "2",
      link: "/accenture",
      text:  "ACCENTURE IDEAS FOR CHANGE",
      keywords: [
        "Art Installation",
        "Permanent Installation",
        "Office",
        "All"
      ],
    },
    {
      photolink: "Thumbnails/IMG_3922.JPG",
      index: "3",
      link:"/adidascon",
      text:  "ADIDAS <br>X<br>CONCEPTS",
      keywords: [
      "Retail",
        "Special Event Planning",
        "Design",
        "Staffing",
        "Talent Wrangling",
        "Operations",
        "All"
      ],
    },
    {
      photolink: "Thumbnails/CG-3servings.jpg",
      index: "4",
      link:"/canadag",
      text:  "CANADA GOOSE <br>F&B <br>CART POP-UP",
      keywords: [
        "Staffing",
        "Retail",
        "Operations",
        "All"
      ],
    },
    {
      photolink:  "Thumbnails/IMG_1982.jpg",
      index: "5",
      link:  "/rodarte",
      text:    "RODARTE",
      keywords: [
        "Special Event Planning",
        "Design",
        "Staffing",
        "Operations",
        "Fashion",
        "All"
      ],
    },
    {
      photolink:  "Thumbnails/180320_BenRiach_APINES_6899.jpg",
      index: "6",
      link:   "/brown",
      text:     "BEN RIACH",
      keywords: [
        "Meet and Greet",
        "Special Event Planning",
        "Design",
        "Staffing",
        "Talent Wrangling",
        "Operations",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/IMG_8347.JPG",
      index: "7",
      link:   "/ouai",
      text:     "OUAI <br> DRY SHEETS <br> LAUNCH",
      keywords: [
        "Art Installation",
      
        "Design",
        "Staffing",
        "Talent Wrangling",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/FullSizeRender-2.JPG",
      index: "8",
      link:   "/googlep",
      text:     "GOOGLE PIXEL <br> X <br>YOUTUBE MUSIC",
      keywords: [
        "Art Installation",
       "Retail",
        "Design",
        "Staffing",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/03012017+Celgene+5836.jpg",
      index: "9",
      link:   "/celgene",
      text:      "CELGENE",
      keywords: [
        "Permanent Installation",
        "Product Launch",
       "Operations",
       "All"
      ],
    },
    {
      photolink:   "Thumbnails/BOP1.jpeg",
      index: "10",
      link:   "/birdsofprey",
      text:       "BIRDS OF PREY",
      keywords: [
        "Staffing",
        "Talent Wrangling",
        "Special Event Planning",
        "Design",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/HUNTER8.jpg",
      index: "11",
      link:    "/hunter",
      text:       "HUNTER <br>X<br> NORDSTROM",
      keywords: [
        "Design",
        "Special Event Planning",
        "Retail",
        "Talent Wrangling",
        "Custom Design",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/Markforged3.jpg",
      index: "12",
      link:    "/markforged",
      text:      "MARKFORGED",
      keywords: [
        "Media/Press",
        "Special Event Planning",
        "Design",
        "Art Installation",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/BB2.jpg",
      index: "13",
      link:    "/busch",
      text:       "TREEWORK",
      keywords: [
        "Design",
        "Special Event Planning",
        "Staffing",
        "Operations",
        "All"
      ],
    },

    {
      photolink:   "Thumbnails/lolla1new.jpg",
      index: "14",
      link:     "/lolla",
      text:       "LOLLAPALOOZA",
      keywords: [
        "Staffing",
        "Custom Design",
        "All"
      ],
    },

    {
      photolink:   "Thumbnails/Happify1.jpg",
      index: "15",
      link:      "/happify",
      text:       "YOGA <br> IN  <br>THE PARK",
      keywords: [
        "Special Event Planning",
        "Staffing",
        "All"
      ],
    },
   
    {
      photolink:   "Thumbnails/AA1.png",
      index: "16",
      link:      "/amazon",
      text:       "AMAZON ADS",
      keywords: [
        "Talent Wrangling",
        "Special Event Planning",
        "Operations",
        "Staffing",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/GOV3.jpg",
      index: "17",
      link:      "/govball",
      text:        "GOVERNOR'S BALL",
      keywords: [
  
        "Operations",
        "Staffing",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/NF1.jpg",
      index: "18",
      link:      "/northface",
      text:         "THE <br> NORTH FACE",
      keywords: [
        "Retail",
        "Special Event Planning",
        "Custom Design",
        "Staffing",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/KITH1.jpg",
      index: "19",
      link:        "/kith",
      text:          "MERRY KITHMAS",
      keywords: [
        "Retail",
        "Design",
        "Staffing",
        "All"
      ],
    },
    {
      photolink:   "Thumbnails/652f0c94845e49c7544be29e_highres_MB0290-p-500.jpg",
      index: "20",
      link:        "/crimecon",
      text:          "CRIME CON",
      keywords: [
        "Registration",
        "Talent Wrangling",
        "Staffing",
        "Operations",
        "All"
      ],
    },
    // Add more photo paths as needed
  ];
  useEffect(() => {
    let imagePromises = photoPaths.map((path) => {
      const imageRef = ref(storage, path.photolink)
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
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const location = useLocation();
  const selectedKeywordFromLocation = location.state?.selectedKeyword ;
  const handleFilterByKeyword = (keyword) => {
    setSelectedKeyword(keyword);
  };
useEffect(() => {
  if (selectedKeywordFromLocation && selectedKeyword !== selectedKeywordFromLocation) {
    setSelectedKeyword(selectedKeywordFromLocation);
  }
}, [selectedKeywordFromLocation, selectedKeyword]);
  const filteredImages = selectedKeyword && selectedKeyword !== "All"
  ? images.filter((image, index) => photoPaths[index].keywords.includes(selectedKeyword))
  : images;
  return (
    <GalleryBox>
      <GalleryContainer>
        <Column1 />
        <Column2>
       
        <GalleryWrapper>
            {filteredImages.map((image, index) => (
              <Anchor key={index} to={photoPaths[index].link}>
                <GalleryProject13 style={{ backgroundImage: `url(${image})` }}>
                  <HoverDiv>
                    <HoverDiv2 dangerouslySetInnerHTML={{ __html: photoPaths[index].text }} />
                  </HoverDiv>
                </GalleryProject13>
              </Anchor>
            ))}
          </GalleryWrapper>
         
        </Column2>
        <Column3 />
        <LoadFromTop />
      </GalleryContainer>
    </GalleryBox>
  );
};

export default Gallery;
