import { Link } from "react-router-dom";
import favBookImg from "../assets/FavBookImage.png";
const FavBook = () => {
  return (
    <div className="my-20 px-4 lg:px-32 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="w-1/2 md:w-1/2">
        <img src={favBookImg} alt="" className="rounded md:w-10/12 brightness-90" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold md:my-5 pr-2 my-0  leading-snug">
          Find Your Favourite<br/> <span className="text-blue">Book Here!</span>
        </h2>
        <p className="mb-10 lg:text-lg text-base md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quae eum, id nam eius doloribus tenetur maiores iste maxime
          consequatur. Dolor veniam ullam sit saepe alias illum repellat quam
          quo.
        </p>
        {/*Stats*/}
        <div className="flex flex-row md:justify-between justify-start gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="lg:text-3xl md:text-2xl text-xl font-bold">800+</h3>
            <p className="lg:text-base text-xs">Book Listing</p>
          </div>
          <div>
            <h3 className="lg:text-3xl md:text-2xl text-xl font-bold">550+</h3>
            <p className="lg:text-base text-xs">Register Users</p>
          </div>
          <div>
            <h3 className="lg:text-3xl md:text-2xl text-xl font-bold">1200+</h3>
            <p className="lg:text-base text-xs">PDF Downloads</p>
          </div>
        </div>

        <Link to="/shop" className="mt-12 block"><button className="bg-blue text-white font-semibold rounded hover:bg-blue-extra-dark px-5 py-2 transition-all duration-300 ">Explore More</button></Link>
      </div>
    </div>
  );
};

export default FavBook;
