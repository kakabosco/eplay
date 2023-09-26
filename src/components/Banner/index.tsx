import { Image, Title, Prices } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
      <Prices>
        De <span>R$ 250,00</span> <br />
        Por apenas R$ 200,00
      </Prices>
    </div>
  </Image>
)

export default Banner
