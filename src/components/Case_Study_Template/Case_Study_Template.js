import styled from "styled-components";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Heading = styled.h1`
  font-size: 37px;
  text-transform: uppercase;
  font-family: Open Sans;
  font-weight: 100;

  width: 100% @media screen and (max-width: 1000px) {
    font-size: 34px;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-top: 4.26%;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-top: 6.1%;
  }
  @media screen and (max-width: 420px) {
    margin-top: 7%;
    font-size: 24px;
  }
`;
export const Underline = styled.hr`
  border: 1px solid black;
  width: 100%;
  margin-top -1.875em;
  margin-bottom:1%;

  @media screen and (max-width: 1000px) {
  margin-bottom:3%;
  }
  @media screen and (max-width: 768px) {
  margin-top:-0.9375em;
  width:100%;
  margin-bottom:4%;
  }
    @media screen and (max-width: 500px) {
      margin-top:-0.9375em;
      margin-bottom:0%;
      width:100%;} 
    `;
export const DataContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr;
  column-gap: 1em;
  padding: 1%;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const DataDiv = styled.div`
height: 100%;
`;

export const BoldH1 = styled.h1`
  font-family: Open Sans;
  font-weight: bold;
  font-size: 22px;
  @media screen and (max-width: 1145px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
export const DataH1 = styled.h1`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: normal;
  @media screen and (max-width: 1145px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const Underline2 = styled.hr`
  border: 1px solid black;
  margin-left: 6.25em;
  display:none;
  @media screen and (max-width: 1000px) {
  
  @media screen and (max-width: 768px) {
    margin-top:9.0625em;
    width:100%;
  display: block;}
  @media screen and (max-width: 420px) {
    margin-top:5em;
    width:100%;
  display: block;}
  `;

export const Underline2b = styled.hr`
  border: 1px solid black;
  width: 100%;
  margin-top: 5.2%;

  @media screen and (max-width: 1780px) {
    margin-top: 7%;
  }
  @media screen and (max-width: 1778px) {
    margin-top: 8%;
  }
  @media screen and (max-width: 1580px) {
    margin-top: 8.5%;
  }

  @media screen and (max-width: 1440px) {
    margin-top: 9.5%;
  }
  @media screen and (max-width: 1340px) {
    margin-top: 10.5%;
  }
  @media screen and (max-width: 1140px) {
    margin-top: 11.5%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    margin-top: 6.5%;
  }
  @media screen and (max-width: 600px) {
    margin-top: 14%;
  }
  @media screen and (max-width: 500px) {
    margin-top: 19%;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    display: block;
  }
`;
export const Subtitle2 = styled.p`
  width: 100%;
  line-height: 45px;
  font-size: 22px;
  margin-bottom: 2%;
  font-family: Open Sans;

  @media screen and (max-width: 1145px) {
    font-size: 20px;
    line-height: 35px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;

    line-height: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
      }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  cursor: pointer;
  max-height: 30.4em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-height: 749.6px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 420px) {
  }
`;
export const ImageWrapper2 = styled.img`
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  max-height: 30em;
  object-fit: cover;
  @media screen and (max-width: 1000px) {
    max-width: 1fr;
    max-height: 1fr;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 420px) {
  }
`;
export const ImageWrapper3 = styled.img`
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  max-height: 30.4em;

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 420px) {
  }
`;

export const ImageWrapper4 = styled.img`
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  max-height: 30.4em;

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 420px) {
  }
`;
export const PhotoBackWrap = styled.div``;
export const AboutWrapper = styled.div`
  display: grid;
  grid-auto-columns: 5.45% 89.1% 5.45%;
  grid-template-areas: "col1 col2 col3";
  z-index: 1;
  height: auto;
  width: 100%;
  transform: scale(0.9);

  @media screen and (max-width: 768px) {
    transform: scale(1);
    margin-top: -1em;
  }
`;
export const PhotoDiv = styled.div`
  background-image: url('');
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
export const AboutWrapper2 = styled.div`
  grid-template-areas: "col1 col2 col3";
  z-index: 1;
  display: grid;

  grid-auto-columns: 10% 80% 10%;

  @media screen and (max-width: 768px) {
    grid-auto-columns: 5.45% 89.1% 5.45%;
  }
`;
export const AboutContainer = styled.div`
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 420px) {
  }
`;

export const AboutContainer3 = styled.div`
  width: 100%;
  margin-bottom: 9%;
  margin-top: 1%;
  background-color: black;
  height:auto @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 420px) {
  }
`;

export const ColumnA1 = styled.div`
  grid-area: col1;
  width: 100%;
`;
export const ColumnA2 = styled.div`
  grid-area: col2;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  color: black;
`;
export const ColumnA2B = styled.div`
  grid-area: col2;
  width: 100%;
  height: 100%;
display: flex;
  justify-content: center;
  align-items: center;
`;
export const ColumnA3 = styled.div`
  grid-area: col3;
  width: 100%;
`;
export const Subtitle = styled.p`
max-width: 1100px;
margin-left 6.25em;
font-size: 24px;

font-family: Open Sans;

margin-top: 1.25em;

