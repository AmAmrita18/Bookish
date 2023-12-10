import Banner from "../components/Banner"
import BestSellerBooks from "./BestSellerBooks"


const Home = () => {
  return (
    <div className="lg:px-40 bg-yellow">
      <Banner/>
      <BestSellerBooks/>
    </div>
  )
}

export default Home