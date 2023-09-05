import styled from "styled-components";

export const MainCoffeeSelected = styled.main``;

export const ArticleTitle = styled.article`
  p {
    color: ${(props) => props.theme["--base-subtitle"]};

    /* Title/Title XS */
    font-family: "Baloo 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
  }

  padding: 40px 0 15px 0;
`;

export const SectionCoffeesSlected = styled.section`
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 6px 44px;
  background: ${(props) => props.theme["--base-card"]};

  a{
    width: 368px;
    height: 46px;
    text-decoration: none;
  }
`;

export const SectionTotalPrice = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const BaseTotal = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const ArticleTotalitens = styled(BaseTotal)`
  p {
    color: var(--base-text, #574f4d);
    text-align: right;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ArticleValueShipping = styled(BaseTotal)`
  p {
    color: var(--base-text, #574f4d);
    text-align: right;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ArticleTotal = styled(BaseTotal)`
  color: var(--base-subtitle, #403937);
  text-align: right;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const SectionButtonConfirmation = styled.button`


  width:100% ;
  border-radius: 6px;
  background: var(--brand-yellow, #dbac2c);
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border:none;

  p {
    color: var(--base-white, #fff);

    /* Components/Button G */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 22.4px */
    text-transform: uppercase;
  }
`;

