import styled from "styled-components";

export const MainAllCoffes = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 32px;
  justify-items: center;
  align-items: center;
  padding: 54px 160px;
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
`;
