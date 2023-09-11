import locale from "../../../assets/svg/locale.svg";
import { InfoPaymant } from "../InfoPaymant";
import {
  ArticleInformation,
  ArticleRegisterTtile,
  DetailsLocaleAddress,
  FigureIconLocale,
  InputCEP,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputRoad,
  InputState,
  MainRegisterCheckout,
  SectionCEPAndRoad,
  SectionCompletAddress,
  SectionFinalComplement,
  SectionLocaleAddressInput,
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
        <form>
          <SectionLocaleAddressInput>
            <SectionCEPAndRoad>
              <InputCEP placeholder="CEP" />

              <InputRoad placeholder="Rua" />
            </SectionCEPAndRoad>
            <SectionCompletAddress>
              <InputNumber placeholder="Número" />

              <InputComplement placeholder="Complemento" />
            </SectionCompletAddress>
            <SectionFinalComplement>
              <InputNeighborhood placeholder="Bairro" />

              <InputCity placeholder="Cidade" />

              <InputState placeholder="UF" />
            </SectionFinalComplement>
          </SectionLocaleAddressInput>
        </form>
      </SectionRegisterAddress>
      <InfoPaymant />
    </MainRegisterCheckout>
  );
};
