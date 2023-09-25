import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{ 
    margin:0 ;
    padding: 0 ;
    box-sizing: border-box ;
    outline:none ;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none ;
  }
  
  body{
    background-color: ${(props) => props.theme['background-100']} ;
    color:${props => props.theme['base-title']} ;
    -webkit-font-smoothing: antiakiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif ;
    font-weight: 400 ;
    font-size: 1rem ;
  }

  ::-webkit-scrollbar{
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track{
    background:${porps => porps.theme['--base-button']} ;
  }

  ::-webkit-scrollbar-thumb{
    border: 2rem;
    background: ${porps => porps.theme['--purple']} ;
  }

`;
