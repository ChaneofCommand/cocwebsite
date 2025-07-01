import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { MdOutlineArrowDropDown } from "react-icons/md";

export const Nav = styled.nav`
  background: white;
  height: 5rem; /* Changed from 80px to rem */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  width: 100%;
  padding-top: 3rem; /* Increased from 2rem for more space */
  padding-bottom: 5rem; /* Doubled from 2.5rem for twice as much space */
  box-sizing: border-box;

  @media screen and (max-height: 46.85rem) { /* 749.6px converted to rem */
    padding-top: 2.5rem; /* Increased from 1.5rem */
    padding-bottom: 4rem; /* Doubled from 2rem */
  } 

  @media screen and (max-width: 62.5rem) { /* 1000px */
    padding-top: 2.75rem; /* Increased from 1.75rem */
    padding-bottom: 4.5rem; /* Doubled from 2.25rem */
  }

  @media screen and (max-width: 51.25rem) { /* 820px */
    padding-top: 2.5rem; /* Increased from 1.5rem */
    padding-bottom: 4rem; /* Doubled from 2rem */
  }

  @media screen and (max-width: 48rem) { /* 768px */
    position: sticky;
    width: 100%; /* Changed from 101% to 100% */
    padding-top: 2.25rem; /* Increased from 1.25rem */
    padding-bottom: 3.5rem; /* Doubled from 1.75rem */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    padding-top: 2rem; /* Increased from 1rem */
    padding-bottom: 3rem; /* Doubled from 1.5rem */
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
  width: 100%;
  box-sizing: border-box;
`;

export const Column2 = styled.div`
  grid-area: col2;
  width: 100%;
  box-sizing: border-box;
`;

export const Column3 = styled.div`
  grid-area: col3;
  width: 100%;
  box-sizing: border-box;
`;

export const Column4 = styled.div`
  grid-area: col4;
  width: 100%;
  box-sizing: border-box;
`;

export const Column5 = styled.div`
  grid-area: col5;
  width: 100%;
  box-sizing: border-box;
`;

export const NavbarContainer = styled.div`
  display: grid;
  height: 8.125rem; /* Changed from 130px to rem */
  z-index: 1;
  width: 100%;
  grid-template-columns: 5.45% 21.25% 16% 51.85% 5.45%; /* More explicit than grid-auto-columns */
  grid-template-areas: "col1 col2 col3 col4 col5";
  transform: scale(0.9);
  box-sizing: border-box;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    height: 7.5rem;
  }

  @media screen and (max-width: 48rem) { /* 768px */
    transform: scale(1);
    grid-template-columns: 6.7% 30% 26.6% 30% 6.7%;
    height: 7rem;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    height: 6.5rem;
    grid-template-columns: 5% 32% 26% 32% 5%;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    height: 6rem;
  }
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1.5rem; /* Changed from em to rem */
  font-size: clamp(1.125rem, 2vw, 1.25rem); /* Fluid typography: 18px - 20px */
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #87ceeb;
  }

  @media screen and (max-width: 48rem) { /* 768px */
    display: none;
  }
`;

export const NavItem = styled.div`
  height: 5rem; /* Changed from 80px to rem */
  font-weight: 500;
  font-size: clamp(1.25rem, 2.5vw, 1.625rem); /* Fluid typography: 20px - 26px */
  font-family: "Open Sans", sans-serif;
  white-space: nowrap;
  width: 45%;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    font-size: clamp(1.125rem, 2.5vw, 1.5rem); /* 18px - 24px */
  }

  @media screen and (max-width: 48rem) { /* 768px */
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-top: 2.75rem; /* Changed from 4.4% to rem */
  float: right;
  box-sizing: border-box;
  
  @media screen and (max-width: 62.5rem) { /* 1000px */
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 48rem) { /* 768px */
    display: none;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    margin-top: 2.25rem;
  }
`;
export const NavLink1 = styled(NavLink)`
  color: black;
  align-items: center;
  text-decoration: none;
  padding-right: 1rem;
  padding-left: 1rem;
  height: 100%;
  cursor: pointer;
  font-size: clamp(1rem, 2vw, 1.125rem); /* Fluid typography: 16px - 18px */
  max-width: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: color 0.2s ease-in-out;
  box-sizing: border-box;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    font-size: clamp(1.125rem, 2.5vw, 1.25rem); /* 18px - 20px */
  }

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #87ceeb;
  }

  &:focus {
    outline: none;
  }
`;

export const NavLink2 = styled(NavLink)`
  color: black;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
  cursor: pointer;
  font-size: clamp(1rem, 2vw, 1.125rem); /* Fluid typography: 16px - 18px */
  max-width: 100%;
  width: 100%;
  transition: color 0.2s ease-in-out;
  box-sizing: border-box;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    font-size: clamp(1.125rem, 2.5vw, 1.25rem); /* 18px - 20px */
  }

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #87ceeb;
  }

  &:focus {
    outline: none;
  }
`;

