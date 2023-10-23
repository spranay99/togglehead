import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

import Image1 from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";

const Home = () => {
  return (
    <div className='home'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a>Know More</a>
              </div>
            </div>
            <div className='image'>
              <img src={Image1} alt='image'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Viverra vitae</h1>
                <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna. </p>
                <a>Know more</a>
              </div>
            </div>
            <div className='image'>
              <img src={Image2} alt='image'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Curabitur vitae</h1>
                <p>Faucibus scelerisque eleifend donec pretium. Turpis egestas pretium aenean pharetra magna.</p>
                <a>Know more</a>
              </div>
            </div>
            <div className='image'>
              <img src={Image3} alt='image'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Faucibus vitae</h1>
                <p>Vitae sapien pellentesque habitant morbi tristique senectus. Leo duis ut diam quam nulla porttitor.</p>
                <a>Know more</a>
              </div>
            </div>
            <div className='image'>
              <img src={Image1} alt='image'/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home