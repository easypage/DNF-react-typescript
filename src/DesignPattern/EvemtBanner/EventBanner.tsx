import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../../css/swiper.css';

import { EventBannerData } from '../../Components/Types/EventBanner/BannerType';

import EventBannerCard from './EventBannerCard';

interface EventBannerProps {
  eventBannerList: EventBannerData[];
}

function EventBanner({ eventBannerList }: EventBannerProps) {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <Swiper
      className="w-full shadow-xl mt-common "
      centeredSlides
      spaceBetween={0}
      initialSlide={1}
      slidesPerView={1}
      speed={1000}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
    >
      {eventBannerList.map(banner => (
        <SwiperSlide key={banner.url}>
          <EventBannerCard imgUrl={banner.img} url={banner.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default EventBanner;
