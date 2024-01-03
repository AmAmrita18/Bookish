// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
  return (
    <div className=" px-4 pb-7 lg:px-32 bg-off-white">
      <h2 className="text-5xl text-center font-bold text-blue-extra-dark pt-10">
        {headline}
      </h2>

      {/*cards*/}
      <div className="mt-12 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className="bg-blue-extra-dark hover:brightness-75 px-3 py-3 rounded-md mb-14">
              <Link to={`/book/${book._id}`} className="">
                <div className="relative">
                  <img
                    src={book.imageURL}
                    className="w-[212px] h-[284px] mb-2"
                    alt=""
                  />
                  <div className="absolute top-3 right-3 bg-blue hover:bg-blue-extra-dark p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col gap-2 px-1">
                    <h3 className="font-semibold text-ellipsis truncate text-off-white text-lg">
                      {book.title}
                    </h3>
                    <p className="text-sm font-light text-off-white">
                      {book.author}
                    </p>
                    <div className="flex justify-between w-full">
                      <p className="text-xs font-bold text-yellow">
                        {book.category}
                      </p>
                      <div className="text-xs text-yellow">$10.00</div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
