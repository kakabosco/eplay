import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleGameQuery, useGetSoonGameQuery } from '../../services/api'

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
