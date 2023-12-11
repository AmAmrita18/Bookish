import React from "react";
import favBookImg from "../assets/fav-books/FavBook4.jpg";
const FavBook = () => {
  return (
    <div className="px-4 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="w-1/2 md:w-1/2">
        <img src={favBookImg} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5  leading-snug">
          Find Your Favourite <span className="text-blue">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quae eum, id nam eius doloribus tenetur maiores iste maxime
          consequatur. Dolor veniam ullam sit saepe alias illum repellat quam
          quo.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
