import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6' ;

const BookCards = ({headline, books}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-blue-extra-dark my-5'>{headline}</h2>

        {/*cards*/}
        <div className='mt-12'> 
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
        
        {
           books.map(book => <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
            <div className='relative'>
                <img src={book.imageURL} alt=""/>
                <div className='absolute top-3 right-3 bg-blue hover:bg-blue-extra-dark p-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
            </div>
            <div>
                <h3>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <div>$10.00</div>
                </h3>
            </div>
            </Link>
           </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCards