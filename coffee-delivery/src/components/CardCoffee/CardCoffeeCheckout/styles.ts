import styled from "styled-components";

export const MainCardCoffeeCheckout = styled.main`
  display: flex;
  flex-direction: row;
  width: 368px;
  height: 80px;
  padding: 8px 4px;
  justify-content: space-between;
  background: ${(props) => props.theme["--base-card"]};

  @media (max-width: 480px) {
    width: auto;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 2560px) {
  }
`;
export const SectionImgAndDetails = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
`;
export const FigureImgCoffeeCheckout = styled.figure`
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;
export const SectionDetailsQuantityCoffeeCheckout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: ${(props) => props.theme["--base-subtitle"]};

    /* Text/Regular M */
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`;

export const SectionQuantity = styled.section``;

export const ArticleQuantityItemCoffeeCheckout = styled.article`
  border-radius: 6px;
  background: ${(props) => props.theme["--base-button"]};
  display: flex;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  span:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span:nth-child(2) {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  height: 32px;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme["--base-button"]};
  border: none;
  color: ${(props) => props.theme["--purple"]};

  p {
    color: ${(props) => props.theme["--base-text"]};
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }
`;

export const ArticlePriceCoffeeCheckout = styled.article`
  color: ${(props) => props.theme["--base-text"]};
  text-align: right;

  /* Text/Bold M */
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
`;
