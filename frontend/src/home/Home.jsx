import Banner from "../components/Banner"
import FavouriteBooks from "./FavouriteBooks"


const Home = () => {
  return (
    <div className="lg:px-40 bg-peach-light">
      <Banner/>
      <FavouriteBooks/>
    </div>
  )
}

export default Home