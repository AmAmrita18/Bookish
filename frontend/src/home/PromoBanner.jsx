import { Link } from "react-router-dom";
import bookPic from "../assets/book-award.png"
const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-blue-extra-dark px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-white mb-6 leading-Snug">Explore our <span className="text-yellow">Book</span> collections</h2>
          <p className="text-base text-off-white ">Discover a wide range of genres and dive into captivating stories
            that will transport you to different worlds.</p>
          <Link to="/shop" className="mt-6 block"><button className="bg-blue-extra-dark border-yellow text-white font-semibold rounded hover:text-yellow hover:border-off-white border-2 px-5 py-2 transition-all duration-300 ">Browse Collections</button></Link>
        </div>
        <div>
            <img src={bookPic} className="h-72 w-72 mx-8"/>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