@media screen and (max-width: 1000px) {
  font-size: 20px;

}
@media screen and (max-width: 768px) {
  font-size: 16px;
  line-height: 30px;
}
@media screen and (max-width: 420px) {
  font-size: 16px;

  max-width:70%;
}
`;

export const Databox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "col1 col2 col3";
  grid-row-gap: -30px;
  grid-auto-rows: 45px;
  width: 100%;
  height: auto;
`;
export const Column1 = styled.div`
  grid-area: col1A;
  width: 100%;
`;
export const Column1b = styled.div`
  grid-area: col1;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 9.375em;
  }
`;

export const Column2 = styled.div`
  grid-area: col2A;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.9);
  box-sizing: border-box;
  padding: 3%;
`;

export const Column3 = styled.div`
  grid-area: col3A;
  width: 100%;
`;

export const Datasub = styled.h2`
  font-size: 26px;
  font-family: Open Sans;
  color: black;
  width:100%
  text-transform:uppercase;
  

  @media screen and (max-width: 1000px) {
    font-size: 20px;

  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
    
  }
`;
export const Datasub2 = styled.h2`
  font-size: 26px;
  font-family: Open Sans;
  color: black;
  text-transform: uppercase;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    float: right;
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
export const Datasub3 = styled.h2`
  font-size: 26px;
  font-family: Open Sans;
  color: black;
  padding-top: 1.25em;
  text-transform: uppercase;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding-top: 2em;ageb
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
export const Datasub4 = styled.h2`
  font-size: 26px;
  font-family: Open Sans;
  color: black;
  padding-top: 1.25em;
  text-transform: uppercase;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    float: right;
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding-top: 2em;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
export const Dataspan = styled.span`
  font-weight: normal;
  font-size: 26px;
  text-transform: uppercase;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
export const Imagebox = styled.div`
height: 100%;
display: flex;
flex-wrap: wrap;
  justify-content: center;

align-items: center;
  column-gap: 0.5em;
  row-gap: 0.5em;
`;

export const Image = styled.img`
  width: 233px;
  height: 233px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  object-fit: cover;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    height: 213px;
    width: 213px;
  }
  @media screen and (max-width: 500px) {
    height: 204px;
    width: 204px;
  }
  @media screen and (max-width: 420px) {
    height: 162px;
    width: 162px;
  }
  @media screen and (max-width: 390px) {
    height: 156px;
    width: 156px;
  }
  @media screen and (max-width: 370px) {
    height: 149px;
    width: 149px;
  }
`;

export const ZoomImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: contain;
 
  &:focus {
    outline: none;
  }
`;

export const Lightbox = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  align-items: center;

  visibility: hidden;
  opacity: 0;

  transition: opacity ease 0.4s;
  &:focus {
    outline: none;
  }
`;

export const Forward = styled.div`
  color: white;
  font-size: 4rem;
  position: absolute;
  top: 50%;
  right: 4.5%;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const Back = styled.div`
  color: white;
  font-size: 4rem;
  position: absolute;
  top: 50%;
  left: 4%;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Close = styled.div`
color: white;
font-size: 3rem;
position: absolute;
  top: 2.5%;
  right: 2.5%;
  @media screen and (max-width: 768px) {
  font-size: 2rem;
} 
`;

export const Ratio = styled.div`
  color: white;
  font-size: 1.5rem;
font-family: "Open Sans";
  position: absolute;
bottom: 2.5%;
  left: 50%;
transform: translate(-50%, -50%);
  @media screen and (max-width: 768px) {
  font-size: 1.5rem;
}
  &:focus {
    outline: none;
}
`;

export const PressLinks = styled.div`
  width: 100%;
  height: auto;
display: flex;
flex-direction: column;
  font-family: "Open Sans";
`;

export const PLBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 1%;
`;

export const LinkHeader = styled.h1`
font-family: Open Sans;
font-weight: bold;

font-size: 22px;
@media screen and (max-width: 1145px) {
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  font-size: 18px;
}

@media screen and (max-width: 500px) {
  font-size: 16px;
}
`;

export const PLink = styled.div`
font-size: 22px;
font-weight: bold;
font-family: Open Sans;

white-space: nowrap;
  overflow: hidden;
@media screen and (max-width: 1145px) {
  font-size: 20px;
}
@media screen and (max-width: 1000px) {
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  font-size: 18px;
}
@media screen and (max-width: 500px) {
  font-size: 16px;
}
`;
export const PA = styled.a`
  color: black;
text-transform: lowercase;
  font-weight: normal;
  font-size: 20px @media screen and (max-width: 1145px) {
  font-size: 18px;
}
@media screen and (max-width: 1000px) {
  font-size: 18px;
}
@media screen and (max-width: 768px) {
  font-size: 16px;
}
@media screen and (max-width: 500px) {
  font-size: 14px;
}
`;

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 100%;
  margin-top: 5%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height:1000px;
  }
`;


export const PlayerWrapperSolo = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 100%;
  margin-top: 5%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height:500px;
  }
`;

export const PlayerDiv = styled.div`
  width: 48.75%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 640px;
    max-width: 100%;
    height: 48.75%;
    max-height:50%;
    margin-top: 2.5%;
  }
`;
export const PlayerDivSolo = styled.div`
  width: 60%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 640px;
    max-width: 100%;
    height: 100%%;
    max-height:100%;
    margin-top: 2.5%;
  }
`;