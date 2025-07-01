import styled from "styled-components";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Heading = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.3125rem); /* Fluid: 24px - 37px */
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  width: 100%;
  max-width: 100%;
  margin-top: clamp(0, 2vh, 1.25rem); /* Responsive top margin */
  line-height: 1.2;
  box-sizing: border-box;
  overflow-wrap: break-word;

  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: clamp(1.25rem, 5vw, 1.75rem); /* 20px - 28px */
    margin-top: clamp(0.5rem, 3vh, 1.5rem);
  }
`;
export const Underline = styled.hr`
  border: none;
  border-top: 0.125rem solid black; /* 2px */
  width: 100%;
  max-width: 100%;
  margin: clamp(0.5rem, 2vh, 1.25rem) 0 clamp(0.5rem, 2vh, 1rem) 0;
  box-sizing: border-box;

  @media screen and (max-width: 48rem) { /* 768px */
    margin: clamp(0.75rem, 3vh, 1.5rem) 0 clamp(1rem, 4vh, 2rem) 0;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    margin: clamp(0.5rem, 2vh, 1rem) 0;
  }
`;
export const DataContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;
  height: auto;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); /* Responsive grid */
  gap: clamp(1rem, 3vw, 2rem); /* Fluid gap */
  padding: clamp(0.5rem, 2vw, 1.5rem);
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 48rem) { /* 768px */
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    gap: clamp(0.75rem, 2.5vw, 1.5rem);
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    grid-template-columns: 1fr;
    gap: clamp(0.5rem, 2vw, 1rem);
    padding: clamp(0.5rem, 1vw, 1rem);
  }
`;

export const DataDiv = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-sizing: border-box;
  overflow-wrap: break-word;
`;

export const BoldH1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: clamp(1rem, 2.5vw, 1.375rem); /* Fluid: 16px - 22px */
  line-height: 1.3;
  margin: 0 0 0.5rem 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
`;

export const DataH1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(0.875rem, 2.2vw, 1.25rem); /* Fluid: 14px - 20px */
  font-weight: normal;
  line-height: 1.4;
  margin: 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
`;
export const Underline2 = styled.hr`
  border: none;
  border-top: 0.125rem solid black; /* 2px */
  width: 100%;
  margin: clamp(2rem, 5vh, 4rem) 0 clamp(1rem, 3vh, 2rem) 0;
  display: none;

  @media screen and (max-width: 48rem) { /* 768px */
    display: block;
  }
`;

export const Underline2b = styled.hr`
  border: none;
  border-top: 0.125rem solid black; /* 2px */
  width: 100%;
  margin: clamp(2rem, 6vh, 5rem) 0 clamp(1rem, 3vh, 2rem) 0;

  @media screen and (max-width: 48rem) { /* 768px */
    margin: clamp(1.5rem, 4vh, 3rem) 0 clamp(0.75rem, 2vh, 1.5rem) 0;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    margin: clamp(2rem, 8vh, 4rem) 0 clamp(1rem, 3vh, 2rem) 0;
  }
`;
export const Subtitle2 = styled.p`
  width: 100%;
  max-width: 100%;
  line-height: 1.6;
  font-size: clamp(1rem, 2.8vw, 1.375rem); /* Fluid: 16px - 22px */
  margin-bottom: clamp(1rem, 3vh, 2rem);
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  overflow-wrap: break-word;

  @media screen and (max-width: 48rem) { /* 768px */
    line-height: 1.5;
  }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  max-width: 100%;
  cursor: pointer;
  max-height: clamp(20rem, 40vh, 30.4rem); /* Fluid max height */
  height: auto;
  object-fit: cover;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 0; /* Removed rounded corners */
  box-sizing: border-box;

  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  }
`;

export const ImageWrapper2 = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  max-height: clamp(18rem, 35vh, 30rem); /* Fluid max height */
  object-fit: cover;
  border-radius: 0; /* Removed rounded corners */
  box-sizing: border-box;

  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  }
`;

