import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  NavCoCLogo,
TopContainer
} from "./Sidebar_Components";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={!isOpen} onClick={toggle}>
      
      
      <Icon >
      <NavCoCLogo src = {img1} />
        <CloseIcon onClick={toggle} />
      </Icon>
    
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href='/'>Home</SidebarLink>
          <SidebarLink href= '/About' >About</SidebarLink>
          <SidebarLink href ='Contact'> Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
