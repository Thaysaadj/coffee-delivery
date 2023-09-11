import cartWite from "../../assets/svg/cart-wite.svg";
import menos from "../../assets/svg/menos.svg";
import mais from "../../assets/svg/mais.svg";
import {
  ArticleDescriptionCoffee,
  ArticleNemeCoffee,
  ArticlePriceCoffee,
  ArticleQuantityItem,
  ArticleTypeCoffee,
  FigureIconPurchase,
  FigureImageCoffee,
  MainContainerCoffee,
  SectionAcsiotionCoffee,
  SectionQuantity,
  SectionTypes,
} from "./styles";

interface PropsCardCoffee {
  imgCoffee: string;
  type: string[];
  name: string;
  description: string;
  value: string;
}

export const CardCoffee = ({
  imgCoffee,
  type,
  name,
  description,
  value,
}: PropsCardCoffee) => {
  const numericValue = parseFloat(value);
  

  return (
    <MainContainerCoffee>
      <FigureImageCoffee>
        <img src={imgCoffee} />
      </FigureImageCoffee>
      <SectionTypes>
      {type.map((typeItem, index) => {
        return (
          <ArticleTypeCoffee>
            <p key={index}>{typeItem}</p>
          </ArticleTypeCoffee>
        );
      })}
      </SectionTypes>
      <ArticleNemeCoffee>
        <p>{name}</p>
      </ArticleNemeCoffee>
      <ArticleDescriptionCoffee>
        <p>{description}</p>
      </ArticleDescriptionCoffee>
      <SectionAcsiotionCoffee>
        <ArticlePriceCoffee>
          <p>
            <span>R$</span>
            {numericValue.toFixed(2).split(".").join(",")}
          </p>
        </ArticlePriceCoffee>
        <SectionQuantity>
          <ArticleQuantityItem>
            <span>
              <img src={menos} />
            </span>
            <span>1</span>
            <span>
              <img src={mais} />
            </span>
          </ArticleQuantityItem>
          <FigureIconPurchase>
            <img src={cartWite} />
          </FigureIconPurchase>
        </SectionQuantity>
      </SectionAcsiotionCoffee>
    </MainContainerCoffee>
  );
};
