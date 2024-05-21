import { Link } from "react-router-dom";
import bookPic from "../assets/promo-banner/banner2.png"
const PromoBanner = () => {
  return (
    <div className="mt-16 py-24 bg-blue-extra-dark px-4 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* <h2 className="text-5xl font-bold text-white mb-6 leading-Snug">Explore our <span className="text-yellow">Book</span> collections</h2> */}
          <h2 className=" lg:text-6xl md:text-4xl text-3xl text-off-white font-bold mb-4 leading-snug ">Share the Joy of<br/>Reading: <span className="text-yellow">Sell Your Books</span> with Us!</h2>
          <p className="md:text-base text-sm text-off-white ">Welcome to our Sell Books section!<br/> Join our community of literary enthusiasts and let your books continue their journey, finding new homes and bringing joy to fellow readers. It&apos;s time to share the love, and make someone else&apos;s reading experience extraordinary.</p>
          <Link to="/admin/dashboard" className="mt-6 block"><button className="bg-blue-extra-dark border-yellow text-white font-semibold rounded hover:text-yellow hover:border-off-white border-2 px-5 py-2 transition-all duration-300 ">Sell your book</button></Link>
        </div>
        <div>
            <img src={bookPic} className="md:h-[380px] md:w-[380px] h-[320px] w-[320px] mx-8"/>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
