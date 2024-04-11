import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import {FaTimes} from 'react-icons/fa'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  NavCoCLogo,
  Underline,
  Nav,
  NavbarContainer,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
} from "./Sidebar_ComponentsOLD";

const Sidebar = ({ isOpen, toggle }) => {
  return (
  
    <SidebarContainer isOpen={!isOpen} >
      <Nav>
        <NavbarContainer>
          <Column1/>
          <Column2>
          <NavCoCLogo src={img1} />
          </Column2>
          <Column3/>
          <Column4>
          <Icon>
            <FaTimes onClick={toggle} />
          </Icon>
          </Column4>
          <Column5/>
        </NavbarContainer>
      </Nav>

      <SidebarWrapper>
        <Column1/>
        <Column2>
         <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">Home</SidebarLink>
          </SidebarMenu>

          <SidebarMenu>
          <SidebarLink  onClick={toggle} to="/About">About</SidebarLink>
          </SidebarMenu> 

          <SidebarMenu>
          <SidebarLink  onClick={toggle} to="Contact"> Contact</SidebarLink>
          </SidebarMenu>
        </Column2>
      </SidebarWrapper>
     <Column3/>
    </SidebarContainer>
  );
};

export default Sidebar;
