import { createContext, useState, ReactNode } from "react";
import { produce } from "immer";
import { Coffee } from "../types/Coffee";

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity : number
  addCoffeeToCart: (coffee: CartItem) => void
  
}

interface CartContextProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length

  //Funcção que adicionar um item ao carrinho 
  function addCoffeeToCart(coffee: CartItem) {
    //verifica se o café já existe no carrinho comparando o id do item atul com o id do item dentro do carrinho 
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if(coffeeAlreadyExistsInCart < 0 ){
        draft.push(coffee)
      }else{
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }
  console.log('consegui', cartItems)

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
