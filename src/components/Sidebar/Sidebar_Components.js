import styled from 'styled-components';
import {Link} from 'react-router-dom' ;
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 30%;
height: 100%;
background: white;
display: flex;
flex-direction:column;
top:0;
right:0;
font-family: Open Sans;
transition: 0.33s ease-in-out;
box-shadow: rgba(100, 107, 100, 0.4) 0px 8px 10px;
opacity:${({ isOpen}) => (isOpen ? '100%' : '0')};


@media screen and (min-width: 769px) and (max-width: 9999px) {
   display: none;  /* hide it on larger screens */
}

`

export const CloseIcon = styled(FaTimes)`
color: black;

font-size: 30px;
float:right;

@media screen and (max-width: 500px) {
font-size: 22.5px;
}
`
export const Icon = styled.div`

font-size: 2rem;
cusror: pointer;
margin-top:5%;
width:100%;

margin-left:-5%;
ba

@media screen and (max-width: 428px){

}
@media screen and (max-width: 420px){
  
}
@media screen and (max-width: 380px){
 
}
`
export const TopContainer = styled.div`
border: 2px solid pink;
width:100%`

export const SidebarWrapper = styled.div`
color:#fff;
border: 2px solid orange;


`
export const SidebarMenu = styled.div`

display: flex;
width:100%;
flex-direction:column;
margin-top:30%;
height:25%;


`

export const Underline = styled.hr`
border: 1px solid black;
margin-left: -95px;
width: 60%;
margin-top -30px;


`

export const SidebarLink = styled(Link)`
display: flex;
width:100%;
font-size: 1.4rem;
color: black;
align-items: center;
justify-content: center;
cursor: pointer;
font-family:Open Sans;
height:33.3%;
text-decoration: none;
&:hover {
    transition: 0.2s ease-in-out;
    background-color:RGB(239,239,239);
  }
@media screen and (max-width: 500px) {
    font-size: 1rem;
    height:23%;
  }
`
export const SidebarDiv = styled.div`
width:70%;
`
export const SideBtnWrap = styled.div`
display:flex;
justify-content: center;
margin-bottom: 15px;
border: 2px solid pink;
`
export const SidebarRoute = styled(Link)`
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
border: 2px solid pink;

&:hover {
    transition all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

export const NavCoCLogo = styled.img`
height: 80px;
margin-left 54px;
margin-top:4px;

@media screen and (max-width: 428px) {
    height:80px;
    margin-left 54px;
    margin-top:-335px;
   }

@media screen and (max-width: 420px) {
   height:70px;
   margin-left 54px;
   margin-top:-17.5px;
  }
  @media screen and (max-width: 380px){
    margin-top:-17.5px;
}
`