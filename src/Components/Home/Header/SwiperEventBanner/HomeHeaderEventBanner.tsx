import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import HomeHeaderEventBannerCard from './HomeHeaderEventBannerCard';
import axios from 'axios';

interface EventBannerData {
  url: string;
  img: string;
}

function HomeHeaderEventBanner() {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  const [bannerImage, setBannerImage] = useState<EventBannerData[]>([]);

  useEffect(() => {
    async function fetchBannerImage() {
      const data = await axios.get('https://dnf-react-typescript.herokuapp.com/event/banner');
      console.log(data.data[0]);

      setBannerImage(data.data);
    }

    if (bannerImage.length == 0) {
      fetchBannerImage();
    }
  }, [bannerImage]);

  return (
    <Swiper
      className="w-Container m-auto shadow-xl mt-6 "
      centeredSlides
      spaceBetween={0}
      initialSlide={1}
      slidesPerView={1}
      speed={1000}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
    >
      {bannerImage.map(banner => (
        <SwiperSlide key={banner.url}>
          <HomeHeaderEventBannerCard imgUrl={banner.img} url={banner.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeHeaderEventBanner;
