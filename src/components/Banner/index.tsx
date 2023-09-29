import { useEffect, useState } from 'react'
import { Image, Title, Prices } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { priceFormatter } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="large">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{priceFormatter(game.prices.old)}</span> <br />
            Por apenas {priceFormatter(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to="/product"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar oferta
        </Button>
      </div>
    </Image>
  )
}

export default Banner
