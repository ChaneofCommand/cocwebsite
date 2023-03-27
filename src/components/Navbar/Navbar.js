import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavMenu,
  NavCoCLogo
} from "./Navbar_Components";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {};
  return (
    <>
      <Nav>
        <NavbarContainer>
        <NavCoCLogo
            src = {img1}
            />
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                HOME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
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
