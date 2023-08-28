import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{ 
    margin:0 ;
    padding: 0 ;
    box-sizing: border-box ;
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
`;