export const ImageWrapper3 = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  max-height: clamp(20rem, 40vh, 30.4rem); /* Fluid max height */
  object-fit: cover;
  border-radius: 0; /* Removed rounded corners */
  box-sizing: border-box;

  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  }
`;

export const ImageWrapper4 = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  max-height: clamp(20rem, 40vh, 30.4rem); /* Fluid max height */
  object-fit: cover;
  border-radius: 0; /* Removed rounded corners */
  box-sizing: border-box;

  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  }
`;
export const PhotoBackWrap = styled.div`
  width: 100%;
  height: auto;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: clamp(2rem, 8vw, 8rem) minmax(0, 1fr) clamp(2rem, 8vw, 8rem);
  grid-template-areas: "col1 col2 col3";
  width: 100%;
  height: auto;
  margin: clamp(3rem, 6vh, 4rem) 0 clamp(1rem, 3vh, 2rem) 0; /* Added top margin */
  box-sizing: border-box;

  @media screen and (max-width: 48rem) { /* 768px */
    grid-template-columns: clamp(1rem, 6vw, 4rem) minmax(0, 1fr) clamp(1rem, 6vw, 4rem);
    margin: clamp(2rem, 4vh, 3rem) 0 clamp(0.5rem, 2vh, 1rem) 0;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    grid-template-columns: 1.5rem minmax(0, 1fr) 1.5rem;
    margin: clamp(1.5rem, 3vh, 2rem) 0 clamp(0.5rem, 1vh, 1rem) 0;
  }
`;
export const PhotoDiv = styled.div`
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: clamp(2rem, 10vw, 10rem) minmax(0, 1fr) clamp(2rem, 10vw, 10rem);
  grid-template-areas: 'col1A col2A col3A';
  width: 100%;
  height: auto;
  min-height: 20vh;
  box-sizing: border-box;
  padding: clamp(2rem, 8vh, 6rem) 0;
  margin: clamp(3rem, 6vh, 4rem) 0 clamp(1rem, 3vh, 2rem) 0; /* Added top margin */

  @media screen and (max-width: 48rem) { /* 768px */
    grid-template-columns: clamp(1rem, 8vw, 6rem) minmax(0, 1fr) clamp(1rem, 8vw, 6rem);
    padding: clamp(1.5rem, 6vh, 4rem) 0;
    margin: clamp(2rem, 4vh, 3rem) 0 clamp(1rem, 3vh, 2rem) 0;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'col2A';
    padding: clamp(1rem, 4vh, 2rem) 1rem;
    margin: clamp(1.5rem, 3vh, 2rem) 0 clamp(0.5rem, 2vh, 1rem) 0;
  }
`;
export const AboutWrapper2 = styled.div`
  display: grid;
  grid-template-columns: clamp(2rem, 12vw, 12rem) minmax(0, 1fr) clamp(2rem, 12vw, 12rem);
  grid-template-areas: "col1 col2 col3";
  width: 100%;
  height: auto;
  margin: clamp(3rem, 6vh, 4rem) 0 clamp(1rem, 3vh, 2rem) 0; /* Added top margin */
  box-sizing: border-box;

  @media screen and (max-width: 48rem) { /* 768px */
    grid-template-columns: clamp(1rem, 8vw, 6rem) minmax(0, 1fr) clamp(1rem, 8vw, 6rem);
    margin: clamp(2rem, 4vh, 3rem) 0 clamp(0.5rem, 2vh, 1rem) 0;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    grid-template-columns: 1.5rem minmax(0, 1fr) 1.5rem;
    margin: clamp(1.5rem, 3vh, 2rem) 0 clamp(0.5rem, 1vh, 1rem) 0;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 1rem);
`;

export const AboutContainer3 = styled.div`
  width: 100%;
  margin: clamp(2rem, 6vh, 4rem) 0;
  background-color: black;
  height: auto;
  padding: clamp(1rem, 3vh, 2rem) 0;
`;

export const ColumnA1 = styled.div`
  grid-area: col1;
  width: 100%;
`;

