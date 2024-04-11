import styled from "styled-components";
import Win from "../../Images/Winifred.JPG";

export const AboutContainer = styled.div`
  max-width: 100%;
  margin-top: -1em;
  padding-bottom: 4em;
  @media screen and (max-width: 1000px) {
    max-width: auto;
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 420px) {
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  transform: scale(0.9);
  margin-top:-3em;
  height: auto;
  width: auto;
  
 

  @media screen and (max-width: 1000px) {
   max-width: 100%;
  margin-top:-2em;
  }
  @media screen and (max-width: 768px) {
    transform: scale(1);
    height: auto;
    margin-top:0;
    padding 0em;
   }

   @media screen and (max-width: 420px) {
 

   }

`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: 5.45% 44.55% 6.7% 37.85% 5.45%;
  grid-template-areas: "col1 col2 col3 col4 col5";

  @media screen and (max-width: 1000px) {
 
  }
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col2 col5" "col1 col4 col5";
    grid-auto-columns: 6.7% 86.6% 6.7%;
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
  width: 100%;
`;
export const Column2 = styled.div`
  grid-area: col2;
  width: 100%;
`;
export const Column3 = styled.div`
  grid-area: col3;
  width: 100%;
`;
export const Column4 = styled.div`
  grid-area: col4;
  width: 100%;
`;

export const Column5 = styled.div`
  grid-area: col5;
  width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  margin-top: -1.875em;

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    margin-top: 0em;
  }
  @media screen and (max-width: 420px) {
  }
`;

export const Heading = styled.h1`
  font-size: 44px;
  font-family: Open Sans;
  color: black;
  font-weight: 1;
  margin-left:1%;
  
  @media screen and (max-width: 1000px) {
    font-size 34px;
   
}

  @media screen and (max-width: 768px) {
      font-size 28px;
      margin-top:4.6%
  }
  @media screen and (max-width: 500px) {
    font-size 28px;
    margin-top:6.1%;
}
  @media screen and (max-width: 420px) {
        font-size 26px;
      
  }
  `;

export const Subtitle = styled.p`
  max-width: 100%;
  
  font-size: 24px;
  font-family: Open Sans;
  color: black;
  margin-top: .83em;
 
  @media screen and (max-width:1145px){
    
    font-size: 22px;
    
  }
  @media screen and (max-width:768px){
    margin-left:none;
    line-height: 30px;
    font-size: 18px;
    
  }
  @media screen and (max-width:500px){
    margin-left:none;
  }
   @media screen and (max-width: 420px) {
    font-size 16px;

  `;

export const ImgWrap = styled.div`
height:100%;
width:100%;
overflow:hidden;
display:flex;
justify-content:center;

box-sizing-border-box;


@media screen and (max-width: 1190px) {


}
@media screen and (max-width: 1082px) {


}
@media screen and (max-width: 1000px) {
margin-left:0em;
margin-top:2.5em;
}
@media screen and (max-width: 850px) {
  margin-top:6em;
    
  }

@media screen and (max-width: 768px) {

  margin-top:1.5625em;

}
@media screen and (max-width: 500px) {
margin-left:0;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 450px;
  width: 400px;
  margin-top: 1em;
  object-position: center -3em;
  background-repeat: no-repeat;

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 521px) {
  }
  @media screen and (max-width: 500px) {
  }
  @media screen and (max-width: 420px) {
  }
`;
export const Underline = styled.hr`
border: 1px solid black;
width: 35%;
margin-top -1.875em;
margin-left:0%;
@media screen and (max-width: 1000px) {
  margin-top -1.125em;
  width:50%
  }
  @media screen and (max-width: 768px) {
    width:25%;
    margin-top -1.125em;
    }
    @media screen and (max-width: 500px) {
      width:30%;
    @media screen and (max-width: 420px) {
        width:30%;
     
      }
`;
