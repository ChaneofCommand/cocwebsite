import styled from "styled-components";
import Win from "../../Images/Winifred.JPG";

export const AboutContainer = styled.div`
  max-width: 100%;
  margin-top: 2rem; /* Reduced by a third from 3rem */
  padding-bottom: 4rem;
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    max-width: auto;
    box-sizing: border-box;
    margin-top: 1.67rem; /* Reduced by a third from 2.5rem */
  }

  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 0; /* No margin for mobile */
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  transform: scale(0.9);
  margin-top: 0; /* Removed negative margin */
  height: auto;
  width: auto;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    max-width: 100%;
    margin-top: 0;
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    transform: scale(1);
    height: auto;
    margin-top: 0;
    padding: 0;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-template-columns: 5.45% 44.55% 6.7% 37.85% 5.45%;
  grid-template-areas: "col1 col2 col3 col4 col5";

  @media screen and (max-width: 48rem) { /* 768px */
    grid-template-areas: 
      "col1 col2 col5" 
      "col1 col4 col5";
    grid-template-columns: 6.7% 86.6% 6.7%;
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
  width: 100%;
`;
export const Column2 = styled.div`
  grid-area: col2;
  width: 100%;
`;
export const Column3 = styled.div`
  grid-area: col3;
  width: 100%;
`;
export const Column4 = styled.div`
  grid-area: col4;
  width: 100%;
`;

export const Column5 = styled.div`
  grid-area: col5;
  width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  margin-top: -1.875rem;

  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 0;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.869rem, 4vw, 2.75rem); /* Reduced shrinking: was 1.625rem, now 1.869rem (15% less shrinking) */
  font-family: 'Open Sans', sans-serif;
  color: black;
  font-weight: 400;
  margin-left: 1%;
  
  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 4.6%;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    margin-top: 6.1%;
  }
`;

export const Subtitle = styled.p`
  max-width: 100%;
  font-size: clamp(1.15rem, 2.5vw, 1.5rem); /* Reduced shrinking: was 1rem, now 1.15rem (15% less shrinking) */
  font-family: 'Open Sans', sans-serif;
  color: black;
  margin-top: 0.83em;
  line-height: 1.5;
 
  @media screen and (max-width: 48rem) { /* 768px */
    line-height: 1.67; /* 30px line height for 18px font */
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    margin-top: 2.5rem;
  }
  
  @media screen and (max-width: 53.125rem) { /* 850px */
    margin-top: 6rem;
  }

  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 1.5625rem;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    margin-left: 0;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  height: min(33.75rem, 60vh); /* Reduced to 20% height increase from original */
  width: min(25rem, 90vw); /* Original width maintained */
  margin-top: 1rem;
  object-position: center -3rem;
  background-repeat: no-repeat;
`;
export const Underline = styled.hr`
  border: 1px solid black;
  width: clamp(28.75%, 9.2vw + 17.25%, 57.5%); /* Increased by 15%: was 25%-50%, now 28.75%-57.5% */
  margin-top: -1.875rem;
  margin-left: 0;
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    margin-top: -1.125rem;
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: -1.125rem;
  }
`;
