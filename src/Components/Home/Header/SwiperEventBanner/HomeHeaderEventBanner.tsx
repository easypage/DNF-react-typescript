import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import HomeHeaderEventBannerCard from './HomeHeaderEventBannerCard';

function HomeHeaderEventBanner() {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  return (
    <Swiper
      className="w-Container m-auto"
      centeredSlides
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 200000, disableOnInteraction: false }}
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <HomeHeaderEventBannerCard />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default HomeHeaderEventBanner;
