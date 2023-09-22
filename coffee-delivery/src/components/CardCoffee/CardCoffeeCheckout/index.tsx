import {
  ArticlePriceCoffeeCheckout,
  ButtonRemove,
  FigureImgCoffeeCheckout,
  MainCardCoffeeCheckout,
  SectionDetailsQuantityCoffeeCheckout,
  SectionImgAndDetails,
} from "./styles";
import { SectionQuantity } from "../styles";
import { CartItem } from "../../../context/CoffeeContext";
import { Trash } from "phosphor-react";
import { QuantityInput } from "../../QuantityInput";
import { useCart } from "../../../hooks/useCart";
import { formatMoney } from "../../../utils/formatMoney";
import { useState, useEffect } from "react";
interface CoffeeCartCardProps {
  coffee: CartItem;
}

export const CardCoffeeCheckout = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const [coffeeTotal, setCoffeeTotal] = useState(
    coffee.value * coffee.quantity
  );

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  useEffect (() => {
    setCoffeeTotal(coffee.value * coffee.quantity);
  }, [coffee])

  return (
    <MainCardCoffeeCheckout>
      <SectionImgAndDetails>
        <FigureImgCoffeeCheckout>
          <img src={coffee.imgCoffee} alt="" />
        </FigureImgCoffeeCheckout>
        <SectionDetailsQuantityCoffeeCheckout>
          <p>{coffee.name}</p>
          <SectionQuantity>
            {
              <QuantityInput
                size="small"
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={coffee.quantity}
              />
            }
            <ButtonRemove onClick={handleRemove}>
              <Trash />
              <p>Remover</p>
            </ButtonRemove>
          </SectionQuantity>
        </SectionDetailsQuantityCoffeeCheckout>
      </SectionImgAndDetails>
      <ArticlePriceCoffeeCheckout>
        <p>R${formatMoney(coffeeTotal)}</p>
      </ArticlePriceCoffeeCheckout>
    </MainCardCoffeeCheckout>
  );
};
