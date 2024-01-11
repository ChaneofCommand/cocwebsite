import styled from "styled-components";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


export const FooterContainer = styled.footer`
background-color: white;
width:100%;
`
export const FooterWrap = styled.div`
padding-top:1.5em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
margin-bottom:2%;
transform: scale(0.9);


@media screen and (max-width: 768px) {
   transform:scale(1);
} 
  
@media screen and (max-width: 420px) {
   width:100%;
}

`

export const FooterLinksContainer = styled.div`
display:flex;
justify-content: center;
width:100%;
`

export const FooterLinksWrapper = styled.div`
display:grid;
width:100%;
grid-auto-columns: 6.2% 36.5% 10% 41.1% 6.2%;
grid-template-areas:  'col1 col2 col3 col4 col5';

@media screen and (max-width: 768px) {
  grid-auto-columns: 6.7% 50% 6.6% 30% 6.7%;
}

`
export const Column1 = styled.div`
  grid-area: col1;
  width:100%;
`;
export const Column2 = styled.div`
  grid-area: col2;
  width:100%;
`;
export const Column3 = styled.div`
  grid-area: col3;
  width:100%;
`;
export const Column4 = styled.div`
  grid-area: col4;
  width:100%;
`;

export const Column5 = styled.div`
  grid-area: col5;
  width:100%;
`;


export const FooterLinkItems = styled.div`
box-sizing: border-box;
width:100%;
@media and screen (max-width: 420px) {

    width: 100%
}
`

export const FooterLinkTitle = styled.h1`
margin-bottom: 1em;
font-size: 18px;
font-weight: 100;
font-family: "Open Sans";
@media screen and (max-width: 1000px) {
    font-size: 16px;
}
@media screen and (max-width: 768px) {
  
}

@media screen and (max-width: 500px) {
   
    font-size:16px;
}
@media screen and (max-width: 420px) {

    font-size:14px;
}
`

export const Footerh2=styled.h2`
font-size: 14px;
float:right;

@media screen and (max-width: 1000px) {
 
}
@media screen and (max-width: 768px) {
   
 
}
@media screen and (max-width: 420px) {
 
    font-size:14px;
    
    
}
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