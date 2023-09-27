import Tag from '../Tag'
import { Card, Title, Description } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.it/222x250" alt="" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>Descrição</Description>
  </Card>
)

export default Product
