// import { useFormContext } from "react-hook-form";
import locale from "../../../assets/svg/locale.svg";
import { InfoPaymant } from "../InfoPaymant";
import { AddressForm } from "./AddressForm";
import {
  ArticleInformation,
  ArticleRegisterTtile,
  DetailsLocaleAddress,
  FigureIconLocale,
  MainRegisterCheckout,
  SectionRegisterAddress,
} from "./styles";

export const Register = () => {
  return (
    <MainRegisterCheckout>
      <ArticleRegisterTtile>
        <p>Complete seu pedido</p>
      </ArticleRegisterTtile>
      <SectionRegisterAddress>
        <ArticleInformation>
          <FigureIconLocale>
            <img src={locale} alt="Icone Localização" />
          </FigureIconLocale>
          <DetailsLocaleAddress>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </DetailsLocaleAddress>
        </ArticleInformation>
        <AddressForm />
      </SectionRegisterAddress>
      <InfoPaymant />
    </MainRegisterCheckout>
  );
};
