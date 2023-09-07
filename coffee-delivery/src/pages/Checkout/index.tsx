import { CoffeeSelected } from "./CoffeeSelected"
import { Register } from "./Register"
import { MainContainerCheckout } from "./styles"

export const Checkout = () => {
  return(
    <MainContainerCheckout>
      <Register/>
      <CoffeeSelected/>
    </MainContainerCheckout>
  )
}