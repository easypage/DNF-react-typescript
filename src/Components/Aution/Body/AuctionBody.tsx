import React from 'react';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';
import AuctionItemListContainer from './AuctionItemListContainer';
import AuctionSearchForm from './AuctionSearchForm';

function AuctionBody() {
  return (
    <div className="w-Container m-auto">
      <p className="text-center mt-common text-4xl font-Noto font-bold">경매장 </p>
      <AuctionSearchForm />
      <EventBannerContainer />
      <AuctionItemListContainer />
    </div>
  );
}

export default AuctionBody;
