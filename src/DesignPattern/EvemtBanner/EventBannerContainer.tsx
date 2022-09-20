import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { EventBannerData } from '../../Components/Types/EventBanner/BannerType';
import EventBanner from './EventBanner';

function EventBannerContainer() {
  const [eventBanner, setEventBanner] = useState<EventBannerData[]>([]);

  useEffect(() => {
    async function fetchBannerImage() {
      const data = await axios.get('https://dnf-react-typescript.herokuapp.com/event/banner');

      setEventBanner(data.data);
      console.log(data.data);
    }

    if (eventBanner.length == 0) {
      fetchBannerImage();
    }
  }, [eventBanner]);

  return <EventBanner eventBannerList={eventBanner} />;
}

export default EventBannerContainer;
