import { Link } from "react-router-dom";
import { useState } from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {

  const [search, setSearch] = useState();
  
  return (
    <div className="px-4  min-h-screen lg:px-32 bg-yellow flex items-center">
      <div className="flex w-full flex-col-reverse md:flex-row justify-between items-center gap-12 pt-40 pb-20">
        {/*left side */}
        <div className="lg:w-1/2 space-y-10 h-full">
          
          <h2 className=" lg:text-6xl md:text-4xl text-3xl text-blue-extra-dark font-bold leading-snug ">Explore, Purchase & Sell <span className="text-blue">Books with Ease</span></h2>
          <h4 className="md:text-2xl text-xl font-bold font-sans text-blue-extra-dark italic">&#10077; Your Next Chapter Begins Here! &#10078;</h4>
          <p className="lg:w-4/5">Dive into a curated collection, find your next read, and even share your favorites with fellow book enthusiasts. Join us in celebrating the joy of reading – where every page tells a story, and every book finds a new chapter in someone&apos;s hands.</p>
          <Link to="/about" className="mt-12 block"><button className="bg-blue text-white font-semibold rounded hover:bg-blue-extra-dark px-5 py-2 transition-all duration-300 ">Know More</button></Link>
        </div>

        {/*right side */}
        <div className="lg:pr-0 md:pr-24 pr-0">
          <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
