import {
  ArticleBannerBenefits,
  ArticleBannerSubtitle,
  ArticleImgBanner,
  BenefitsContainerIcon,
  BenefitsBox,
  BenefitsCart,
  BenefitsCoffee,
  BenefitsTimer,
  HeaderBannerTitle,
  MainBanner,
  SectionBanner,
} from "./styled";
import cartWite from "../../assets/svg/cart-wite.svg";
import box from "../../assets/svg/box.svg";
import timer from "../../assets/svg/timer.svg";
import miniCoffee from "../../assets/svg/miniCoffee.svg";
import imgBanner from "../../assets/png/imgBanner.png";

export const Banner = () => {
  return (
    <MainBanner>
      <SectionBanner>
        {/* <ArticleBannerTitleAndSubTitleAndImg> */}
        <HeaderBannerTitle>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <ArticleBannerSubtitle>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </ArticleBannerSubtitle>
        </HeaderBannerTitle>
        <ArticleImgBanner>
          <img src={imgBanner} alt="" />
        </ArticleImgBanner>
        <ArticleBannerBenefits>
          <BenefitsCart>
            <BenefitsContainerIcon className='colorIconCard'>
              <img src={cartWite} alt="" />
            </BenefitsContainerIcon>
            <p>Compra simples e segura</p>
          </BenefitsCart>
          <BenefitsBox>
            <BenefitsContainerIcon className='colorIconBox'>
              <img src={box} alt="" />
            </BenefitsContainerIcon>
            <p>Embalagem mantém o café intacto </p>
          </BenefitsBox>
          <BenefitsTimer>
            <BenefitsContainerIcon className='colorIconTimer'>
              <img src={timer} alt="" />
            </BenefitsContainerIcon>
            <p>Entrega rápida e rastreada</p>
          </BenefitsTimer>
          <BenefitsCoffee>
            <BenefitsContainerIcon className='colorIconMiniCoffee'>
              <img src={miniCoffee} alt="" />
            </BenefitsContainerIcon>
            <p>O café chega fresquinho até você</p>
          </BenefitsCoffee>
        </ArticleBannerBenefits>

        {/* </ArticleBannerTitleAndSubTitleAndImg> */}
      </SectionBanner>
    </MainBanner>
  );
};
