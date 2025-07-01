import styled from "styled-components";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background-color: white;
  width: 100%;
  box-sizing: border-box;
`;

export const FooterWrap = styled.div`
  padding-top: 1.5rem; /* Changed from em to rem */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem; /* Changed from % to rem for consistency */
  transform: scale(0.9);
  box-sizing: border-box;

  @media screen and (max-width: 48rem) { /* 768px in rem */
    transform: scale(1);
    padding-top: 1.25rem;
  } 
  
  @media screen and (max-width: 26.25rem) { /* 420px in rem */
    width: 100%;
    padding-top: 1rem;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 6.2% 36.5% 10% 41.1% 6.2%; /* More explicit than grid-auto-columns */
  grid-template-areas: 'col1 col2 col3 col4 col5';
  gap: 0.5rem; /* Added gap for better spacing */
  box-sizing: border-box;

  @media screen and (max-width: 48rem) { /* 768px */
    grid-template-columns: 6.7% 50% 6.6% 30% 6.7%;
    gap: 0.375rem;
  }

  @media screen and (max-width: 31.25rem) { /* 500px - Added intermediate breakpoint */
    grid-template-columns: 5% 45% 10% 35% 5%;
    gap: 0.25rem;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    grid-template-columns: 2% 48% 0% 48% 2%; /* Simplified for small screens */
    grid-template-areas: 'col1 col2 col3 col4 col5';
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


export const FooterLinkItems = styled.div`
  box-sizing: border-box;
  width: 100%;
  
  @media screen and (max-width: 26.25rem) { /* 420px - Fixed syntax */
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  margin-bottom: 1rem; /* Changed from em to rem */
  font-size: clamp(0.875rem, 2vw, 1.125rem); /* Fluid typography: 14px - 18px */
  font-weight: 100;
  font-family: "Open Sans", sans-serif;
  line-height: 1.4; /* Added line-height for better readability */
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    font-size: clamp(0.875rem, 2vw, 1rem); /* 14px - 16px */
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    font-size: clamp(0.875rem, 2.5vw, 1rem); /* 14px - 16px */
    margin-bottom: 0.875rem;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: clamp(0.875rem, 3vw, 1rem); /* 14px - 16px */
    margin-bottom: 0.75rem;
  }
`;

export const Footerh2 = styled.h2`
  font-size: clamp(0.875rem, 1.5vw, 0.875rem); /* Fluid typography: 14px */
  float: right;
  margin: 0; /* Reset default margin */
  line-height: 1.4;
  font-family: "Open Sans", sans-serif;

  @media screen and (max-width: 48rem) { /* 768px */
    font-size: clamp(0.8125rem, 2vw, 0.875rem); /* 13px - 14px */
    float: none; /* Remove float on smaller screens */
    text-align: center;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: clamp(0.75rem, 2.5vw, 0.875rem); /* 12px - 14px */
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: clamp(1.5rem, 3vw, 1.875rem); /* Fluid sizing: 24px - 30px */
  transition: all 0.2s ease-in-out;
  color: #000; /* Neutral black color */

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #87ceeb; /* Sky blue hover color */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: clamp(1.25rem, 4vw, 1.5rem); /* 20px - 24px */
  }
`; 

export const Insta = styled(FaInstagram)`
  font-size: clamp(1.5rem, 3vw, 1.875rem); /* Fluid sizing: 24px - 30px */
  transition: all 0.2s ease-in-out;
  color: #000; /* Neutral black color */

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #87ceeb; /* Sky blue hover color */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: clamp(1.25rem, 4vw, 1.5rem); /* 20px - 24px */
  }
`; 

export const Github = styled(FaGithub)`
  font-size: clamp(1.5rem, 3vw, 1.875rem); /* Fluid sizing: 24px - 30px */
  transition: all 0.2s ease-in-out;
  color: #000; /* Neutral black color */

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #87ceeb; /* Sky blue hover color */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: clamp(1.25rem, 4vw, 1.5rem); /* 20px - 24px */
  }
`;    

export const Anchor = styled.a`
  text-decoration: none;
  color: #000;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: #01bf71; /* Add hover effect to links */
  }
  
  &:focus {
    outline: 2px solid #01bf71; /* Add focus state for accessibility */
    outline-offset: 2px;
  }
`;