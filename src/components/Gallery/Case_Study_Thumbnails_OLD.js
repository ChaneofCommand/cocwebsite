import styled from "styled-components";

// Base styles for all gallery projects - optimized responsive approach
const baseGalleryStyles = `
  background: #fff;
  border-radius: 0;
  height: 16.25rem; /* 260px */
  width: 16.25rem; /* 260px */
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  position: relative;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.02);
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    height: 14.8125rem; /* 237px */
    width: 14.8125rem;
  }
  
  @media screen and (max-width: 35.4375rem) { /* 567px */
    height: 12.375rem; /* 198px */
    width: 12.375rem;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    height: 12.375rem; /* 198px */
    width: 12.375rem;
  }
  
  @media screen and (max-width: 26.875rem) { /* 430px */
    height: 9.8125rem; /* 157px */
    width: 9.8125rem;
  }
  
  @media screen and (max-width: 26.25rem) { /* 420px */
    height: 9.8125rem; /* 157px */
    width: 9.8125rem;
  }
  
  @media screen and (max-width: 23.75rem) { /* 380px */
    height: 8.9375rem; /* 143px */
    width: 8.9375rem;
  }
`;

export const GalleryProject = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center top;
`;

export const GalleryProject2 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: 55% 0%;
  grid-area: proj2;
`;

export const GalleryProject3 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: 30% 0%;
  grid-area: proj3;
`;

export const GalleryProject4 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: top left;
  grid-area: proj4;
`;

export const GalleryProject5 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 0%;
  grid-area: proj5;
`;

export const GalleryProject6 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 25%;
  grid-area: proj6;
`;

export const GalleryProject7 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 35%;
  grid-area: proj7;
`;

export const GalleryProject8 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 15%;
  grid-area: proj8;
`;

export const GalleryProject9 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 0%;
  grid-area: proj9;
`;

export const GalleryProject10 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 15%;
  grid-area: proj10;
`;

export const GalleryProject11 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 0%;
  grid-area: proj11;
`;

export const GalleryProject12 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 0%;
  grid-area: proj12;
`;

export const GalleryProject13 = styled.div`
  ${baseGalleryStyles}
  background-image: url('');
  background-position: center 0%;
  grid-area: proj13;
`;
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }
}  
`;
export const GalleryProject5 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: center top;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj5;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }
}  
`;

export const GalleryProject6 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: top left;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }
}  
`;
export const GalleryProject7 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: 30% 0%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj7;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }
}  
`;
export const GalleryProject8 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: 60% 0%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj8;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }
}  
`;

export const GalleryProject9 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: 55% 0%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj9;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }
}  
`;
export const GalleryProject10 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: 55% 0%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj9;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }

`;

export const GalleryProject11 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: 55% 0%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj9;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }

`;

export const GalleryProject12 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: 55% 0%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj9;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }

`;

export const GalleryProject13 = styled.div`
  background: #fff;
  border-radius: 0px;
  background-image: url('');
  height: 260px;
  width: 260px;
  background-size: cover;
  background-position: 55% 0%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-area: proj9;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    height:237px;
    width:237px;
  }
@media screen and (max-width: 567px) {
    height:198px;
    width:198px;
  }
  @media screen and (max-width: 500px) {
    height: 198px;
    width: 198px;
  }
  @media screen and (max-width: 430px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 420px) {
    height: 157px;
    width: 157px;
  }
  @media screen and (max-width: 380px) {
    height: 143px;
    width: 143px;
  }

`;