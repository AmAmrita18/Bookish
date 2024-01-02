import Banner from "../components/Banner"
import CarouselCard from "../components/CarouselCard"
import BestSellerBooks from "./BestSellerBooks"
import FavBook from "./FavBook"
import OtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"
import Review from "./Review"


const Home = () => {
  return (
    <div className=" bg-yellow">
      
      <Banner/>
      <CarouselCard/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/> 
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home