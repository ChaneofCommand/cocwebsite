import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: white;
height: 250px;
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
`
export const NavItem = styled.li`
height: 80px;
font-size: 18px;

`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -120px;

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavLinks = styled(LinkS)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 20px;
`
export const NavCoCLogo = styled.img`
height: 120px;
margin-left -100px;

`
;