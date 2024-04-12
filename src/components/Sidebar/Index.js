import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  NavCoCLogo,
  Underline
} from "./Sidebar_ComponentsOLD";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={!isOpen} onClick={toggle} >
      
      <NavCoCLogo src = {img1} />
      <Icon >
      <CloseIcon onClick={toggle} />
      </Icon>
    
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/'>Home</SidebarLink>
          
          <SidebarLink to= '/About' >About</SidebarLink>
          
          <SidebarLink to ='Contact'> Contact</SidebarLink>
          
        </SidebarMenu>
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
