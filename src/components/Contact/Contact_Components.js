import React from "react";
import Decal2 from "../../Images/Decal2.png";
import styled from "styled-components";

export const AboutContainer = styled.div`
  box-display: border-box;
  max-width: 100%;
  height: auto;
  margin-top: -1em;
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  margin-bottom: 3%;
  transform: scale(0.9);
  margin-top:-3em;
 
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
    
  }
  @media screen and (max-width: 768px) {
    margin-top:0;
    transform:scale(1);
  }
  @media screen and (max-width: 520px) {

  }
`;

export const AboutRow = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 5.45% 37.25% 15.35% 36.5% 5.45%;
  grid-template-areas: "col1 col2 col3 col4 col5";

  @media screen and (max-width: 1000px) {
    grid-template-areas: "col1 col2 col5" "col1 col4 col5";
    grid-auto-columns: 5.45% 60% 20%;
  }
  @media screen and (max-width: 500px) {
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
    margin-top:0em;

`;

export const Heading = styled.h1`
  font-size: 44px;
  font-family: Open Sans;
  color: black;
  font-weight: normal;
  margin-left:1%;

      @media screen and (max-width: 1000px) {
        font-size: 34px;
     
        @media screen and (max-width: 768px) {
          font-size: 28px;
          margin-top:4.6%

  }
  @media screen and (max-width: 500px) {
    margin-top:6.1%;

 }
      @media screen and (max-width: 420px) {
      

       font-size: 26px;
    }
  `;

export const Underline = styled.hr`
border: 1px solid black;
margin-left:0%;
width: 45%;
margin-top -1.875em;

@media screen and (max-width: 1250px) {
 
  width:65%;
  margin-top:-1.125em;
  }
  @media screen and (max-width: 1000px) {
 
    width:40%;
    margin-top:-1.125em;
    }
  @media screen and (max-width: 768px) {
    width:40%;
    margin-top:-1.125em;

    }
    @media screen and (max-width: 500px) {
      width:40%;
      margin-top:-1.125em;
    
      
      }
      @media screen and (max-width: 420px) {
        width:35%;
        margin-top:-1.125em;
        
        }
`;
export const FormContainer = styled.form`
  margin-top: 1.875em;
  width: 100%;

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    width: 100%;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
export const FirstLastContainer = styled.div`
display: grid;
grid-auto-columns: 50% 50%;
grid-template-areas:   'col1 col2';

@media screen and (max-width:1000px) {
  

  @media screen and (max-width: 768px) {
    
  `;

export const FirsCol = styled.div`
  grid-area: col1;
`;

export const LastCol = styled.div`
  grid-area: col2;
`;

export const FormLabel = styled.label`
  font-family: Open Sans;
`;
export const LastNameLabel = styled.label`
  margin-left: 1em;
  font-family: Open Sans;

  @media screen and (max-width: 768px) {
    margin-left: 1.05em;
  }

  @media screen and (max-width: 420px) {
    margin-left: 0.75em;
  }
`;
export const FirstInput = styled.input`
  width: 95%;
  padding: 0.85em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875em;
  margin-bottom: 0.5em;
  resize: vertical;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: bold;
`;
export const LastInput = styled.input`
  width: 95%;
  float: right;
  padding: 0.85em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875em;
  margin-bottom: 0.5em;
  resize: vertical;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    margin-left: 1.25em;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0.9375em;
  }
  @media screen and (max-width: 420px) {
    margin-left: 0.75em;
  }
`;
export const GeneralInput = styled.input`
  width: 100%;
  padding: 0.85em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875em;
  margin-bottom: 0.5em;
  resize: vertical;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: bold;
`;
export const MessageArea = styled.textarea`
  width: 100%;
  padding: 0.85em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 0.1875em;
  margin-bottom: 0.5em;
  resize: vertical;
  height: 100px;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: bold;
`;

export const SubButton = styled.input`
  background-color: black;
  color: white;
  padding: 0.85em 1.25em;
  border: none;
  cursor: pointer;
  font-family: Open Sans;
`;

export const InfoContainer = styled.div`
  margin-top: 13%;
  margin-left:22%;


  @media screen and (max-width: 1250px) {
    margin-left: 7%;
  }
  @media screen and (max-width: 1000px) {
    margin-left:0%
  }

  @media screen and (max-width: 768px) {
    margin-top: 6em;
    float:left;
  }
  @media screen and (max-width: 500px) {
  }
  @media screen and (max-width: 420px) {
  }
`;
export const Infoh1 = styled.h1`
  font-family: Open Sans;
  font-size: 30px;
  @media screen and (max-width: 1000px) {
    
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 420px) {
    font-size: 20px;
  }
`;
export const Infoh2 = styled.h2`
  font-family: Open Sans;
  font-size: 30px;
  font-weight: normal;
  @media screen and (max-width: 1000px) {

  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const DecalImg = styled.img`
  height: 420px;
  width:300px;
  margin-top: 29.5%;
  margin-left:140%;
  @media screen and (max-width: 1000px) {
    display:none;
  }
  @media screen and (max-width: 768px) {
    height: 270px;
  }
  @media screen and (max-width: 420px) {
    height: 270px;
  }
`;
export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  grid-template-areas: "col1 col2 ";

  @media screen and (max-width: 1000px) {
    grid-template-columns: 20% 40%;
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    grid-template-columns: 30% 60%;
  }
  @media screen and (max-width: 428px) {
    font-size: 16px;
    grid-template-columns: 30% 60%;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
    grid-template-columns: 25% 60%;
  }
`;
export const DecalCol = styled.div`
  grid-area: col1;
`;

export const DataCol = styled.div`
  grid-area: col2;
`;

export const DecalContainer = styled.div`
  display:flex;
  justify-content:center;

  @media screen and (max-width: 1000px) {
   
  }
  @media screen and (max-width: 768px) {
  
  }
  @media screen and (width: 428px) {
  }
`;
