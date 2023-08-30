import { coffeeList } from "../../APICoffee/coffeList";
import { CardCoffee } from "../CardCoffee";
import { MainAllCoffes } from "./styles";

export const AllCoffees = () => {
  return (
    <MainAllCoffes>
      {coffeeList.map((coffee) => {
        return (
          <CardCoffee
            key={coffee.id}
            imgCoffee={coffee.imgCoffee}
            type={coffee.type}
            name={coffee.name}
            description={coffee.desciption}
            value={coffee.value}
          />
        );
      })}
    </MainAllCoffes>
  );
};
