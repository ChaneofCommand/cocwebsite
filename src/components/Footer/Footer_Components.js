import styled from "styled-components";
import {Link} from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


export const FooterContainer = styled.footer`
background-color: white;

`
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display:flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display:flex;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

text-align: left;
width: 310px;
box-sizing: border-box;

@media and screen (max-width: 420px) {
    margin:0;
    padding: 10px;
    width: 100%
}
`

export const FooterLinkTitle = styled.h1`
margin-left: -110%;
margin-bottom: 16px;
font-size: 18px;
font-weight: 100;
font-family: "Open Sans";
`

export const Footerh2=styled.h2`
font-style: "Arial";
font-size: 14px;
margin-left: 590%;
width:100px;
`

export const Linkedin = styled(FaLinkedin)`
font-size: 30px;

&:hover{
cursor: pointer;
}
` 
export const Insta = styled(FaInstagram)`
font-size: 30px;

&:hover{

}
` 
export const Github = styled(FaGithub)`
font-size: 30px;
&:hover{
    color: #01bf71;
    transition: 0.3s ease-out;
}
`    
export const Anchor = styled.a`
text-decoration: none;
color: #000;
`