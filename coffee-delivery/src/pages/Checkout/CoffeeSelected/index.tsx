import { useNavigate } from "react-router-dom";
// import { coffeeList } from "../../../APICoffee/coffeList";
import { CardCoffeeCheckout, PropsCardCoffeeCheckout } from "../../../components/CardCoffee/CardCoffeeCheckout";
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

export const CoffeeSelected = ({id, imgCoffee, name, value}:PropsCardCoffeeCheckout) => {
  const navigate = useNavigate();
  return (
    <MainCoffeeSelected>
      <ArticleTitle>
        <p>Cafés selecionados</p>
      </ArticleTitle>
      <SectionCoffeesSlected>
        <CardCoffeeCheckout
          key={id}
          imgCoffee={imgCoffee}
          name={name}
          value={value}
        />
        <SectionTotalPrice>
          <ArticleTotalitens>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </ArticleTotalitens>
          <ArticleValueShipping>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </ArticleValueShipping>
          <ArticleTotal>
            <p>Total</p>
            <p>R$ 33,20</p>
          </ArticleTotal>
        </SectionTotalPrice>
        <SectionButtonConfirmation onClick={() => navigate("/confirmed")}>
          <p>Confirmar Pedido</p>
        </SectionButtonConfirmation>
      </SectionCoffeesSlected>
    </MainCoffeeSelected>
  );
};
