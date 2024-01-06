import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import propic1 from "../assets/people/people-1.png";
import propic2 from "../assets/people/people-2.png";
import propic3 from "../assets/people/people-3.png";
import propic4 from "../assets/people/people-4.png";
import propic5 from "../assets/people/people-5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="px-4 py-10 lg:px-32">
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center mb-10 leading-snug">
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
          <SwiperSlide className="bg-off-white mb-16 hover:brightness-90 pt-8 px-4 shadow-md shadow-off-white rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic1}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="md:text-lg text-base font-medium">Emma Grace</h5>
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
                <p className="mb-5 md:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white mb-16 hover:brightness-90 pt-8 px-4 shadow-md shadow-off-white rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic2}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="md:text-lg text-base font-medium">Olivia Rose</h5>
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
                <p className="mb-5 md:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white mb-16 hover:brightness-90 pt-8 px-4 shadow-md shadow-off-white rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic3}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="md:text-lg text-base font-medium">Ava Marie</h5>
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
                <p className="mb-5 md:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white mb-16 hover:brightness-90 pt-8 px-4 shadow-md shadow-off-white rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic4}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="md:text-lg text-basefont-medium">Sophia Joy</h5>
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
                <p className="mb-5 md:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta officia totam corporis ipsum labore. Delectus velit
                  dolore, dolor ea minima sequi sit, maiores suscipit sunt
                  dolorum quia facere dicta voluptas!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-off-white mb-16 hover:brightness-90 pt-8 px-4 shadow-md shadow-off-white rounded-lg">
            <div className=" space-y-6">
              <div className="flex flex-row gap-16">
                <div className="flex flex-row gap-2">
                  <Avatar
                    img={propic5}
                    className="w-10 mb-4"
                    alt="avatar of Jese"
                    rounded
                  />
                  <div>
                    <h5 className="md:text-lg text-base font-medium">Isabella Hope</h5>
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
                <p className="mb-5 md:text-base text-sm">
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
