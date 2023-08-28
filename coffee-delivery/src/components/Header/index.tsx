import logo from '../../assets/png/Logo.png'
import locale from '../../assets/svg/local.svg'
import cart from '../../assets/svg/cart.svg'
import { ArticleFigure, FigureCart, FigureLocale, LogoHeader, MainHeader, SectionHeader } from './styles'

export const Header = () => {
  return (
    <MainHeader>
      <SectionHeader>
        <LogoHeader>
          <img src={logo} alt="" />
        </LogoHeader>
        <ArticleFigure>
          <FigureLocale>
            <img src={locale} alt="" />
            <p>Porto Alegre, RS</p>
          </FigureLocale>
          <FigureCart>
            <img src={cart} alt="" />
          </FigureCart>
        </ArticleFigure>
      </SectionHeader>
    </MainHeader>
  )
}