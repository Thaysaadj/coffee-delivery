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

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export const CardCoffeeCheckout = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const formatPrice = (price: number) => formatMoney(price)
  const coffeeTotal = coffee.value * coffee.quantity;


  return (
    <MainCardCoffeeCheckout>
      <SectionImgAndDetails>
        <FigureImgCoffeeCheckout>
          <img src={coffee.imgCoffee} alt="" />
        </FigureImgCoffeeCheckout>
        <SectionDetailsQuantityCoffeeCheckout>
          <p>{coffee.name}</p>
          <SectionQuantity>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <ButtonRemove onClick={handleRemove}>
              <Trash />
              <p>Remover</p>
            </ButtonRemove>
          </SectionQuantity>
        </SectionDetailsQuantityCoffeeCheckout>
      </SectionImgAndDetails>
      <ArticlePriceCoffeeCheckout>
        <p>R${formatPrice(coffeeTotal)}</p>
      </ArticlePriceCoffeeCheckout>
    </MainCardCoffeeCheckout>
  );
};
