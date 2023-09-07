import logo from "../../assets/png/Logo.png";
import locale from "../../assets/svg/local.svg";
import cart from "../../assets/svg/cart.svg";
import {
  ArticleFigure,
  FigureCart,
  FigureLocale,
  LogoHeader,
  MainHeader,
  SectionHeader,
} from "./styles";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <MainHeader>
      <SectionHeader>
        <NavLink to="/" title="Home">
          <LogoHeader>
            <img src={logo} alt="" />
          </LogoHeader>
        </NavLink>
        <ArticleFigure>
          <FigureLocale>
            <img src={locale} alt="" />
            <p>Porto Alegre, RS</p>
          </FigureLocale>
          <NavLink to="checkout" title="Checkout">
            <FigureCart>
              <img src={cart} alt="" />
            </FigureCart>
          </NavLink>
        </ArticleFigure>
      </SectionHeader>
    </MainHeader>
  );
};
