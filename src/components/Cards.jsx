import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Cards = () => {
  return (
    <div className='cards' >
        <Swiper
        slidesPerView={3.5}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Cards