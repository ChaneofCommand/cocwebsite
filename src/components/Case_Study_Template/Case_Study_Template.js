import styled from "styled-components";
import img1 from "../../Images/Markforged.jpg";
import img2 from "../../Images/Markforged2.jpg";
import img3 from "../../Images/Markforged3.jpg";
import img4 from "../../Images/Markforged4.jpg";

export const Heading = styled.h1`
  font-size: 48px;
  margin-left: 100px;
  font-family: Open Sans;
  color: black;
  font-weight: normal;
  max-width: 1100px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Underline = styled.hr`
  border: 1px solid black;
  margin-left: 100px;
  width: 65%;
  margin-top -30px;
  `;
export const ImageWrapper = styled.div`
  height: 366px;
  width: 100%;
  background-image: url(${img1});
  margin-left: 100px;
  background-size: 550px auto;
  background-position: top left;
  background-repeat: no-repeat;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;
export const ImageWrapper2 = styled.div`
  height: 366px;
  width: 100%;
  background-image: url(${img2});
  margin-left: 100px;
  background-size: 550px auto;
  background-position: top left;
  background-repeat: no-repeat;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;
export const ImageWrapper3 = styled.div`
  height: 366px;
  width: 100%;
  background-image: url(${img3});
  margin-left: 100px;
  background-size: 550px auto;
  background-position: top left;
  background-repeat: no-repeat;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;
export const ImageWrapper4 = styled.div`
  height: 366px;
  width: 100%;
  background-image: url(${img4});
  margin-left: 100px;
  background-size: 550px auto;
  background-position: top left;
  background-repeat: no-repeat;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;
export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 625px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const Subtitle = styled.p`
max-width: 1100px;
margin-left 100px;
font-size: 24px;
line-height:40px;
font-family: Open Sans;
color: black;
margin-top: 20px;
`;

export const Databox = styled.div`
display: grid;
grid-template-columns: 45% 45% ;
grid-template-areas:   'col1 col2 col3';
grid-row-gap:-30px;
grid-auto-rows: 45px;
max-width:1100px;

@media screen and (max-width: 768px) {
  grid-template-areas: 'col1' 'col2' 'col3': 'col1 col1' 'col2 col2' 'col3 col3'};
`;
export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const Column3 = styled.div`
  grid-area: col3;
`;

export const Datasub = styled.h2`
  font-size: 22px;
  font-family: Open Sans;
  color: black;
  max-width: 1100px;
  margin-left: 100px;
`;
export const Dataspan = styled.span`
  font-weight: normal;
  font-size: 22px;
`;
export const Imagebox = styled.div`
max-width: 1100px;
height:390px;
display: grid;
grid-template-columns: 50% 50%;
grid-template-areas:   'col1 col2';
grid-gap: 20px;

@media screen and (max-width: 768px) {
  grid-template-areas: 'col1' 'col2' : 'col1 col1' 'col2 col2'};
`;
