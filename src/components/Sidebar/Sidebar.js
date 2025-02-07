import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,

  SidebarMenu,
  SidebarLink,
  SidebarDiv,
} from "./Sidebar_Components";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon >
        <CloseIcon onClick={toggle}/>
      </Icon>
    
        <SidebarMenu>
         
          <SidebarLink to="/" onClick={toggle}> <SidebarDiv>SELECTS</SidebarDiv></SidebarLink>
          
          <SidebarLink to="about" onClick={toggle}> <SidebarDiv>ABOUT</SidebarDiv></SidebarLink>
          
          <SidebarLink to="contact" onClick={toggle}><SidebarDiv>CONTACT</SidebarDiv></SidebarLink>
        </SidebarMenu>

     
    </SidebarContainer>
  );
};

export default Sidebar;
