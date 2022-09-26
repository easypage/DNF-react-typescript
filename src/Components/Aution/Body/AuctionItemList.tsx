import React from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';
import AuctionItem from './AuctionItem';

interface AuctionItemDataProps {
  AuctionItemData: AuctionData[];
}

function AuctionItemList({ AuctionItemData }: AuctionItemDataProps) {
  return (
    <div className="w-full mt-5">
      {AuctionItemData.length !== 0 ? (
        <div className="w-full flex justify-center text-center m-auto ">
          <AuctionItem AuctionItemData={AuctionItemData} />
        </div>
      ) : (
        <div className="flex justify-center">입력하신 아이템이 없습니다.</div>
      )}
    </div>
  );
}

export default AuctionItemList;
