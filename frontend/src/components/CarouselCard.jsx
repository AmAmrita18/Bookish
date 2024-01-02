import { Carousel } from 'flowbite-react';
import { sliders } from '../utils/sliders';

const CarouselCard = () => {
  const image1 = 'src/assets/carousel-card/carousel-7.jpg'
  return (
    <div className='w-[100%]  rounded-none py-10 px-4 lg:px-32 bg-cover' style={{ backgroundImage: `url('${image1}')`}}>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={3000}>
                {
                  sliders.map((slider) => (
                     <div key={slider.id} className='relative'>
                      <img src={slider.image} className="w-full h-full object-cover" alt="..." />
                      <div className='bg-blue-extra-dark p-2 gap-2  bg-opacity-60 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
                        <h2 className='text-off-white font-semibold text-2xl  rounded-md text-center'>{slider.quote}</h2>
                        <p className=' text-off-white text-base'>{slider.author}</p>
                      </div>
                    </div> 
                  ))
                }
              
            </Carousel>
          </div>
    </div>
  )
}

export default CarouselCard