import { useNavigate} from "react-router-dom";
import { coffeeList } from "../../../APICoffee/coffeList";
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

export const CoffeeSelected = () => {

  const navigate = useNavigate()
  return (
    <MainCoffeeSelected>
      <ArticleTitle>
        <p>Cafés selecionados</p>
      </ArticleTitle>
      <SectionCoffeesSlected>
        {coffeeList.map((coffee) => {
          return (
            <CardCoffeeCheckout
              key={coffee.id}
              imgCoffee={coffee.imgCoffee}
              name={coffee.name}
              value={coffee.value}
            />
          );
        })}
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
