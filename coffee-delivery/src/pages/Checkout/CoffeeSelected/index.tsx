import { useNavigate } from "react-router-dom";
// import { coffeeList } from "../../../APICoffee/coffeList";
import { CardCoffeeCheckout } from "../../../components/CardCoffee/CardCoffeeCheckout";
import {
  ArticleTitle,
  ArticleTotal,
  ArticleTotalitens,
  ArticleValueShipping,
  MainCoffeeSelected,
  SectionButtonConfirmation,
  SectionCoffeesSlected,
  // SectionInformationOrder,
  SectionTotalPrice,
} from "./styles";
import { useCart } from "../../../hooks/useCart";
import { formatMoney } from "../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5

export const CoffeeSelected = () => {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)


  const navigate = useNavigate();
  return (
    <MainCoffeeSelected>
      <ArticleTitle>
        <p>Cafés selecionados</p>
      </ArticleTitle>

      <SectionCoffeesSlected>
        {cartItems.map((item) => (
          <CardCoffeeCheckout 
          key={item.id}
          coffee={item}
          />
        ))}
        <SectionTotalPrice>
          <ArticleTotalitens>
            <p>Total de itens</p>
            <p>R$ {formattedItemsTotal}</p>
          </ArticleTotalitens>
          <ArticleValueShipping>
            <p>Entrega</p>
            <p>R$ {formattedDeliveryPrice}</p>
          </ArticleValueShipping>
          <ArticleTotal>
            <p>Total</p>
            <p>R$ {formattedCartTotal}</p>
          </ArticleTotal>
        </SectionTotalPrice>
        <SectionButtonConfirmation disabled={cartQuantity<= 0} onClick={() => navigate("/confirmed")}>
          <p>Confirmar Pedido</p>
        </SectionButtonConfirmation>
      </SectionCoffeesSlected>
    </MainCoffeeSelected>
  );
};
