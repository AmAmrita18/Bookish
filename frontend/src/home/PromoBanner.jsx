import React from "react";
import { Link } from "react-router-dom";
import bookPic from "../assets/book-award.png"
const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-blue-extra-dark px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-6 leading-Snug">2023 National Book Award for Fiction Shortlist</h2>
          <Link to="/shop" className="mt-12 block"><button className="bg-blue text-white font-semibold rounded hover:bg-blue-extra-dark px-5 py-2 transition-all duration-300 ">Get Promo Code</button></Link>
        </div>
        <div>
            <img src={bookPic}/>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
