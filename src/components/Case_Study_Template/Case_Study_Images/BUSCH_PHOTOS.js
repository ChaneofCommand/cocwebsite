import styled from "styled-components";
import img1 from "../../../Images/BuschBeer/BB1.jpg"
import img2 from "../../../Images/BuschBeer/BB2.jpg"
import img3 from "../../../Images/BuschBeer/BB3.jpg"


export const PhotoDiv = styled.div`
  background-image: url(${img3});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom:0%;
  display: grid;
  grid-auto-columns: 6.7% 86.6% 6.7%;
  grid-template-areas:  'col1A col2A col3A';
  z-index: 1;
  height:auto
  width: 100%;
  box-sizing:border-box;
  padding-top:5%;
  padding-bottom:5%;
  @media screen and (max-width: 768px) {
  padding-top:7%;
  padding-bottom:7%;
  margin-bottom:3%;
  }
  @media screen and (max-width:500px){
    grid-auto-columns: 100%;
    grid-template-areas:  ' col2A ';
    padding-top:0;
    padding-bottom:0;
  }
  @media screen and (max-width: 420px) {
    margin-bottom:3%;
    }
`;