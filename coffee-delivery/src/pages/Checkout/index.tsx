import { CoffeeSelected } from "./CoffeeSelected";
// import { InfoPaymant } from "./InfoPaymant"
import { Register } from "./Register";
import { MainContainerCheckout } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

enum PaymentMethods {
  credit = "credit",
  debid = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe o UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export const Checkout = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  // const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    // navigate("/confirmed");
    console.log("ola", data);
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
