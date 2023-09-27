import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const discount: Game[] = [
  {
    infos: ['-10%', 'R$ 249,90'],
    image: resident,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Ação',
    system: 'Windows',
    id: 1
  },
  {
    infos: ['-20%', 'R$ 199,90'],
    image: starWars,
    title: 'Star Wars Jedi Survivor',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    category: 'Aventura',
    system: 'Windows',
    id: 2
  },
  {
    infos: ['-10%', 'R$ 250,00'],
    image: resident,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Ação',
    system: 'Windows',
    id: 3
  },
  {
    infos: ['-20%', 'R$ 199,90'],
    image: starWars,
    title: 'Star Wars Jedi Survivor',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    category: 'Aventura',
    system: 'Windows',
    id: 4
  }
]

const soon: Game[] = [
  {
    infos: ['30/09'],
    image: diablo,
    title: 'Diablo 4',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    category: 'RPG',
    system: 'Windows',
    id: 5
  },
  {
    infos: ['05/10'],
    image: zelda,
    title: 'The Legend Of Zelda: TOK',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    category: 'RPG',
    system: 'Switch',
    id: 6
  },
  {
    infos: ['30/09'],
    image: diablo,
    title: 'Diablo 4',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    category: 'RPG',
    system: 'Windows',
    id: 7
  },
  {
    infos: ['05/10'],
    image: zelda,
    title: 'The Legend Of Zelda: TOK',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    category: 'RPG',
    system: 'Switch',
    id: 8
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={discount} title="Promoções" background="gray" />
    <ProductsList games={soon} title="Em breve" background="black" />
  </>
)

export default Home
