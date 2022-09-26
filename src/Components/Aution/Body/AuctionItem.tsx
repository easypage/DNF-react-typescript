import React from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';

interface AuctionItemDataProps {
  AuctionItemData: AuctionData[];
}

function AuctionItem({ AuctionItemData }: AuctionItemDataProps) {
  return (
    <ul>
      <li className="flex flex-row justify-center items-center h-10 bg-[#ffffff] border-b border-t border-solid shadow-md mt-3">
        <p className="w-AuctionItem">아이템</p>
        <p className="w-40">수량</p>
        <p className="w-40">총 구매</p>
        <p className="w-40">개당 가격</p>
      </li>
      {AuctionItemData?.map(auctionItem => (
        <li key={auctionItem.auctionNo} className="flex flex-row items-center h-16 bg-[#f1f1f1] shadow-md mt-4 ">
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
