import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.it/222x250"
          title="Nome do jogo"
          description="Descrição do produto"
          category="Ação"
          system="Windows"
        />
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.it/222x250"
          title="Nome do jogo"
          description="Descrição do produto"
          category="Ação"
          system="Windows"
        />
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.it/222x250"
          title="Nome do jogo"
          description="Descrição do produto"
          category="Ação"
          system="Windows"
        />
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.it/222x250"
          title="Nome do jogo"
          description="Descrição do produto"
          category="Ação"
          system="Windows"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
