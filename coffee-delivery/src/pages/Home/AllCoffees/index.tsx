import { coffeeList } from "../../../APICoffee/coffeList";
import { CardCoffee } from "../../../components/CardCoffee";
import { Banner } from "../Banner";
import { AllCoffeeTitle, MainAllCoffes } from "./styles";

export const AllCoffees = () => {
  return (
    <>
      <Banner/>
      <AllCoffeeTitle>
        <p>Nossos cafés</p>
      </AllCoffeeTitle>
      <MainAllCoffes>
        {coffeeList.map((coffee) => {
          return (
            <CardCoffee
              key={coffee.id}
              imgCoffee={coffee.imgCoffee}
              type={coffee.type}
              name={coffee.name}
              description={coffee.description}
              value={coffee.value}
            />
          );
        })}
      </MainAllCoffes>
    </>
  );
};
