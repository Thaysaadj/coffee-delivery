import styled from "styled-components";

export const MainInfoPaymant = styled.main`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(porps) => porps.theme["--base-card"]};

  @media  (max-width: 480px) {
    width: 300px;
  }

  @media (min-width: 768px){

  }

  @media (min-width: 1024px){
  
  }

  @media (min-width:1200px){

  }

  @media (min-width: 2560px){
  }
`;
export const SectionInfoPaymant = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const ArtcileInfoTypePaymant = styled.article`
  display: flex;
  gap: 8px;
  height: 44px;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const FigureDolar = styled.figure`
  p {
    color: ${(porps) => porps.theme["--base-subtitle"]};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;
export const ArticleSubtitlePaymant = styled.article`
  display: flex;
  height: 21px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PaymentMethodOptionsContanier = styled.div`
  width: 100% ;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  align-items: center;
  justify-items: center;
  align-content: center;

  > p {
    color: ${porps => porps.theme['--base-error']};
    grid-column:span 3 ;
  }

  @media  (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 768px){

  }

  @media (min-width: 1024px){

  }

  @media (min-width:1200px){

  }

  @media (min-width: 2560px){
  }
`;
