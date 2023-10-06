import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleGameQuery, useGetSoonGameQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } =
    useGetOnSaleGameQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonGameQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="sale"
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
