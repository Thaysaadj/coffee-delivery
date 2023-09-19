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
export const SectionTypeOfPaymant = styled.section`
  display: flex;
  gap: 12px;

  :hover {
    background: ${(props) => props.theme["--purple-light"]};
  }

`;
const BaseTypesOfPaymant = styled.article`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 6px;
  background: ${(props) => props.theme["--base-button"]};


`;

export const ArticleCreditCard = styled(BaseTypesOfPaymant)`


  p {
    color: ${props => props.theme['--base-text']};

    /* Components/Button S */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
  }


`;

export const FigureCredit = styled.figure`
  width: 16px;
  height: 16px;

  img {
    width: 100%;
  }
`;
export const ArticleDebitCard = styled(BaseTypesOfPaymant)`
  p {
    color: var(--base-text, #574f4d);

    /* Components/Button S */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
  }
`;
export const FigureDebit = styled.figure`
  width: 16px;
  height: 16px;

  img {
    width: 100%;
  }
`;
export const ArticleMoney = styled(BaseTypesOfPaymant)`
  p {
    color: var(--base-text, #574f4d);

    /* Components/Button S */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
  }
`;
export const FigureMoney = styled.figure`
  width: 16px;
  height: 16px;

  img {
    width: 100%;
  }
`;
