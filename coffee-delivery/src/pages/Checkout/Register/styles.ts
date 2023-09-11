import styled from "styled-components";

export const MainRegisterCheckout = styled.main`
  padding: 0 160px;
  display: flex;
  flex-direction: column;
  gap:12px;
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

const BaseInputs = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["--base-button"]};
  background: ${(props) => props.theme["--base-input"]};

  ::placeholder {
    color:${(props) => props.theme["--base-label"]};

    /* Text/Regular S */
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`;

export const SectionLocaleAddressInput = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionCEPAndRoad = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputCEP = styled(BaseInputs)`
  width: 200px;
  padding: 12px;
`;
export const InputRoad = styled(BaseInputs)`
  width: 560px;
  padding: 12px;
`;
export const SectionCompletAddress = styled.section`
  display: flex;
  column-gap: 12px;
  /* margin-left: 46px; */
`;
export const InputNumber = styled(BaseInputs)`
  width: 200px;
  padding: 12px;
`;
export const InputComplement = styled(BaseInputs)`
  width: 348px;
  padding: 12px;
`;

export const SectionFinalComplement = styled.section`
  display: flex;
  column-gap: 12px;
`;
export const InputNeighborhood = styled(BaseInputs)`
  width: 200px;
  padding: 12px;
`;
export const InputCity = styled(BaseInputs)`
  width: 252px;
  padding: 12px;
`;
export const InputState = styled(BaseInputs)`
  width: 60px;
  padding: 12px;
`;
