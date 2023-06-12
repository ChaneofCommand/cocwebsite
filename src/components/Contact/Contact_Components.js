import React from 'react'

import styled from "styled-components";


export const AboutContainer = styled.div`


  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 525px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas:   'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2': 'col1 col1' 'col2 col2'};
  }
`;

export const Column1 = styled.div`
 
  grid-area: col1;
`;

export const Column2 = styled.div`
  
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  margin-top: -30px;
  margin-left: 45px;
`;


export const Heading = styled.h1`
  font-size: 48px;
  font-family: Open Sans;
  color: black;
  font-weight: normal;
  margin-left:-90px;
  @media screen and (max-width: 480px) {
      font-size: 32px;
  }
  `





export const ImgWrap = styled.div`
max-width: 450px;
margin-top:120px;
margin-left:150px;
overflow: hidden;
height: 350px;
`

export const Img = styled.img`
width: 100%;
padding-right: 0;
`
export const Underline = styled.hr`
border: 1px solid black;
margin-left: -95px;
width: 60%;
margin-top -30px;
`
export const FormContainer = styled.div`
margin-left:-95px;
margin-top:30px;

`
export const FirstLastContainer= styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
grid-template-areas:   'col1 col2';

@media screen and (max-width: 768px) {
  grid-template-areas: 'col1' 'col2': 'col1 col1' 'col2 col2'};
`
export const FirsCol = styled.div`
 
  grid-area: col1;
`;

export const LastCol = styled.div`
  
  grid-area: col2;
`;

export const FormLabel = styled.label`
font-family: Open Sans;

`
export const LastNameLabel = styled.label`
margin-left:30px;
font-family: Open Sans;

`
export const FirstInput = styled.input`
width: 90%;
padding: 12px;
border: 1px solid #ccc;
box-sizing: border-box;
margin-top: 3px;
margin-bottom:8px;
resize: vertical;
font-family: Open Sans;
font-weight: bold;
`
export const LastInput = styled.input`
width: 90%;
margin-left: 30px;
padding: 12px;
border: 1px solid #ccc;
box-sizing: border-box;
margin-top: 3px;
margin-bottom: 8px;
resize: vertical;
font-family: Open Sans;
font-weight: bold;
`
export const GeneralInput = styled.input`
width: 100%;
padding: 12px;
border: 1px solid #ccc;
box-sizing: border-box;
margin-top: 3px;
margin-bottom: 8px;
resize: vertical;
font-family: Open Sans;
font-weight: bold;
`
export const MessageArea = styled.textarea`
width: 100%;
padding: 12px;
border: 1px solid #ccc;
box-sizing: border-box;
margin-top: 3px;
margin-bottom: 8px;
resize: vertical;
height:100px;
font-family: Open Sans;
font-weight: bold;
`

export const SubButton = styled.input`
background-color: black;
color: white;
padding: 12px 20px;
border: none;
cursor: pointer;
font-family: Open Sans;
`

export const DataContainer = styled.div`
display: grid;
grid-template-columns: 30% 50%;
grid-template-areas:   'col1 col2 ';

@media screen and (max-width: 768px) {
  grid-template-areas: 'col1' 'col2': 'col1 col1' 'col2 col2'};
`
export const DecalCol = styled.div`
 
  grid-area: col1;
`;

export const DataCol = styled.div`
  
  grid-area: col2;
`;

export const DecalContainer = styled.div`
margin-top: 120px;
margin-left: 120px;
`
export const InfoContainer = styled.div`
margin-top: 120px;
margin-left: 60px;
`
export const Infoh1 = styled.h1`
font-family: Open Sans;
font-size: 24px;
`
export const Infoh2 =styled.h2`
font-family: Open Sans;
font-size: 24px;
font-weight: normal;
`