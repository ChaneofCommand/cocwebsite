import React from "react";
//import icon1 from "../../images/annika1.jpg";
//import icon2 from "../../images/p5jsgame.png";
import { Button } from "react-scroll";
import {
  GalleryContainer,
  GalleryH1,
  GalleryWrapper,
  GalleryOverlay,
  GalleryIcon,
  GalleryH2,
  GalleryP,
  Anchor,
} from "./Gallery_Components";
import {
  GalleryProject,
  GalleryProject2,
  GalleryProject3,
  GalleryProject4,
  GalleryProject5,
  GalleryProject6,
  GalleryProject7,
  GalleryProject8
} from "./Case_Study_Thumbnails";
const Gallery = () => {
  return (
    <GalleryContainer >
      <GalleryWrapper>
      <Anchor href="/markforged" >
          <GalleryProject>
          </GalleryProject>
        </Anchor>
        <Anchor href="" target="_blank">
          <GalleryProject2>
          </GalleryProject2>
        </Anchor>
        <Anchor href="" target="_blank">
          <GalleryProject3>
          </GalleryProject3>
        </Anchor>
        <Anchor href="" target="_blank">
          <GalleryProject4>
          </GalleryProject4>
        </Anchor>
        <Anchor href="" target="_blank">
          <GalleryProject5>
          </GalleryProject5>
        </Anchor>
        <Anchor href="" target="_blank">
          <GalleryProject6>
          </GalleryProject6>
        </Anchor>
        <Anchor href="" target="_blank">
          <GalleryProject7>
          </GalleryProject7>
        </Anchor>
        <Anchor href="" target="_blank">
          <GalleryProject8>
          </GalleryProject8>
        </Anchor>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
