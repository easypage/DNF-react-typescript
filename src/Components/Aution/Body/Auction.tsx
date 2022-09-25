import React from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';

interface AuctionItemDataProps {
  AuctionItemData: AuctionData[];
}

function Auction({ AuctionItemData }: AuctionItemDataProps) {
  return (
    <div className="w-full mt-5">
      {AuctionItemData.length !== 0 ? (
        <table className="w-full flex justify-center text-center m-auto ">
          <tbody>
            {AuctionItemData?.map(auctionItem => (
              <tr key={auctionItem.auctionNo} className="flex flex-row items-center h-16 bg-[#f1f1f1] shadow-md border-b border-solid border-gray-400 mt-4 ">
                <td className="w-14">
                  <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${auctionItem.itemId}`} alt={auctionItem.itemName} className="m-auto" />
                </td>
                <td className="w-48">{auctionItem.itemName}</td>
                <td className="w-40">{auctionItem.count.toLocaleString()}개</td>
                <td className="w-40">{auctionItem.currentPrice.toLocaleString()}원</td>
                <td className="w-40">{auctionItem.unitPrice.toLocaleString()}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center">입력하신 아이템이 없습니다.</div>
      )}
    </div>
  );
}

export default Auction;
