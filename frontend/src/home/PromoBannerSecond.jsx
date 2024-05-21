import { Link } from "react-router-dom";
import bookPic from "../assets/promo-banner/banner1.png"
const PromoBannerSecond = () => {
  return (
    <div className=" py-24 bg-blue-extra-dark px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
      <div>
            <img src={bookPic} className="md:h-[380px] md:w-[380px] h-[320px] w-[320px] mx-8"/>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className=" lg:text-6xl md:text-4xl text-3xl text-off-white font-bold mb-4 leading-snug ">Explore our <span className="text-yellow">Book</span> collections</h2>
          <p className="md:text-base text-sm text-off-white ">Discover a wide range of genres and dive into captivating stories
            that will transport you to different worlds. Embark on a literary journey through our diverse book collection, where every page holds a new adventure waiting to unfold.</p>
          <Link to="/shop" className="mt-6 block"><button className="bg-blue-extra-dark border-yellow text-white font-semibold rounded hover:text-yellow hover:border-off-white border-2 px-5 py-2 transition-all duration-300 ">Browse Collections</button></Link>
        </div>
       
      </div>
    </div>
  );
};

export default PromoBannerSecond;
