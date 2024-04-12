import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,

  SidebarMenu,
  SidebarLink,

} from "./Sidebar_Components";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon >
        <CloseIcon onClick={toggle}/>
      </Icon>
    
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>SELECTS</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>CONTACT</SidebarLink>
        </SidebarMenu>

     
    </SidebarContainer>
  );
};

export default Sidebar;
