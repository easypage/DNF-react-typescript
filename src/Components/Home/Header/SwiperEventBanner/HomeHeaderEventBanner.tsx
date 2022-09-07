import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import HomeHeaderEventBannerCard from './HomeHeaderEventBannerCard';
import axios from 'axios';

function HomeHeaderEventBanner() {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  const [bannerImage, setBannerImage] = useState<string[]>([]);

  useEffect(() => {
    async function fetchBannerImage() {
      const data = await axios.get('https://dnf-react-typescript.herokuapp.com/event/banner');
      setBannerImage(data.data);
    }

    if (bannerImage.length == 0) {
      fetchBannerImage();
    }
  }, [bannerImage]);

  return (
    <Swiper className="w-Container m-auto" centeredSlides spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 200000, disableOnInteraction: false }} loop>
      {bannerImage.map(banner => (
        <SwiperSlide key={banner}>
          <HomeHeaderEventBannerCard imgUrl={banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeHeaderEventBanner;
