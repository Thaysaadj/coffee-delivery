import trash from "../../../assets/svg/trash.svg";
import mais from "../../../assets/svg/mais.svg";
import menos from "../../../assets/svg/menos.svg";
import {
  ArticlePriceCoffeeCheckout,
  ArticleQuantityItemCoffeeCheckout,
  ArticleRemove,
  FigureImgCoffeeCheckout,
  MainCardCoffeeCheckout,
  SectionDetailsQuantityCoffeeCheckout,
  SectionImgAndDetails,
} from "./styles";
import { SectionQuantity } from "../styles";

export interface PropsCardCoffeeCheckout {
  id?: number
  imgCoffee: string;
  name: string;
  value: string;
}

export const CardCoffeeCheckout = ({imgCoffee, name,value}: PropsCardCoffeeCheckout) => {

  const valueCardCheckout =  parseFloat(value)

  return (
    <MainCardCoffeeCheckout>
      <SectionImgAndDetails>
        <FigureImgCoffeeCheckout>
          <img src={imgCoffee} alt="" />
        </FigureImgCoffeeCheckout>
        <SectionDetailsQuantityCoffeeCheckout>
          <p>{name}</p>
          <SectionQuantity>
            <ArticleQuantityItemCoffeeCheckout>
              <span>
                <img src={menos} />
              </span>
              <span>1</span>
              <span>
                <img src={mais} />
              </span>
            </ArticleQuantityItemCoffeeCheckout>
            <ArticleRemove>
              <img src={trash} />
              <p>Remover</p>
            </ArticleRemove>
          </SectionQuantity>
        </SectionDetailsQuantityCoffeeCheckout>
      </SectionImgAndDetails>
      <ArticlePriceCoffeeCheckout>
        <p>
          <span>R$</span>
          {valueCardCheckout.toFixed(2).split(".").join(",")}
        </p>
      </ArticlePriceCoffeeCheckout>
    </MainCardCoffeeCheckout>
  );
};
