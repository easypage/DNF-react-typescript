import React from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';

interface AuctionItemDataProps {
  AuctionItemData: AuctionData[];
}
function Auction({ AuctionItemData }: AuctionItemDataProps) {
  console.log(AuctionItemData);

  return (
    <div className="w-full flex justify-center mt-common">
      <table className="w-2/3 text-center ">
        <thead>
          <tr>
            <td>아이템 이미지</td>
            <td>아이템 이름</td>
            <td>수량</td>
            <td>즉시 구매 가격</td>
            <td>즉시 구매 개당가격</td>
          </tr>
        </thead>
        {AuctionItemData.map(auctionItem => (
          <tbody>
            <tr>
              <td>
                <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${auctionItem.itemId}`} alt={auctionItem.itemName} className="m-auto" />
              </td>
              <td>{auctionItem.itemName}</td>
              <td>{auctionItem.count}</td>
              <td>{auctionItem.currentPrice}</td>
              <td>{auctionItem.unitPrice}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Auction;
