import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Banner } from "./components/MainBanner"
import { AllCoffees } from "./components/AllCoffees"
export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Banner/>
      <GlobalStyle/>
      <AllCoffees/>
    </ThemeProvider>
  )
}
