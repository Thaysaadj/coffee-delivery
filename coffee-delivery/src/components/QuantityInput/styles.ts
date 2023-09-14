import { styled } from "styled-components";

export const QuantityInputContainer = styled.div`
  flex:1 ;
  background-color:${props => props.theme['--base-button']} ;
  display:flex ;
  align-items:center;
  justify-content:space-between ;
  gap: 4px ;
  border-radius: 6px ;
  padding: 0.5rem ;

  input{

    text-align:center ;
    width: 100% ;
    background:  none;
    border: none ;
    color: ${props => props.theme['--base-title']}
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus{
    outline: none ;
  }
`

export const IconWrapper = styled.button.attrs({type: "button"})`
  width: 0.875rem ;
  height: 0.875rem ;
  border: none ;
  color:${props => props.theme['--purple']} ;
  transition:  0.4s;
  background:none ;

  &:disabled{
    opacity:0.4 ;
  }

  &:not(:disabled):hover{
    color:${props => props.theme['--purple-dark']}
  }
`