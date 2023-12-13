import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import propic from "../assets/people/people1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="px-4 py-10 lg:px-32">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-off-white py-8 px-4 shadow-lg rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="text-lg font-medium">Emma Ping</h5>
                    <p className="font-extralight text-xs">CEO, ABC Company</p>
                  </div>
                </div>
                <div className="text-yellow flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white py-8 px-4 shadow-lg rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="text-lg font-medium">Emma Ping</h5>
                    <p className="font-extralight text-xs">CEO, ABC Company</p>
                  </div>
                </div>
                <div className="text-yellow flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white py-8 px-4 shadow-lg rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="text-lg font-medium">Emma Ping</h5>
                    <p className="font-extralight text-xs">CEO, ABC Company</p>
                  </div>
                </div>
                <div className="text-yellow flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white py-8 px-4 shadow-lg rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="text-lg font-medium">Emma Ping</h5>
                    <p className="font-extralight text-xs">CEO, ABC Company</p>
                  </div>
                </div>
                <div className="text-yellow flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white py-8 px-4 shadow-lg rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="text-lg font-medium">Emma Ping</h5>
                    <p className="font-extralight text-xs">CEO, ABC Company</p>
                  </div>
                </div>
                <div className="text-yellow flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white py-8 px-4 shadow-lg rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="text-lg font-medium">Emma Ping</h5>
                    <p className="font-extralight text-xs">CEO, ABC Company</p>
                  </div>
                </div>
                <div className="text-yellow flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
