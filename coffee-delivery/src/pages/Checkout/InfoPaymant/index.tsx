import {
  ArtcileInfoTypePaymant,
  ArticleCreditCard,
  ArticleDebitCard,
  ArticleMoney,
  ArticleSubtitlePaymant,
  FigureCredit,
  FigureDebit,
  FigureDolar,
  FigureMoney,
  MainInfoPaymant,
  SectionInfoPaymant,
  SectionTypeOfPaymant,
} from "./styles";
import dolar from "../../../assets/svg/cifrao-purple.svg";
import credit from "../../../assets/svg/credit.svg";
import debit from "../../../assets/svg/debit.svg";
import money from "../../../assets/svg/money.svg";

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
        <SectionTypeOfPaymant>
          <ArticleCreditCard>
            <FigureCredit>
              <img src={credit} alt="" />
            </FigureCredit>
            <p>CARTÃO DE CRÉDITO</p>
          </ArticleCreditCard>
          <ArticleDebitCard>
            <FigureDebit>
              <img src={debit} alt="" />
            </FigureDebit>
            <p>CARTÃO DE CRÉDITO</p>
          </ArticleDebitCard>
          <ArticleMoney>
            <FigureMoney>
              <img src={money} alt="" />
            </FigureMoney>
            <p>CARTÃO DE CRÉDITO</p>
          </ArticleMoney>
        </SectionTypeOfPaymant>
      </SectionInfoPaymant>
    </MainInfoPaymant>
  );
};
