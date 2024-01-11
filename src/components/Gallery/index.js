import React, { useState } from "react";
//import icon1 from "../../images/annika1.jpg";
//import icon2 from "../../images/p5jsgame.png";
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
} from "./Case_Study_Thumbnails";
/*href = {`${process.env.PUBLIC_URL}/markforged`} >
 */
const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  return (
    <GalleryBox>
      <GalleryContainer>
        <Column1 />
        <Column2>
          <GalleryWrapper>
            <Anchor to="/birdsofprey">
              <GalleryProject
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
              >
                {isVisible && <HoverDiv />}
                {isVisible && (
                  <HoverDiv2 style={{ left: "22.5%" }}>BIRDS OF PREY</HoverDiv2>
                )}
              </GalleryProject>
            </Anchor>
            <Anchor to="/hunter">
              <GalleryProject11
                onMouseEnter={() => setIsVisible9(true)}
                onMouseLeave={() => setIsVisible9(false)}
              >
                {isVisible9 && <HoverDiv />}
                {isVisible9 && (
                  <HoverDiv2 style={{ left: "20%" }}>HUNTER X NORDSTROM</HoverDiv2>
                )}
              </GalleryProject11>
            </Anchor>
            <Anchor to="/markforged">
              <GalleryProject2
                onMouseEnter={() => setIsVisible2(true)}
                onMouseLeave={() => setIsVisible2(false)}
              >
                {isVisible2 && <HoverDiv />}
                {isVisible2 && (
                  <HoverDiv2 style={{ left: "25.5%" }}>MARKFORGED</HoverDiv2>
                )}
              </GalleryProject2>
            </Anchor>
            <Anchor to="/busch">
              <GalleryProject3
                onMouseEnter={() => setIsVisible3(true)}
                onMouseLeave={() => setIsVisible3(false)}
              >
                {isVisible3 && <HoverDiv />}
                {isVisible3 && (
                  <HoverDiv2 style={{ left: "30%" }}>TREEWORK</HoverDiv2>
                )}
              </GalleryProject3>
            </Anchor>
            <Anchor to="/lolla">
              <GalleryProject4
                onMouseEnter={() => setIsVisible4(true)}
                onMouseLeave={() => setIsVisible4(false)}
              >
                {isVisible4 && <HoverDiv />}
                {isVisible4 && (
                  <HoverDiv2 style={{ left: "20%" }}>LOLLAPALOOZA</HoverDiv2>
                )}
              </GalleryProject4>
            </Anchor>

            <Anchor to="/happify">
              <GalleryProject5
                onMouseEnter={() => setIsVisible5(true)}
                onMouseLeave={() => setIsVisible5(false)}
              >
                {isVisible5 && <HoverDiv />}
                {isVisible5 && (
                  <HoverDiv2 style={{ left: "20%" }}>
                    YOGA IN THE PARK
                  </HoverDiv2>
                )}
              </GalleryProject5>
            </Anchor>

            <Anchor to="/amazon">
              <GalleryProject6
                onMouseEnter={() => setIsVisible6(true)}
                onMouseLeave={() => setIsVisible6(false)}
              >
                {isVisible6 && <HoverDiv />}
                {isVisible6 && (
                  <HoverDiv2 style={{ left: "25%" }}>AMAZON ADS</HoverDiv2>
                )}
              </GalleryProject6>
            </Anchor>
            <Anchor to="/govball">
              <GalleryProject7
                onMouseEnter={() => setIsVisible7(true)}
                onMouseLeave={() => setIsVisible7(false)}
              >
                {isVisible7 && <HoverDiv />}
                {isVisible7 && (
                  <HoverDiv2 style={{ left: "20%" }}>GOVERNOR'S BALL</HoverDiv2>
                )}
              </GalleryProject7>
            </Anchor>
            <Anchor to="/northface">
              <GalleryProject8
                onMouseEnter={() => setIsVisible8(true)}
                onMouseLeave={() => setIsVisible8(false)}
              >
                {isVisible8 && <HoverDiv />}
                {isVisible8 && (
                  <HoverDiv2 style={{ left: "21%" }}>THE NORTH FACE</HoverDiv2>
                )}
              </GalleryProject8>
            </Anchor>

            <Anchor to="/kith">
              <GalleryProject10
                onMouseEnter={() => setIsVisible10(true)}
                onMouseLeave={() => setIsVisible10(false)}
              >
                {isVisible10 && <HoverDiv />}
                {isVisible10 && (
                  <HoverDiv2 style={{ left: "20%" }}>MERRY KITHMAS</HoverDiv2>
                )}
              </GalleryProject10>
            </Anchor>
          </GalleryWrapper>
        </Column2>
        <Column3 />
        <LoadFromTop />
      </GalleryContainer>
    </GalleryBox>
  );
};

export default Gallery;
