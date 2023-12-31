import styled from "styled-components";

export const MainContainerCoffee = styled.main`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 310px;
  background: #F3F2F2;
  border-radius: 6px 36px;
`;
export const FigureImageCoffee = styled.figure`
  margin-top: -20px;
  width: 120px;
  height: 120px;

  img {
    width: 100%;
  }
`;

export const SectionTypes = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const ArticleTypeCoffee = styled.article`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: #f1e9c9;
  justify-content: center;
  border-radius: 100px;

  p {
    color: var(--brand-yellow-dark, #c47f17);
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
`;

export const ArticleNemeCoffee = styled.article`
  max-width: 216px;

  p {
    color: ${(props) => props.theme["--base-subtitle"]};
    text-align: center;
    font-family: "Baloo 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const ArticleDescriptionCoffee = styled.article`
  max-width: 216px;

  p {
    color: ${(porps) => porps.theme["--base-label"]};
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const SectionAcsiotionCoffee = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 208px;
  padding-bottom: 20px;
`;
export const ArticlePriceCoffee = styled.article`
  height: auto;

  p {
    color: ${(props) => props.theme["--base-text"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const SectionQuantity = styled.section`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const ArticleQuantityItem = styled.article`
  display:flex;
  width:7.5rem;
  gap:0.3rem;
  
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border:none ;
    background-color: ${(props) => props.theme['--purple-dark']};
    color: #F3F2F2;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    transition:0.4s ;

    &:hover{
      background-color:${props => props.theme['--purple']} ;
    }
  }
`;


