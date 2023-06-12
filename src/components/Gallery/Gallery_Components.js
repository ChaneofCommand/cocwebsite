import styled from "styled-components";
export const GalleryContainer = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
background: #fff;
-webkit-perspective:1;

@media screen and (max-width: 820px) {
    margin-top: -0px;
}

`

export const GalleryWrapper = styled.div`
max-width: 1000px;
height: 700px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-content: center;
grid-gap: 20px;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    height: auto;
    
    
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    height: auto;
    grid-gap: 80px;
    
}
`

export const GalleryIcon = styled.img`
height: 225px;
width: 225px;
margin-bottom: 10px;
`


export const Anchor = styled.a`
text-decoration: none;
color: #000;
height:250px;
`
/*export const GalleryH1 = styled.h1`
font-size: 2.5rem;
color: #000;
margin-top: 150px;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const GalleryH2 = styled.h2`
font-size:1rem;
margin-bottom: 4px;
margin-top: 8px;
text-align: center;
color: #fff;
`

export const GalleryP = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`

export const GalleryOverlay =styled.div`
width: 150px;
height: 60px;
border-radius: 0px;
margin-top: auto;
background-color: #000;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`
*/