import { useDispatch } from 'react-redux'

import Tag from '../Tag'
import Button from '../Button'

import { priceFormatter } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {priceFormatter(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {priceFormatter(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              onClick={addToCart}
              variant="primary"
              type="button"
              title="Clique aqui para adicionar ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