export const NavLink3 = styled(NavLink)`
  color: black;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  height: 100%;
  cursor: pointer;
  font-size: clamp(1rem, 2vw, 1.125rem); /* Fluid typography: 16px - 18px */
  max-width: 100%;
  width: 100%;
  transition: color 0.2s ease-in-out;
  box-sizing: border-box;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    font-size: clamp(1.125rem, 2.5vw, 1.25rem); /* 18px - 20px */
  }

  &:hover {
    color: #87ceeb;
  }

  &.active {
    font-weight: bold;
  }

  &:focus {
    outline: none;
  }
`;
export const NavCoCLogo = styled.img`
  height: clamp(4.375rem, 8vw, 6.25rem); /* Fluid sizing: 70px - 100px */
  margin-top: 2rem; /* Changed from % to rem */
  transition: height 0.2s ease-in-out;
  box-sizing: border-box;

  @media screen and (max-width: 62.5rem) { /* 1000px */
    height: clamp(4.375rem, 8vw, 6.25rem); /* 70px - 100px */
    margin-top: 1.75rem;
  }

  @media screen and (max-width: 48rem) { /* 768px */
    margin-top: 1.25rem;
    margin-left: 6.7%; /* Aligned with content column start */
    height: clamp(4.375rem, 10vw, 5.625rem); /* 70px - 90px */
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    margin-top: 1.25rem;
    margin-left: 6.7%; /* Aligned with content column start */
    height: clamp(4rem, 12vw, 5rem); /* 64px - 80px */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    margin-top: 1.25rem;
    margin-left: 6.7%; /* Aligned with content column start */
    height: clamp(3.5rem, 15vw, 4.375rem); /* 56px - 70px */
  }
`;

export const MobileIcon = styled.div`
  display: none;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 48rem) { /* 768px */
    display: block;
    margin-top: 2.5rem; /* Increased from 1.5rem for more space */
    margin-right: 1rem; /* Bring in from right side */
    font-size: clamp(1.5rem, 4vw, 1.8rem); /* Fluid sizing: 24px - 28.8px */
    cursor: pointer;
    color: black;
    float: right;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    display: block;
    margin-top: 2.3rem; /* Increased from 1.3rem for more space */
    margin-right: 1.25rem; /* Bring in more from right side */
    font-size: clamp(1.5rem, 4vw, 1.8rem);
    cursor: pointer;
    color: black;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    display: block;
    font-size: clamp(1.4rem, 5vw, 1.8rem);
    cursor: pointer;
    color: black;
    margin-top: 2.2rem; /* Increased from 1.2rem for more space */
    margin-right: 1.5rem; /* Bring in even more from right side */
  }

  &:hover {
    color: #87ceeb;
    transform: scale(1.1);
  }
`;

export const DropArrow = styled.div`
  color: black;
  cursor: pointer;
  font-size: clamp(1.75rem, 3vw, 2rem); /* Fluid sizing: 28px - 32px */
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #87ceeb;
    transform: scale(1.1);
  }
`;

export const DropDown = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 60%;
  left: 0;
  z-index: 5;
  box-shadow: rgba(100, 107, 100, 0.4) 0px 0.5rem 0.625rem; /* Convert to rem */
  border-radius: 0; /* Removed rounded corners */
`;

export const AnimatedDropDown = animated(DropDown);

export const DropUl = styled.div`
  width: 100%;
  float: left;
  background-color: white;
  border-radius: 0; /* Removed rounded corners */
  overflow: hidden; /* Clean edges */
  box-sizing: border-box;
`;

export const DropListItem = styled.div`
  padding: 0.75rem 1rem; /* Reduced from 2rem to more compact sizing */
  cursor: pointer;
  font-size: clamp(0.7rem, 1.2vw, 0.8rem); /* Reduced: 11.2px - 12.8px */
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  border-top: 0.0625rem solid rgb(181, 176, 176); /* Thin bottom border */

  &:hover {
    color: #87ceeb;
    transform: translateX(0.25rem); /* Subtle slide effect */
  }

  &:focus {
    font-weight: bold;
    outline: 2px solid #87ceeb;
    outline-offset: -2px;
    color: #87ceeb;
  }

  @media screen and (max-width: 48rem) { /* 768px */
    padding: 0.625rem 0.875rem; /* Reduced from 1.5rem */
    font-size: clamp(0.65rem, 1.8vw, 0.75rem); /* Reduced: 10.4px - 12px */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    padding: 0.5rem 0.75rem; /* Reduced from 1.25rem */
    font-size: clamp(0.6rem, 2.2vw, 0.7rem); /* Reduced: 9.6px - 11.2px */
  }
`;
