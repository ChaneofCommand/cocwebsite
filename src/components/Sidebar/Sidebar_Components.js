import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 40%;
  height: 100%;
  z-index: 999;
  right: 0;
  background: white;
  font-family: Open Sans;
  transition: 0.33s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
`;
export const ButtonDiv = styled.div`
  box-sizing:border-box;
  padding:5%;
  width: auto;
  height: auto;
  float: right;
`;
export const CloseButton = styled(FaTimes)`
  color: black;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;
export const MenuDiv = styled.div`
width:100%;
display:flex;
justify-content:center;
content-align:center;

`;
export const SideBarMenu = styled.ul`
width:100%;
height:auto;
display:table;
margin:0;
padding:0;
`;
export const SideBarItem = styled.li`
width:100%;
list-style-type:none;
text-align:center;
font-size:20px;
text-transform:uppercase;
box-sizing:border-box;
padding-top:10%;
padding-bottom:10%;
&:hover{
pointer:cursor;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
@media screen and (max-width:420px){
    font-size:16px;
}
`;
export const SideBarLink = styled(Link)`
text-decoration:none;
color:black;
&:hover{
    cursor:pointer;
}
`