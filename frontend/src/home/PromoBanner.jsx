import { Link } from "react-router-dom";
import bookPic from "../assets/book-award.png"
const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-blue-extra-dark px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-6 leading-Snug"><span className="text-yellow">2023 National Book Award</span> <br /> for Fiction Shortlist</h2>
          <Link to="/shop" className="mt-12 block"><button className="bg-blue-extra-dark border-yellow text-white font-semibold rounded hover:text-yellow hover:border-off-white border-2 px-5 py-2 transition-all duration-300 ">Get Promo Code</button></Link>
        </div>
        <div>
            <img src={bookPic} className="h-72 w-72 mx-8"/>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
