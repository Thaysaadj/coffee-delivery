import locale from "../../../assets/svg/locate-wite.svg";
import timer from "../../../assets/svg/timer.svg";
import cifrao from "../../../assets/svg/cifrao.svg";
import ilustration from "../../../assets/svg/Illustration.svg";
import {
  ArticleDeliveryPlaceConfirmationOrder,
  ArticleFormOfPaymentConfirmationOrder,
  ArticleTimerConfirmationOrder,
  ArticleTitleConfirmedOrder,
  FigureFormOfPayment,
  FigureLocale,
  FigureTimer,
  MainConfirmedOrder,
  SectionIlustration,
  SectionInformationConfirmationOrder,
  SectionItemsConfirmedOrder,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "..";
import { paymentMethods } from "../InfoPaymant";
import {useEffect} from 'react'

interface LocationType {
  state : OrderData
}

export const ConfirmedOrder = () => {

  const {state} = useLocation() as unknown as LocationType
  console.log("aquii", state)

  const navigate = useNavigate()

  useEffect(() => {
    if(!state){
      navigate("/")
    }
  }, [])

  if(!state) return <></>

  return (
    <MainConfirmedOrder>
      <SectionItemsConfirmedOrder>
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
              Entrega em <strong>{state.street}, {state.number}</strong>
              <br/>
              {state.district} - {state.city}, {state.uf}
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
            <p>
              Pagamento na entrega <strong>{paymentMethods[state.paymentMethod].label}</strong>
            </p>
          </ArticleFormOfPaymentConfirmationOrder>
        </SectionInformationConfirmationOrder>
      </SectionItemsConfirmedOrder>
      <SectionIlustration>
        <img src={ilustration} alt="" />
      </SectionIlustration>
    </MainConfirmedOrder>
  );
};
