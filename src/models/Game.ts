class Game {
  infos: string[]
  image: string
  title: string
  description: string
  category: string
  system: string
  id: number

  constructor(
    infos: string[],
    image: string,
    title: string,
    description: string,
    category: string,
    system: string,
    id: number
  ) {
    this.infos = infos
    this.image = image
    this.title = title
    this.description = description
    this.category = category
    this.system = system
    this.id = id
  }
}

export default Game
