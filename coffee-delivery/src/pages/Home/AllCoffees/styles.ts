import styled from "styled-components";

export const MainAllCoffes = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 32px;
  justify-items: center;
  align-items: center;
  padding: 54px 160px;

  @media  (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 ;
    margin-top: 50px ;
  }

  @media (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    padding: 55px;
  }

  @media (min-width: 1024px){
    grid-template-columns: 1fr 1fr;
    padding: 70px 185px;
  }

  @media (min-width:1200px){
    grid-template-columns: 1fr 1fr 1fr;

  }

  @media (min-width: 2560px){
    padding: 70px 600px;
  }
`;

export const AllCoffeeTitle = styled.article`
  padding: 0 170px;

  p {
    color: ${(props) => props.theme["--base-subtitle"]};

    /* Title/Title L */
    font-family: 'Baloo 2',sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 41.6px */
  }

  @media (min-width: 320px){
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20rem ;
    padding:0;
  }
 
`;
