import Banner from "../components/Banner"
import BestSellerBooks from "./BestSellerBooks"
import FavBook from "./FavBook"


const Home = () => {
  return (
    <div className="lg:px-40 bg-yellow">
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
    </div>
  )
}

export default Home