import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { formataPreco, getTotalPrice } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispath = useDispatch()

  const closeCart = () => {
    dispath(close())
  }

  const removeItem = (id: number) => {
    dispath(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice(items))}{' '}
          <span>Em ate 6x sem juros</span>
        </Prices>
        <Button
          onClick={goToCheckout}
          title="Clique aqui para continua com a compra"
          type="button"
        >
          Continua com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
