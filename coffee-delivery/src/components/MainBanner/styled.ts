import styled from "styled-components";

export const MainBanner = styled.main`
  width: 100%;
  height: 544px;
`;

export const SectionBanner = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px;
  row-gap: 66px;
  padding: 94px 160px 72px 160px;


  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 30px;
  }

  @media (min-width: 500px) and (max-width: 500px) {
    /* padding: 1.25rem; */
  }
 
`;

// export const ArticleBannerTitleAndSubTitleAndImg = styled.article``;

export const HeaderBannerTitle = styled.header`
  width: 588px;
  height: 124px;

  h2 {
    color: ${(props) => props.theme["--base-title"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  @media (min-width: 320px) and (max-width: 500px) {
    width:100% ;
    height:auto;
    font-size:1.5rem ;
  }

`;

export const ArticleBannerSubtitle = styled.article`
  width: 588px;
  height: 52px;
  margin-top: 16px;

  p {
    color: ${(props) => props.theme["--base-subtitle"]};
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  @media (min-width: 320px) and (max-width: 500px) {
    width:100%;
    height: auto;
  }

  @media (min-width: 500px) and (max-width: 500px) {
  }
`;

export const ArticleImgBanner = styled.article`
  @media (min-width: 320px) and (max-width:500px) {
    width: 300px;
    height: 300px;

    img{
      width: 100%;
    }
  }

  @media (min-width: 500px) and (max-width: 500px) {
  }
`;

export const ArticleBannerBenefits = styled.article`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
  width: 567px;
  height: 84px;
  flex-shrink: 0;

  @media (min-width: 320px) and (max-width: 500px) {
    display:flex ;
    flex-direction: column;
    margin-top: -60px ;
    width: 100%;
  }

  @media (min-width:426px) and (max-width: 500px) {
    /* padding: 1.25rem; */
  }
`;



export const BaseBenefits = styled.figure`
  display: flex;
  align-items: center;
  justify-content:center ;
  gap: 12px;

    p {
    color: ${props => props.theme['--base-text']};
    width:250px;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`

export const BenefitsContainerIcon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 50%;
  background: red ;
`;

export const BenefitsCart = styled(BaseBenefits)`
  .colorIconCard{
    background-color: ${props => props.theme['--yellow-dark']} ;
  }

`;
export const BenefitsBox = styled(BaseBenefits)`
  .colorIconBox{
    background-color: ${props => props.theme['--base-text']} ;

  }
`;
export const BenefitsTimer = styled(BaseBenefits)`
  .colorIconTimer{
    background-color: ${props => props.theme['--yellow']} ;

  }
`;
export const BenefitsCoffee = styled(BaseBenefits)`
  .colorIconMiniCoffee{
    background-color: ${props => props.theme['--purple']} ;

  }
`;
