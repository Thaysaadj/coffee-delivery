import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayouts"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { ConfirmedOrder } from "./pages/Checkout/ConfirmedOrder"

export const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/confirmed-order" element={<ConfirmedOrder/>}/>
      </Route>
    </Routes>
  )
}