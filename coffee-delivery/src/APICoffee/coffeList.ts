import expressoTradicional from '../assets/png/coffes/expressoTradicional.png'
import expressoAmericano from '../assets/png/coffes/expressoAmericano.png'
import expressoCremoso from '../assets/png/coffes/expressoCremoso.png'
import expressoGelado from '../assets/png/coffes/expressoGelado.png'
import cafecomleite from '../assets/png/coffes/cafecomleite.png'
import latte from '../assets/png/coffes/latte.png'
import capuccino from  '../assets/png/coffes/capuccino.png'
import mocchiato from '../assets/png/coffes/mocchiato.png'
import mocaccino from '../assets/png/coffes/mocaccino.png'
import chocolateQuente from '../assets/png/coffes/chocolateQuente.png'
import cubano from '../assets/png/coffes/cubano.png'
import havaiano from '../assets/png/coffes/havaiano.png'
import arabe from '../assets/png/coffes/arabe.png'
import irlandes from '../assets/png/coffes/irlandes.png'
import { Coffee } from '../types/Coffee'


export const coffeeList:Coffee[] =  [
  {
    id: "1",
    imgCoffee: expressoTradicional,
    type: ["tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    value: "9.90",

  },
  {
    id: "2",
    imgCoffee: expressoAmericano,
    type: ["tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    value: "9.90",
  },
  {
    id: "3",
    imgCoffee: expressoCremoso,
    type: ["tradicional"],
    name: "Expresso Cremoso",
    description: "ECafé expresso tradicional com espuma cremosa",
    value: "9.90",

  },
  {
    id: "4",
    imgCoffee:expressoGelado,
    type: ["tradicional", "gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: "9.90",

  },
  {
    id: "5",
    imgCoffee: cafecomleite,
    type: ["tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    value: "9.90",

  },
  {
    id: "6",
    imgCoffee: latte,
    type: ["tradicional", "com leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: "9.90",

  },
  {
    id: "7",
    imgCoffee: capuccino,
    type: ["tradicional", "com leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: "9.90",

  },
  {
    id: "8",
    imgCoffee: mocchiato,
    type: ["tradicional", "com leite"],
    name: "Mocchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    value: "9.90",

  },
  {
    id: "9",
    imgCoffee: mocaccino,
    type: ["tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: "9.90",

  },
  {
    id: "10",
    imgCoffee: chocolateQuente,
    type: ["especial", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: "9.90",

  },
  {
    id: "11",
    imgCoffee: cubano,
    type: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: "9.90",

  },
  {
    id: "12",
    imgCoffee: havaiano,
    type: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    value: "9.90",

  },
  {
    id: "13",
    imgCoffee: arabe,
    type: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    value: "9.90",

  },
  {
    id: "14",
    imgCoffee: irlandes,
    type: ["especial", "alcoólico"],
    name: "irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: "9.90",

  },
];
