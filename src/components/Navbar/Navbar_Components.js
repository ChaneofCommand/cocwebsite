import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: white;
height: 175px;
width:100%
margin-top: -0px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top:0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}

@media screen and (max-width: 820px) {
    height:140px;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 120px;
z-index: 1;
width: 100%;
padding: 0 24px;

max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: 24px;
font-size: 20px;
font-weight: bold;
text-decoration: none;

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavItem = styled.li`
height: 80px;
font-weight: 500;
font-size: 26px;
font-family:"Open Sans";

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -120px;
@media screen and (max-width: 1000px) {
    margin-right 80px;
    
}
@media screen and (max-width: 768px){
    display: none;
}
`
export const NavLinks = styled.a`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 20px;

@media screen and (max-width: 1000px) {
   font-size: 16px;
    
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
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    margin-top: 25px;
    right:22px;
    transform: tranlate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
}
`
;