import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            infos={game.infos}
            image={game.image}
            title={game.title}
            description={game.description}
            category={game.category}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
