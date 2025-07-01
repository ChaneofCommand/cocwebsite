import styled from 'styled-components';
import {Link} from 'react-router-dom' ;
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 30%; /* Fixed 30% width as requested */
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  font-family: 'Open Sans', sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgba(100, 107, 100, 0.4) 0px 0.5rem 0.625rem;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};

  @media screen and (min-width: 48.0625rem) { /* 769px */
    display: none;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    width: 35%; /* Slightly wider on smaller screens for usability */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    width: 40%; /* Even wider on very small screens */
  }

  @media screen and (max-height: 31.25rem) { /* 500px height */
    width: 25%; /* Narrower on short screens */
  }
`

export const CloseIcon = styled(FaTimes)`
  color: black;
  font-size: clamp(1.375rem, 4vw, 1.875rem); /* Fluid sizing: 22px - 30px */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0; /* Prevent shrinking */
  margin-left: auto; /* Push to the right but respect container padding */
  margin-right: 1.5rem; /* Increased margin from the right edge */

  &:hover {
    color: #87ceeb;
    transform: scale(1.1);
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    font-size: clamp(1.25rem, 4vw, 1.5rem); /* 20px - 24px */
    margin-right: 1.5rem;
  }

  @media screen and (max-height: 31.25rem) { /* 500px height */
    font-size: clamp(1.375rem, 4vw, 1.5625rem); /* 22px - 25px */
    margin-right: 1.25rem;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    font-size: clamp(1.25rem, 3.5vw, 1.5rem);
    margin-right: 1.5rem;
  }
`;
export const Icon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  margin-top: 1rem; /* Reduced and converted to rem */
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Align to right */
  box-sizing: border-box;

  @media screen and (max-width: 31.25rem) { /* 500px */
    margin-top: 1.125rem;
  }

  @media screen and (max-height: 31.25rem) { /* 500px height */
    margin-top: 0.875rem;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    margin-top: 1.25rem;
  }
`;
export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4rem; /* Give it sufficient height to contain the close icon */
  display: flex;
  justify-content: flex-start; /* Changed from flex-end */
  align-items: center;
  padding: 0.5rem; /* Simplified padding */
  flex-shrink: 0; /* Prevent shrinking */
  box-sizing: border-box; /* Ensure padding is included in width */

  @media screen and (max-width: 31.25rem) { /* 500px */
    height: 4.25rem;
    padding: 0.5rem;
  }

  @media screen and (max-height: 31.25rem) { /* 500px height */
    height: 3.75rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    height: 4.5rem;
    padding: 0.5rem;
  }
`

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 0;
`
export const SidebarMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: clamp(3rem, 8vh, 5rem); /* Reduced top margin */
  flex: 1;
  
  @media screen and (max-height: 31.25rem) { /* 500px height */
    margin-top: clamp(2rem, 6vh, 3rem);
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    margin-top: clamp(2.5rem, 7vh, 4rem);
  }
`

export const Underline = styled.hr`
  border: none;
  border-top: 0.0625rem solid #e0e0e0; /* 1px */
  width: 80%;
  margin: 1rem auto;
  opacity: 0.6;
`

export const SidebarLink = styled(Link)`
  display: flex;
  width: 100%;
  font-size: clamp(1rem, 3.5vw, 1.375rem); /* Fluid sizing: 16px - 22px */
  line-height: 1.4;
  color: #333;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  min-height: 2.75rem; /* Touch-friendly minimum */
  padding: 0.5rem 1rem; /* Reduced padding */
  text-decoration: none;
  border-bottom: 0.0625rem solid #f0f0f0; /* 1px */
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover,
  &:focus {
    background-color: #f8f9fa;
    color: #000;
    outline: none;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 0.125rem #87ceeb; /* 2px */
  }

  &:active {
    background-color: #e9ecef;
    transform: translateY(0.0625rem); /* 1px */
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    font-size: clamp(0.875rem, 3vw, 1.125rem); /* 14px - 18px */
    min-height: 2.5rem;
    padding: 0.4375rem 0.875rem; /* Reduced padding */
  }

  @media screen and (max-height: 31.25rem) { /* 500px height */
    font-size: clamp(0.9375rem, 3.2vw, 1.1875rem); /* 15px - 19px */
    min-height: 2.25rem;
    padding: 0.375rem 0.75rem; /* Reduced padding */
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    padding: 0.375rem 0.75rem; /* Reduced padding */
  }
`
export const SidebarDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 1rem;
  margin-top: auto; /* Push to bottom */
  border-top: 0.0625rem solid #f0f0f0; /* 1px */
`
export const SidebarRoute = styled(Link)`
  border-radius: clamp(1.5rem, 4vw, 3.125rem); /* Fluid border radius */
  background: #01bf71;
  white-space: nowrap;
  padding: clamp(0.875rem, 3vw, 1rem) clamp(2rem, 5vw, 4rem); /* Fluid padding */
  color: #010606;
  font-size: clamp(0.875rem, 3vw, 1.25rem); /* Fluid font size */
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  min-height: 2.75rem; /* Touch-friendly */
  
  &:hover,
  &:focus {
    background: #00a05d;
    color: #fff;
    transform: translateY(-0.0625rem); /* 1px lift */
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 0.125rem #87ceeb, 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); /* 2px */
  }

  &:active {
    transform: translateY(0);
    background: #009954;
  }

  @media screen and (max-width: 31.25rem) { /* 500px */
    padding: clamp(0.75rem, 2.5vw, 0.875rem) clamp(1.5rem, 4vw, 2.5rem);
    font-size: clamp(0.8125rem, 2.8vw, 1rem); /* 13px - 16px */
    min-height: 2.5rem;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem; /* 14px */
  }
`

export const NavCoCLogo = styled.img`
  height: clamp(4rem, 8vw, 5rem); /* Fluid height: 64px - 80px */
  width: auto;
  margin: 1rem auto;
  display: block;
  object-fit: contain;

  @media screen and (max-width: 31.25rem) { /* 500px */
    height: clamp(3.5rem, 7vw, 4.5rem); /* 56px - 72px */
    margin: 0.875rem auto;
  }

  @media screen and (max-height: 31.25rem) { /* 500px height */
    height: clamp(3rem, 6vw, 4rem); /* 48px - 64px */
    margin: 0.75rem auto;
  }

  @media screen and (max-width: 26.25rem) { /* 420px */
    height: clamp(3.25rem, 6.5vw, 4rem); /* 52px - 64px */
    margin: 0.75rem auto;
  }
`