export const ColumnA2 = styled.div`
  grid-area: col2;
  width: 100%;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.85);
  color: black;
  padding: clamp(1rem, 3vw, 2rem);
  border-radius: 0.5rem;
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  overflow-wrap: break-word;
`;

export const ColumnA2B = styled.div`
  grid-area: col2;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(1rem, 3vw, 2rem);
  box-sizing: border-box;
`;

export const ColumnA3 = styled.div`
  grid-area: col3;
  width: 100%;
`;
export const Subtitle = styled.p`
  max-width: 68.75rem; /* 1100px */
  font-size: clamp(1rem, 3vw, 1.5rem); /* Fluid: 16px - 24px */
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  margin: clamp(1rem, 3vh, 2rem) 0;

  @media screen and (max-width: 48rem) { /* 768px */
    line-height: 1.5;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    max-width: 70%;
  }
`;

export const Databox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  width: 100%;
  height: auto;

  @media screen and (max-width: 31.25rem) { /* 500px */
    grid-template-columns: 1fr;
    gap: clamp(0.75rem, 2vw, 1rem);
  }
`;
export const Column1 = styled.div`
  grid-area: col1A;
  width: 100%;
`;

export const Column1b = styled.div`
  grid-area: col1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 1rem);
`;

export const Column2 = styled.div`
  grid-area: col2A;
  width: 100%;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  padding: clamp(1rem, 4vw, 3rem);
  border-radius: 0.5rem;
  backdrop-filter: blur(8px);
  overflow-wrap: break-word;
`;

export const Column3 = styled.div`
  grid-area: col3A;
  width: 100%;
`;

export const Datasub = styled.h2`
  font-size: clamp(0.875rem, 3vw, 1.625rem); /* Fluid: 14px - 26px */
  font-family: 'Open Sans', sans-serif;
  color: black;
  width: 100%;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`;

export const Datasub2 = styled.h2`
  font-size: clamp(0.875rem, 3vw, 1.625rem); /* Fluid: 14px - 26px */
  font-family: 'Open Sans', sans-serif;
  color: black;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`;

export const Datasub3 = styled.h2`
  font-size: clamp(0.875rem, 3vw, 1.625rem); /* Fluid: 14px - 26px */
  font-family: 'Open Sans', sans-serif;
  color: black;
  padding-top: clamp(0.75rem, 2vw, 1.25rem);
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`;

export const Datasub4 = styled.h2`
  font-size: clamp(0.875rem, 3vw, 1.625rem); /* Fluid: 14px - 26px */
  font-family: 'Open Sans', sans-serif;
  color: black;
  padding-top: clamp(0.75rem, 2vw, 1.25rem);
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`;
export const Dataspan = styled.span`
  font-weight: normal;
  font-size: clamp(0.875rem, 3vw, 1.625rem); /* Fluid: 14px - 26px */
  text-transform: uppercase;
  line-height: 1.3;
`;

export const Imagebox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(0.25rem, 1vw, 0.5rem); /* Decreased gap */
  padding: clamp(0.25rem, 1vw, 0.5rem); /* Decreased padding */
  box-sizing: border-box;
  overflow: hidden;
`;

export const Image = styled.img`
  width: clamp(10rem, 25vw, 14.5625rem); /* Fluid: 160px - 233px */
  height: clamp(10rem, 25vw, 14.5625rem); /* Fluid: 160px - 233px */
  cursor: pointer;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  object-fit: cover;
  border-radius: 0; /* Removed rounded corners */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 48rem) { /* 768px */
    width: clamp(9rem, 22vw, 13.3125rem); /* 144px - 213px */
    height: clamp(9rem, 22vw, 13.3125rem);
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    width: clamp(8rem, 40vw, 12.75rem); /* 128px - 204px */
    height: clamp(8rem, 40vw, 12.75rem);
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    width: clamp(7rem, 35vw, 10.125rem); /* 112px - 162px */
    height: clamp(7rem, 35vw, 10.125rem);
  }
`;

export const ZoomImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Lightbox = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
  }

  &[data-open="true"] {
    visibility: visible;
    opacity: 1;
  }
