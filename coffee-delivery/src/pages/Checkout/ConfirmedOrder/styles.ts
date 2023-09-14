import styled from "styled-components";

export const MainConfirmedOrder = styled.main`
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: stretch;
  gap:6.75rem ;
`;

export const SectionItemsConfirmedOrder = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 2.5rem;
`;

export const ArticleTitleConfirmedOrder = styled.article`
  width: 552px;

  p:nth-child(1) {
    color: ${(props) => props.theme["--yellow-dark"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  p:nth-child(2) {
    color: ${(props) => props.theme["--base-subtitle"]};

    /* Text/Regular L */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`;

export const SectionInformationConfirmationOrder = styled.section`
  display: flex;
  min-width: 32rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${props => props.theme['--base-background']};
  gap: 2rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;

  &::before{
    content: "";
    position:absolute;
    inset: -1px ;
    z-index: -1;
    border-radius: 7px 37px 7px 37px ;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047F8 98.76%) ;
  }
`;

const BaseItensConfirmationOrder = styled.article`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    color: ${(props) => props.theme["--base-text"]};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

`

export const ArticleDeliveryPlaceConfirmationOrder = styled(BaseItensConfirmationOrder)`
  p{
    width:19.9375rem ;
  }
`;

export const FigureLocale = styled.figure`
  padding: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme["--purple"]};
  display: flex;
  align-items: center;
  justify-content: center;

  
`;

export const ArticleTimerConfirmationOrder = styled(BaseItensConfirmationOrder)`
  p{
    width: 8.8125rem;
  }
`;

export const FigureTimer = styled.figure`
  border-radius: 50%;
  background: var(--brand-yellow, #dbac2c);
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ArticleFormOfPaymentConfirmationOrder = styled(BaseItensConfirmationOrder)`

  p{
    width:10.125rem ;
  }
`;

export const FigureFormOfPayment = styled.figure`
  border-radius: 50%;
  background: var(--brand-yellow-dark, #c47f17);
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

`;

export const SectionIlustration = styled.section`
  margin-bottom: -80px;
`;
