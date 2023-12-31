import styled from "styled-components";

export const MainRegisterCheckout = styled.main`
  padding: 0 160px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
  }

  
  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 2560px) {
    
  }
`;
export const ArticleRegisterTtile = styled.article`
  padding: 40px 0 15px 0;

  p {
    color: ${(props) => props.theme["--base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;
export const SectionRegisterAddress = styled.section`
  width: 640px;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(porps) => porps.theme["--base-card"]};

  @media (max-width: 480px) {
    width: 300px;
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
export const ArticleInformation = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
export const FigureIconLocale = styled.figure``;

export const DetailsLocaleAddress = styled.article`
  display: flex;
  flex-direction: column;

  p:nth-child(1) {
    color: ${(porps) => porps.theme["--base-subtile"]};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  p:nth-child(2) {
    color: ${(porps) => porps.theme["--base-text"]};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
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
