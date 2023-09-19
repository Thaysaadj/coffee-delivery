import { CoffeeSelected } from "./CoffeeSelected";
// import { InfoPaymant } from "./InfoPaymant"
import { Register } from "./Register";
import { MainContainerCheckout } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP")
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export const Checkout = () => {

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const {handleSubmit} = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData){
    console.log("olaa",data) 
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <MainContainerCheckout onSubmit={handleSubmit(handleConfirmOrder)}>
        <Register />
        <CoffeeSelected />
      </MainContainerCheckout>
    </FormProvider>
  );
};
   