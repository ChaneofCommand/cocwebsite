import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../Gallery/Slider.module.css"

export const GalleryBox = styled.div`
  max-width: 100%;
  &::-webkit-scrollbar {
    width: 20px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    height: 5px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
`;
export const GalleryContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  transform: scale(0.9);
  grid-auto-columns: 5.45% 89.1% 5.45%;
  grid-template-areas: "col1 col2 col3";
  padding-bottom: 3%;

 

  @media screen and (max-width: 768px) {
    display: grid;
    transform: scale(1);
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-auto-columns: 6.7% 86.6% 6.7%;
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
  width: 100%;
`;
export const Column2 = styled.div`
  grid-area: col2;
  width: 100%;
  height: 100%;
`;
export const Column3 = styled.div`
  grid-area: col3;
  width: 100%;
`;

export const GalleryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: .6em;
  column-gap: .6em;
  @media screen and (max-width: 768px) {
    gap: 1em;
  }
  @media screen and (max-width: 567px) {
    gap: 0.5em;
  }
  @media screen and (max-width: 500px) {
    gap: 0.5em;
  }
`;

export const Anchor = styled(Link)`
 height:100%
 width:100%;
 text-decoration:none;
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.2;
    transition: 0.5s ease;
  }
`;

export const HoverDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: RGB(255,255,255,0.6);

  opacity: 0;
  display: flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  
  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    height: 100%;
    width: 100%;
  
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    height: 100%;
    width: 100%;
  }
`;
export const HoverDiv2 = styled.p`

  max-width: 150px;
  max-height: 150px;
  font-family: "Open Sans";
  font-weight: bold;
  color: black;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  text-decoration:none;

  @media screen and (max-width: 530px) {
    font-size: 16px;
  }
`;
export const CaseDiv = styled.div`
  height: 230px;
  width: 230px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

export const GalleryDiv = styled.div`
  margin-top: 3.125em;
`;

/*export const GalleryH1 = styled.h1`
font-size: 2.5rem;
color: #000;
margin-top: 150px;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const GalleryH2 = styled.h2`
font-size:1rem;
margin-bottom: 4px;
margin-top: 8px;
text-align: center;
color: #fff;
`

export const GalleryP = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`

export const GalleryOverlay =styled.div`
width: 150px;
height: 60px;
border-radius: 0px;
margin-top: auto;
background-color: #000;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`
*/
