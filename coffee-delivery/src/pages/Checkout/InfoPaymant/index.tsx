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

export const InfoPaymant = () => {
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
        <PaymentMethodInput/>
        <PaymentMethodInput/>
        <PaymentMethodInput/>
      </PaymentMethodOptionsContanier>
    </MainInfoPaymant>
  );
};
