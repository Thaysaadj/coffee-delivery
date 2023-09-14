import {useContext} from 'react'
import { CartContext } from '../context/CoffeeContext'

export function useCart () {
  const context = useContext(CartContext)
  return context
}