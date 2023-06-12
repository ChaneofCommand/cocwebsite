import styled from "styled-components";
import me from '../../Images/Winifred.JPG'


export const AboutContainer = styled.div`


  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin:none;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 525px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding 0 24px;
  

  @media screen and (max-width: 1000px) {
   max-width: 100%;
   height: 450px;
  }
  @media screen and (max-width: 768px) {
    max-width: 430px;
    height: auto;
    margin:none;
    padding 0;
   }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: 50% 53.5%;
  grid-template-areas:  'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1'
  'col2 col2'};
  grid-auto-columns: 50% 50%;
  }
`;

export const Column1 = styled.div`
 
  grid-area: col1;
  @media screen and (max-width: 768px) {
   grid-area: col1;
  }
`;

export const Column2 = styled.div`
  
  grid-area: col2;

  @media screen and (max-width: 768px) {
    grid-area: col2;
   }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  margin-top:-30px;

  @media screen and (max-width: 1000px) {
    max-width: 300px;
    margin-left: 150px;
  }
  @media screen and (max-width: 768px) {
    max-width: 200px;
    margin-left: 160px;
  }
`;


export const Heading = styled.h1`
  font-size: 48px;
  font-family: Open Sans;
  color: black;
  font-weight: normal;
  margin-left:-90px;

  @media screen and (max-width: 1000px) {
    font-size 38px;
    margin:none;
    @media screen and (max-width: 768px) {
      font-size 32px;
      margin:none;
  `

  export const Subtitle = styled.p`
  max-width: 650px;
  margin-left -95px;
  font-size: 24px;
  font-family: Open Sans;
  color: black;
  margin-top: 20px;
  @media screen and (max-width: 1000px) {
   font-size 16px;
   margin:none;
  `



export const ImgWrap = styled.div`
max-width: 600px;
margin-top:0px;

margin-left:170px;
overflow: hidden;
max-height: 500px;

@media screen and (max-width: 1000px) {
  max-width: 460px;
  max-height: 360px;
  margin-left:70px;
}

@media screen and (max-width: 768px) {
  max-width: 460px;
  max-height: 360px;
  margin-top:25px;
}
`

export const Img = styled.img`
width: 100%;
margin-top:-40px;
background-image: url(${me});
background-position: top left;
background-repeat: no-repeat;

@media screen and (max-width: 1000px) {
width: 70%;
margin:none;
}

`
export const Underline = styled.hr`
border: 1px solid black;
margin-left: -95px;
width: 40%;
margin-top -30px;

@media screen and (max-width: 1000px) {
  margin:none;
  width:70%;
  }
  @media screen and (max-width: 768px) {
    width:70%;
    }
`

