import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: white;
font-family: Open Sans:
transition: 0.33s ease-in-out:
opacity:${({ isOpen }) => (isOpen ? "100%" : "0")};
top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

@media screen and (min-width: 769px) and (max-width: 999999px) {
   display: none;  /* hide it on larger screens */
}

`;
export const NavbarContainer = styled.div`
  display: grid;
  height: 120px;
  z-index: 999;
  width: 100%;
  position: fixed;
  margin-top: -1.5%;
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col2 col3 col4 col5";
    grid-auto-columns: 6.7% 30% 26.6% 27.75% 9.15%;
  }

  @media screen and (max-width: 500px) {
    margin-top: -15.8%;
    margin-left:0.5%;
  }
  @media screen and (max-width: 420px) {
    margin-top: -5em;
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
export const CloseIcon = styled(FaTimes)`
  color: black;

  font-size: 30px;
`;
export const Icon = styled.div`
font-size: 2rem;
cusror: pointer;
margin-top:.8em;
float:right;
width:27px;

@media screen and (max-width: 500px){
margin-top:32%;
float:none;
margin-left:74%;
}
@media screen and (max-width: 420px){
margin-top:40%;
margin-left:66%;
@media screen and (max-width: 380px){

}
`;
export const TopContainer = styled.div`
  width: 100%;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  color: #fff;
  margin-top: 1.75em;
  display: grid;
  justify-items: center;
  grid-template-areas: "col1 col2 col3";
  grid-auto-columns: 6.7% 84.15% 9.15%;
  @media screen and (width: 428px) {
  }
  @media screen and (max-width: 420px) {
  }
`;
export const SidebarMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5.25%;
  text-align: center;
  @media screen and (max-width: 480px) {
  }
`;

export const Underline = styled.hr`
border: 1px solid black;
margin-left: -5.9375em;
width: 60%;
margin-top -1.875em;


`;

export const SidebarLink = styled(Link)`
display:flex;


margin-top:5.25%;
text-decoration:none;
font-size:1.75rem;

transition: 0.2s ease-in-out;
color: black;
cursor: pointer;
font-family:Open Sans;

&:hover {
    transition: 0.2s ease-in-out:
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.9375em;
`;
export const SidebarRoute = styled(Link)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 1em 4em;
color: #010606;
font-size: 20px;
outline: none;
border: none;
cursor: pointer;
transiton: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transition all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;

export const NavCoCLogo = styled.img`
  height: 90px;
  margin-left: -0.4%;
  margin-top:0.5%;
  @media screen and (max-width: 500px) {
    height: 80px;
    margin-top: 1.75em;
    margin-left: -1%;
    transform: scale(1.02);
  }
  @media screen and (max-width: 420px) {
    height: 70px;
    transform: scale(0.99);
  }

  @media screen and (max-width: 380px) {
  }
`;

export const Nav = styled.nav`
  background: white;
  height: 175px;
  margin-top: -0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  max-width: 100%;

  @media screen and (max-width: 1000px) {
    transition: 0.8s all ease;
    height: 175px;
  }

  @media screen and (max-width: 500px) {
  }
`;
