import React from "react";
import Decal2 from "../../Images/Decal2.png";
import styled from "styled-components";

export const AboutContainer = styled.div`
  box-display: border-box;
  max-width: 100%;
  height: auto;
  margin-top: 2rem; /* Reduced by a third from 3rem */

  @media screen and (max-width: 62.5rem) { /* 1000px */
    margin-top: 1.67rem; /* Reduced by a third from 2.5rem */
  }

  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 0; /* No margin for mobile */
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  margin-bottom: 3%;
  transform: scale(0.9);
  margin-top: 0; /* Removed negative margin */
 
  @media screen and (max-width: 62.5rem) { /* 1000px */
    width: 100%;
    height: auto;
    margin-top: 0;
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 0;
    transform: scale(1);
  }
`;

export const AboutRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 5.45% 37.25% 15.35% 36.5% 5.45%;
  grid-template-areas: "col1 col2 col3 col4 col5";

  @media screen and (max-width: 62.5rem) { /* 1000px */
    grid-template-areas: "col1 col2 col5" "col1 col4 col5";
    grid-template-columns: 5.45% 60% 20%;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    grid-template-areas: "col1 col2 col5" "col1 col4 col5";
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
  font-size: clamp(1.869rem, 4vw, 2.75rem); /* Fluid typography with reduced shrinking */
  font-family: 'Open Sans', sans-serif;
  color: black;
  font-weight: normal;
  margin-left: 1%;

  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 4.6%;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    margin-top: 6.1%;
  }
`;

export const Underline = styled.hr`
  border: 1px solid black;
  margin-left: 0;
  width: clamp(32.2%, 10.58vw + 19.55%, 51.75%); /* Fluid width with 15% increase */
  margin-top: -1.875rem;

  @media screen and (max-width: 78.125rem) { /* 1250px */
    margin-top: -1.125rem;
  }
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    margin-top: -1.125rem;
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: -1.125rem;
  }
`;
export const FormContainer = styled.form`
  margin-top: 1.875rem;
  width: 100%;

  @media screen and (max-width: 48rem) { /* 768px */
    font-size: 0.875rem; /* 14px in rem */
    width: 100%;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    font-size: 0.875rem;
    width: 100%;
  }
  
  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: 0.875rem;
  }
`;
export const FirstLastContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'col1 col2';
`;

export const FirsCol = styled.div`
  grid-area: col1;
`;

export const LastCol = styled.div`
  grid-area: col2;
`;

export const FormLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
`;

export const LastNameLabel = styled.label`
  margin-left: 1rem;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 48rem) { /* 768px */
    margin-left: 1.05rem;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    margin-left: 0.75rem;
  }
`;
export const FirstInput = styled.input`
  width: 95%;
  padding: 0.85rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875rem;
  margin-bottom: 0.5rem;
  resize: vertical;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

export const LastInput = styled.input`
  width: 95%;
  float: right;
  padding: 0.85rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875rem;
  margin-bottom: 0.5rem;
  resize: vertical;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    margin-left: 1.25rem;
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    margin-left: 0.9375rem;
  }
  
  @media screen and (max-width: 26.25rem) { /* 420px */
    margin-left: 0.75rem;
  }
`;
export const GeneralInput = styled.input`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875rem;
  margin-bottom: 0.5rem;
  resize: vertical;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

export const MessageArea = styled.textarea`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875rem;
  margin-bottom: 0.5rem;
  resize: vertical;
  height: 6.25rem; /* 100px in rem */
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

export const SubButton = styled.input`
  background-color: black;
  color: white;
  padding: 0.85rem 1.25rem;
  border: none;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
`;

export const InfoContainer = styled.div`
  margin-top: 13%;
  margin-left: 22%;

  @media screen and (max-width: 78.125rem) { /* 1250px */
    margin-left: 7%;
  }
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    margin-left: 0;
  }

  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 6rem;
    float: left;
  }
`;
export const Infoh1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1.25rem, 3vw, 1.875rem); /* Fluid typography: 20px - 30px */
  
  @media screen and (max-width: 48rem) { /* 768px */
    font-size: clamp(1.5rem, 2.5vw, 1.875rem); /* 24px - 30px */
  }
`;

export const Infoh2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1.25rem, 3vw, 1.875rem); /* Fluid typography: 20px - 30px */
  font-weight: normal;
  
  @media screen and (max-width: 48rem) { /* 768px */
    font-size: clamp(1.5rem, 2.5vw, 1.875rem); /* 24px - 30px */
  }
`;
export const DecalImg = styled.img`
  height: min(26.25rem, 60vh); /* Responsive height: max 420px or 60% viewport */
  width: min(18.75rem, 80vw); /* Responsive width: max 300px or 80% viewport */
  margin-top: 29.5%;
  margin-left: 140%;
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    display: none;
  }
`;
export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 62.5rem) { /* 1000px */
    grid-template-columns: 20% 40%;
    font-size: 1.25rem; /* 20px in rem */
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    font-size: 1rem; /* 16px in rem */
    grid-template-columns: 30% 60%;
  }
  
  @media screen and (max-width: 26.75rem) { /* 428px */
    font-size: 1rem;
    grid-template-columns: 30% 60%;
  }
  
  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: 1rem;
    grid-template-columns: 25% 60%;
  }
`;
export const DecalCol = styled.div`
  grid-area: col1;
`;

export const DataCol = styled.div`
  grid-area: col2;
`;

export const DecalContainer = styled.div`
  display: flex;
  justify-content: center;
`;
