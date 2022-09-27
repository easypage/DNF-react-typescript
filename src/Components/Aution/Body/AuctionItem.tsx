import React from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';
import '../../../css/auction.css';
interface AuctionItemDataProps {
  AuctionItemData: AuctionData[];
}

function AuctionItem({ AuctionItemData }: AuctionItemDataProps) {
  return (
    <div>
      <div className="flex flex-row justify-center items-center h-10 rounded-md font-bold  border-gray-400 border-t-2 border-solid shadow-md mt-3">
        <p className="w-AuctionItem m-auto">아이템</p>
        <p className="w-24">수량</p>
        <p className="w-40">총 구매</p>
        <p className="w-36">개당 가격</p>
      </div>

      <ul>
        {AuctionItemData?.map(auctionItem => (
          <li key={auctionItem.auctionNo} className="flex flex-row items-center h-16 bg-[#f1f1f1] shadow-md mt-4 ">
            <div className="w-14">
              <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${auctionItem.itemId}`} alt={auctionItem.itemName} className="m-auto" />
            </div>
            <p className="w-AuctionItem">{auctionItem.itemName}</p>
            <p className="w-24">{auctionItem.count.toLocaleString()}개</p>
            <p className="w-40">{auctionItem.currentPrice.toLocaleString()}원</p>
            <p className="w-36">{auctionItem.unitPrice.toLocaleString()}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionItem;
