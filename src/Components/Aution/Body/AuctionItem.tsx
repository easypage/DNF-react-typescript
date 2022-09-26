import React from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';

interface AuctionItemDataProps {
  AuctionItemData: AuctionData[];
}

function AuctionItem({ AuctionItemData }: AuctionItemDataProps) {
  return (
    <ul>
      {AuctionItemData?.map(auctionItem => (
        <li key={auctionItem.auctionNo} className="flex flex-row items-center h-16 bg-[#f1f1f1] shadow-md mt-2 ">
          <div className="w-14">
            <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${auctionItem.itemId}`} alt={auctionItem.itemName} className="m-auto" />
          </div>
          <p className="w-48">{auctionItem.itemName}</p>
          <p className="w-40">{auctionItem.count.toLocaleString()}개</p>
          <p className="w-40">{auctionItem.currentPrice.toLocaleString()}원</p>
          <p className="w-40">{auctionItem.unitPrice.toLocaleString()}원</p>
        </li>
      ))}
    </ul>
  );
}

export default AuctionItem;
