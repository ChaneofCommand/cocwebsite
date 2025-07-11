import styled from "styled-components";

// Base styles for all gallery projects - optimized responsive approach
const baseGalleryStyles = `
  background: #fff;
  border-radius: 0;
  height: 14rem; /* Reduced from 16.25rem (260px) to 14rem (224px) */
  width: 14rem; /* Reduced from 16.25rem (260px) to 14rem (224px) */
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
  flex-shrink: 0; /* Prevent shrinking */
  
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.02);
  }
  
  @media screen and (max-width: 75rem) { /* 1200px - Start shrinking later */
    height: 13.5rem; /* Smaller reduction: 216px */
    width: 13.5rem;
  }
  
  @media screen and (max-width: 64rem) { /* 1024px - More gradual reduction */
    height: 13rem; /* 208px */
    width: 13rem;
  }
  
  @media screen and (max-width: 56rem) { /* 896px - Added intermediate breakpoint */
    height: 12.5rem; /* 200px */
    width: 12.5rem;
  }
  
  @media screen and (max-width: 48rem) { /* 768px */
    height: 12rem; /* Less reduction: 192px vs previous 176px */
    width: 12rem;
  }
  
  @media screen and (max-width: 40rem) { /* 640px - Added intermediate breakpoint */
    height: 11.5rem; /* 184px */
    width: 11.5rem;
  }
  
  @media screen and (max-width: 35.4375rem) { /* 567px */
    height: 11rem; /* Less reduction: 176px vs previous 160px */
    width: 11rem;
  }
  
  @media screen and (max-width: 31.25rem) { /* 500px */
    height: 10.5rem; /* Less reduction: 168px vs previous 144px */
    width: 10.5rem;
  }
  
  @media screen and (max-width: 28rem) { /* 448px - Added intermediate breakpoint */
    height: 10rem; /* 160px */
    width: 10rem;
  }
  
  @media screen and (max-width: 26.875rem) { /* 430px */
    height: 9.5rem; /* Less reduction: 152px vs previous 128px */
    width: 9.5rem;
  }
  
  @media screen and (max-width: 26.25rem) { /* 420px */
    height: 9rem; /* Less reduction: 144px vs previous 120px */
    width: 9rem;
  }
  
  @media screen and (max-width: 23.75rem) { /* 380px */
    height: 8.5rem; /* Less reduction: 136px vs previous 112px */
    width: 8.5rem;
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
