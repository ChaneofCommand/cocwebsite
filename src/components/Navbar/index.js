import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import { Link } from "react-router-dom";
import {useState} from 'react';
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import  "./nav.css"
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLink1,
  NavLink2,
  NavLink3,
  NavMenu,
  MobileIcon,
  NavCoCLogo,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
} from "./Navbar_Components";
/*href ={`${process.env.PUBLIC_URL}/`} 
href = {`${process.env.PUBLIC_URL}/about`}
 href = {`${process.env.PUBLIC_URL}/contact`}
*/
const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Column1 />
          <Column2>
          <Link to='/'>
            <NavCoCLogo src={img1} />
            </Link>
          </Column2>
          <Column3 />
          <Column4>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink1   to="/">
                  SELECT WORKS
                </NavLink1>
              </NavItem>
              <NavItem>
                <NavLink2  to="about">
                  ABOUT
                </NavLink2>
              </NavItem>
              <NavItem>
                <NavLink3 to="contact">
                  CONTACT
                </NavLink3>
              </NavItem>
            </NavMenu>
          </Column4>
          <Column5 />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
