import { CoffeeSelected } from "./CoffeeSelected"
// import { InfoPaymant } from "./InfoPaymant"
import { Register } from "./Register"
import { MainContainerCheckout } from "./styles"

export const Checkout = () => {
  return(
    <>
    <MainContainerCheckout>
      <Register/>
      <CoffeeSelected/>
    </MainContainerCheckout>
    </>
  )
}