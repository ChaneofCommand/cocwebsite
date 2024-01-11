import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import { FaTimes } from "react-icons/fa";
import {
  ButtonDiv,
  CloseButton,
  MenuDiv,
  SideBarItem,
  SideBarMenu,
  SidebarContainer,
  SideBarLink,
} from "./Sidebar_Components";
import { SidebarLink } from "./Sidebar_ComponentsOLD";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={!isOpen}>
      <ButtonDiv onClick={toggle}>
        <CloseButton />
      </ButtonDiv>
      <MenuDiv>
        <SideBarMenu>
          <SidebarLink to="/" onClick={toggle}>
            <SideBarItem>Home</SideBarItem>
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            <SideBarItem>About</SideBarItem>
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            <SideBarItem>Contact</SideBarItem>
          </SidebarLink>
        </SideBarMenu>
      </MenuDiv>
    </SidebarContainer>
  );
};

export default Sidebar;
