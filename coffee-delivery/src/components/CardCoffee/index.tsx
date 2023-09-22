import {
  ArticleDescriptionCoffee,
  ArticleNemeCoffee,
  ArticlePriceCoffee,
  ArticleQuantityItem,
  ArticleTypeCoffee,
  FigureImageCoffee,
  MainContainerCoffee,
  SectionAcsiotionCoffee,
  SectionTypes,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { Coffee } from "../../types/Coffee";
import { useState } from "react";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../utils/formatMoney";

export interface CoffeeProps {
  coffee: Coffee;
}

export const CardCoffee = ({ coffee }: CoffeeProps) => {
  //Estado que controla a quantidade de itens
  const [quantity, setQuantity] = useState(1);
  //Função que pega o estado atual (state) e adiciona 1
  function handleIncrease() {
    setQuantity((state) => state + 1);
  }
  //Função que pega o estado atual (state) e remove 1
  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCoffeeToCart } = useCart();
  //Essa função vai desestuturar o café e adicionar uma quanridade.
  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  const coffeeTotal = coffee.value;

  const formatPrice = formatMoney(coffeeTotal);

  return (
    <MainContainerCoffee>
      <FigureImageCoffee>
        <img src={coffee.imgCoffee} />
      </FigureImageCoffee>
      <SectionTypes>
        {coffee.type.map((typeItem) => {
          return (
            <ArticleTypeCoffee>
              <p key={`type_${coffee.id}_${coffee.type}`}>{typeItem}</p>
            </ArticleTypeCoffee>
          );
        })}
      </SectionTypes>
      <ArticleNemeCoffee>
        <p>{coffee.name}</p>
      </ArticleNemeCoffee>
      <ArticleDescriptionCoffee>
        <p>{coffee.description}</p>
      </ArticleDescriptionCoffee>
      <SectionAcsiotionCoffee>
        <ArticlePriceCoffee>
          <p>R$ {formatPrice}</p>
        </ArticlePriceCoffee>
        <ArticleQuantityItem>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ArticleQuantityItem>
      </SectionAcsiotionCoffee>
    </MainContainerCoffee>
  );
};
