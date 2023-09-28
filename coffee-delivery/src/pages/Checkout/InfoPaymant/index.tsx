import {
  ArtcileInfoTypePaymant,
  ArticleSubtitlePaymant,
  FigureDolar,
  MainInfoPaymant,
  PaymentMethodOptionsContanier,
  SectionInfoPaymant,

} from "./styles";
import dolar from "../../../assets/svg/cifrao-purple.svg";
import { PaymentMethodInput } from "./PaymentMethodInput";
import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function InfoPaymant() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;
  return (
    <MainInfoPaymant>
      <SectionInfoPaymant>
        <ArtcileInfoTypePaymant>
          <FigureDolar>
            <img src={dolar} alt="" />
          </FigureDolar>
          <ArticleSubtitlePaymant>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </ArticleSubtitlePaymant>
        </ArtcileInfoTypePaymant>
      </SectionInfoPaymant>
      <PaymentMethodOptionsContanier>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register("paymentMethod")}
          />
        ))}

        {paymentMethodError && <p>{paymentMethodError}</p>}
      </PaymentMethodOptionsContanier>
    </MainInfoPaymant>
  );
}
