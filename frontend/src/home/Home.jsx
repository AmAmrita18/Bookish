import Banner from "../components/Banner"
import BestSellerBooks from "./BestSellerBooks"
import FavBook from "./FavBook"
import OtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"


const Home = () => {
  return (
    <div className=" bg-yellow">
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/> 
      <OtherBooks/>
    </div>
  )
}

export default Home