import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { MdOutlineArrowDropDown } from "react-icons/md";
export const Nav = styled.nav`
background: white;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
top:0;
z-index: 10;
width:100%;
padding-top:2%;
padding-bottom:3.1%;

@media screen and (max-height: 749.6px)
   
} 
@media screen and (max-width: 1000px){

}

@media screen and (max-width: 820px) {

}


@media screen and (max-width: 768px) {
    position:sticky;
    width:101%;
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
export const NavbarContainer = styled.div`
  display: grid;
  height: 130px;
  z-index: 1;
  width: 100%;

  grid-auto-columns: 5.45% 21.25% 16% 51.85% 5.45%;
  grid-template-areas: "col1 col2 col3 col4 col5";

  transform: scale(0.9);

  @media screen and (max-width: 768px) {
    transform: scale(1);
    grid-auto-columns: 6.7% 30% 26.6% 30% 6.7%;
  }
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1.5em;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  height: 80px;
  font-weight: 500;
  font-size: 26px;
  font-family: "Open Sans";
  white-space:nowrap;
  
  width:45%;
  position:relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-top: 4.4%;
  float: right;
  
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink1 = styled(NavLink)`
  color: black;
  align-items: center;
  text-decoration: none;
  padding-right: 1rem;
  padding-left:1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18px;
  max-width:100%;
  width:100%;
 
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  &.active {
    font-weight: bold;
  }
  &:hover {
    color: #87ceeb;
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
  font-size: 18px;
  max-width:100%;
  width:100%;
  &.active {
    font-weight: bold;
  }
  &:hover {
    color: #87ceeb;
  }
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;
export const NavLink3 = styled(NavLink)`
  color: black;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18px;
  max-width:100%;
  width:100%;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  &:hover {
    color: #87ceeb;
  }
  &.active {
    font-weight: bold;
  }
`;
export const NavCoCLogo = styled.img`
  height: 100px;
  margin-top: 2%;

  @media screen and (max-width: 1000px) {
    height: 100px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1.25em;
    height: 90px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 1.25em;
    height: 80px;
  }
  @media screen and (max-width: 420px) {
    margin-top: 1.25em;
    height: 70px;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;

    margin-top: 1.5em;
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
    float: right;
  }
  @media screen and (max-width: 500px) {
    display: block;
    margin-top: 1.3em;
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
  @media screen and (max-width: 420px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const DropArrow = styled.div`
  color:black;
  cursor:pointer;
  font-size:2rem;

`;

export const DropDown = styled.div`
transition: 0.33s ease-in-out;

height:auto;
width:100%;
position:absolute;
top:60%;
left:0;
z-index:5;
box-shadow: rgba(100, 107, 100, 0.4) 0px 8px 10px;
`
export const AnimatedDropDown = animated(DropDown);

export const DropUl = styled.div`
width:100%;
float:left;
background-color:white;

`
export const DropListItem = styled.div`
padding:2%;
cursor: pointer;
font-size:.9rem;
text-transform: uppercase;
border: solid black 0.1px;
padding-left:1%;
padding-right:1%;
font-weight:bold;
&:hover {
  transition: 0.2s ease-in-out;
  background-color:RGB(239,239,239);
}

&:focus{
  font-weight:bold;
  background-color:RGB(239,239,239);
}
`
