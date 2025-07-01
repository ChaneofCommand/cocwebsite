import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../Gallery/Slider.module.css"

export const GalleryBox = styled.div`
  max-width: 100%;
  
  &::-webkit-scrollbar {
    width: 1.25rem; /* 20px in rem */
    height: 0.3125rem; /* 5px in rem */
  }
  
  &::-webkit-scrollbar-track {
    height: 0.3125rem;
    border-radius: 0.625rem; /* 10px in rem */
  }
  
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 0.625rem;
  }
`;
export const GalleryContainer = styled.div`
  display: grid;
  width: 100%;
  transform: scale(0.9);
  grid-template-columns: 5.45% 89.1% 5.45%;
  grid-template-areas: "col1 col2 col3";
  padding-bottom: 2rem; /* Reduced from 3% to rem units for consistency */

  @media screen and (max-width: 48rem) { /* 768px */
    display: grid;
    transform: scale(1);
    padding-bottom: 1.5rem;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    display: grid;
    grid-template-columns: 6.7% 86.6% 6.7%;
    padding-bottom: 1rem;
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
  width: 100%;
`;
export const Column2 = styled.div`
  grid-area: col2;
  width: 100%;
  max-width: none; /* Ensure no max-width constraint */
  overflow: visible; /* Ensure content is not clipped */
`;
export const Column3 = styled.div`
  grid-area: col3;
  width: 100%;
`;

export const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Changed back to center for proper alignment */
  align-items: flex-start;
  gap: 0.75rem; /* Reduced from 1rem for tighter spacing */
  padding: 0;
  margin: 0;
  
  /* Ensure proper distribution of items */
  & > * {
    flex-shrink: 0; /* Prevent items from shrinking */
  }
  
  @media screen and (max-width: 64rem) { /* 1024px */
    gap: 0.625rem; /* Reduced from 0.875rem */
    justify-content: center; /* Keep centered on medium screens */
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    justify-content: center; /* Center on smaller screens for better balance */
    gap: 0.5rem; /* Reduced from 0.75rem */
  }
  
  @media screen and (max-width: 35.4375rem) { /* 567px */
    gap: 0.375rem; /* Reduced from 0.625rem */
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    gap: 0.25rem; /* Reduced from 0.5rem */
  }
  
  @media screen and (max-width: 26.25rem) { /* 420px */
    gap: 0.1875rem; /* Reduced from 0.375rem */
  }
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  display: inline-block; /* Changed from default to inline-block */
  width: auto; /* Changed from 100% to auto */
  height: auto; /* Changed from 100% to auto */
  flex-shrink: 0; /* Prevent shrinking in flex container */
  
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
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
  background-color: rgba(255, 255, 255, 0.6); /* Improved rgba syntax */
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const HoverDiv2 = styled.p`
  max-width: 9.375rem; /* 150px in rem */
  max-height: 9.375rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: black;
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Fluid typography: 16px - 20px */
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  text-decoration: none;
`;
export const CaseDiv = styled.div`
  height: 12rem; /* Reduced from 14.375rem to allow more items per row */
  width: 12rem; /* Reduced from 14.375rem to allow more items per row */
  opacity: 0;
  flex-shrink: 0;
  margin: 0; /* Ensure no extra margin */
  
  &:hover {
    opacity: 1;
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    height: 10rem;
    width: 10rem;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    height: 8rem;
    width: 8rem;
  }
  
  @media screen and (max-width: 26.25rem) { /* 420px */
    height: 7rem;
    width: 7rem;
  }
`;

export const GalleryDiv = styled.div`
  margin-top: 0.5rem; /* Further reduced from 1rem to eliminate excessive whitespace */
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
