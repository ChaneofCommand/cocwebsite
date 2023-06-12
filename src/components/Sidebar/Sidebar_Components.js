import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom' ;
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: white;
display: grid;
align-items: center;
top:0;
left:0;
font-family: Open Sans:
transition: 0.33s ease-in-out:
opacity:${({ isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen}) =>( isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: black;
margin-left: 425px;
font-size: 30px;

`
export const Icon = styled.div`
position: absolute:
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cusror: pointer;
outline: none;
width:100px;
`;
export const TopContainer = styled.div`
width:100%`

export const SidebarWrapper = styled.div`
color:#fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`
export const SidebarLink = styled.a`
display: flex;
align-items; center;
justify-content: center;
font-size: 1.75rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: black;
cursor: pointer;
font-family:Open Sans;

&:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out:
  }
`
export const SideBtnWrap = styled.div`
display:flex;
justify-content: center;
margin-bottom: 15px;
`
export const SidebarRoute = styled(LinkS)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 20px;
outline: none;
border: none;
cursor: pointer;
transiton: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transition all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

export const NavCoCLogo = styled.img`
height: 120px;
margin-left -100px;

@media screen and (max-width: 1000px) {
height:100px;
margin-left: 55px;
    
}
@media screen and (max-width: 768px){
    height: 80px;
    margin-left:55px;
}
`