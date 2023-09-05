import locale from "../../../assets/svg/locale.svg";
import timer from "../../../assets/svg/timer.svg";
import cifrao from "../../../assets/svg/cifrao.svg";
import ilustration from '../../../assets/svg/Illustration.svg'
import { ArticleDeliveryPlaceConfirmationOrder, ArticleFormOfPaymentConfirmationOrder, ArticleTimerConfirmationOrder, ArticleTitleConfirmedOrder, FigureFormOfPayment, FigureLocale, FigureTimer, MainConfirmedOrder, SectionIlustration, SectionInformationConfirmationOrder } from "./styles";

export const ConfirmedOrder = () => {
  return (
    <MainConfirmedOrder>
      <ArticleTitleConfirmedOrder>
        <p>Uhu! Pedido confirmado</p>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </ArticleTitleConfirmedOrder>
      <SectionInformationConfirmationOrder>
        <ArticleDeliveryPlaceConfirmationOrder>
          <FigureLocale>
            <img src={locale} alt="" />
          </FigureLocale>
          <p>
            Entrega em <strong>Rua João Daniel Martinelli</strong>, 102 Farrapos
            - Porto Alegre, RS
          </p>
        </ArticleDeliveryPlaceConfirmationOrder>
        <ArticleTimerConfirmationOrder>
          <FigureTimer>
            <img src={timer} alt="" />
          </FigureTimer>
          <p>
            Previsão de entrega <strong>20 min - 30 min</strong>
          </p>
        </ArticleTimerConfirmationOrder>
        <ArticleFormOfPaymentConfirmationOrder>
          <FigureFormOfPayment>
            <img src={cifrao} alt="" />
          </FigureFormOfPayment>
          <p>Pagamento na entrega <strong>Cartão de Crédito</strong></p>
        </ArticleFormOfPaymentConfirmationOrder>
      </SectionInformationConfirmationOrder>
      <SectionIlustration>
        <img src={ilustration} alt="" />
      </SectionIlustration>
    </MainConfirmedOrder>
  );
};
