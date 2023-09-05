import { CoffeeSelected } from "./CoffeeSelected"
import { ConfirmedOrder } from "./ConfirmedOrder"
import { Register } from "./Register"
import { MainContainerCheckout } from "./styles"

export const Checkout = () => {
  return(
    <MainContainerCheckout>
      <Register/>
      <CoffeeSelected/>
      <ConfirmedOrder/>
    </MainContainerCheckout>
  )
}