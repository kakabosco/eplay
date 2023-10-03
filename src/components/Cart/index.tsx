import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import {
  CartContainer,
  Overlay,
  Quantity,
  Sidebar,
  Prices,
  CartItem
} from './styles'
import Tag from '../Tag'
// import starwars from '../../assets/images/star_wars.png'
import { priceFormatter } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce(
      (accumulator, currentPrice) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (accumulator += currentPrice.prices.current!),
      0
    )
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
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
                <span>{priceFormatter(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos no carrinho</Quantity>
        <Prices>
          Total de {priceFormatter(getTotalPrice())}{' '}
          <span>Em até 6x s/juros</span>
        </Prices>
        <Button title="Clique para continuar comprando" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
