import Banner from "../components/Banner"
import CarouselCard from "../components/CarouselCard"
import BestSellerBooks from "./BestSellerBooks"
import FavBook from "./FavBook"
import OtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"
import Review from "./Review"
import PromoBannerSecond from "./PromoBannerSecond"

const Home = () => {
  return (
    <div className="w-full bg-yellow">
      <Banner/>
      <CarouselCard/>
      <PromoBannerSecond/>
      <OtherBooks/>
      <FavBook/>
      <PromoBanner/>
      <BestSellerBooks/>
      <Review/>
    </div>
  )
}

export default Home