`;

export const Forward = styled.div`
  color: white;
  font-size: clamp(2.5rem, 6vw, 4rem); /* Fluid: 40px - 64px */
  position: absolute;
  top: 50%;
  right: clamp(2rem, 5vw, 4.5rem);
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-50%) scale(1.1);
  }

  &:focus {
    outline: 0.125rem solid white;
    outline-offset: 0.25rem;
  }
`;

export const Back = styled.div`
  color: white;
  font-size: clamp(2.5rem, 6vw, 4rem); /* Fluid: 40px - 64px */
  position: absolute;
  top: 50%;
  left: clamp(2rem, 5vw, 4rem);
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-50%) scale(1.1);
  }

  &:focus {
    outline: 0.125rem solid white;
    outline-offset: 0.25rem;
  }
`;

export const Close = styled.div`
  color: white;
  font-size: clamp(2rem, 4vw, 3rem); /* Fluid: 32px - 48px */
  position: absolute;
  top: clamp(1.5rem, 3vw, 2.5rem);
  right: clamp(1.5rem, 3vw, 2.5rem);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }

  &:focus {
    outline: 0.125rem solid white;
    outline-offset: 0.25rem;
  }
`;

export const Ratio = styled.div`
  color: white;
  font-size: clamp(1.25rem, 2.5vw, 1.5rem); /* Fluid: 20px - 24px */
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  bottom: clamp(1.5rem, 3vw, 2.5rem);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  &:focus {
    outline: none;
  }
`;

export const PressLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  gap: clamp(0.5rem, 2vw, 1rem);
`;

export const PLBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  padding-bottom: clamp(0.5rem, 1vw, 1rem);
  flex-wrap: wrap;

  @media screen and (max-width: 31.25rem) { /* 500px */
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LinkHeader = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: clamp(1rem, 2.5vw, 1.375rem); /* Fluid: 16px - 22px */
  margin: 0;
  line-height: 1.3;
`;

export const PLink = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.375rem); /* Fluid: 16px - 22px */
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
`;
export const PA = styled.a`
  color: black;
  text-transform: lowercase;
  font-weight: normal;
  font-size: clamp(0.875rem, 2.2vw, 1.25rem); /* Fluid: 14px - 20px */
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  line-height: 1.4;

  &:hover {
    color: #666;
    text-decoration: underline;
  }

  &:focus {
    outline: 0.125rem solid #87ceeb;
    outline-offset: 0.125rem;
  }
`;

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: clamp(25rem, 50vh, 31.25rem); /* Fluid height: 400px - 500px */
  width: 100%;
  max-width: 100%;
  margin-top: clamp(2rem, 5vh, 3rem);
  gap: clamp(1rem, 3vw, 2rem);
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 48rem) { /* 768px */
    flex-direction: column;
    height: auto;
    gap: clamp(1.5rem, 4vh, 2rem);
  }
`;

export const PlayerWrapperSolo = styled.div`
  display: flex;
  flex-direction: row;
  height: clamp(25rem, 50vh, 31.25rem); /* Fluid height: 400px - 500px */
  width: 100%;
  max-width: 100%;
  margin-top: clamp(2rem, 5vh, 3rem);
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 48rem) { /* 768px */
    flex-direction: column;
    height: auto;
  }
`;

export const PlayerDiv = styled.div`
  width: 48.75%;
  max-width: 48.75%;
  height: 100%;
  border-radius: 0; /* Removed rounded corners */
  overflow: hidden;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  @media screen and (max-width: 48rem) { /* 768px */
    width: 100%;
    max-width: 100%;
    height: clamp(18rem, 35vh, 25rem);
  }
`;

export const PlayerDivSolo = styled.div`
  width: 60%;
  max-width: 60%;
  height: 100%;
  border-radius: 0; /* Removed rounded corners */
  overflow: hidden;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  @media screen and (max-width: 48rem) { /* 768px */
    width: 100%;
    max-width: 100%;
    height: clamp(20rem, 40vh, 31.25rem);
  }
`;