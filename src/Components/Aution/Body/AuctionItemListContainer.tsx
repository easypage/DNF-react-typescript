import axios from 'axios';
import React, { useEffect, useState } from 'react';
import itemLogo from '../../../asset/images/itemLogo.png';
import { AuctionData } from '../../Types/Auction/AuctionType';
import AuctionItemList from './AuctionItemList';

function AuctionItemListContainer() {
  const params = new URLSearchParams(window.location.search);
  const auctionItemName = params.get('itemName');
  const [AuctionItemData, setAuctionItemData] = useState<AuctionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=${auctionItemName}`)
      .then(auctionData => {
        setAuctionItemData(auctionData.data.rows);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-Container flex justify-center">
      {auctionItemName === null ? (
        <div className="h-[300px] flex justify-center items-center">
          <img src={itemLogo} alt="" />
        </div>
      ) : (
        <AuctionItemList AuctionItemData={AuctionItemData} loading={loading} />
      )}
    </div>
  );
}

export default AuctionItemListContainer;
