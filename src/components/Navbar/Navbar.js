import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
  NavCoCLogo
} from "./Navbar_Components";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
 return (
    <>
      <Nav>
        <NavbarContainer>
        <NavCoCLogo
            src = {img1}
            />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
               href = '/'
              >
                HOME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
            href = '/about'
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
               href = '/contact'
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
