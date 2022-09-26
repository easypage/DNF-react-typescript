import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';
import AuctionItemList from './AuctionItemList';

function AuctionItemListContainer() {
  const params = new URLSearchParams(window.location.search);
  const auctionItemName = params.get('itemName');
  const [AuctionItemData, setAuctionItemData] = useState<AuctionData[]>([]);

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=${auctionItemName}`).then(auctionData => {
      setAuctionItemData(auctionData.data.rows);
    });
  }, []);

  return <div className="w-Container"> {auctionItemName !== null && AuctionItemData.length !== 0 && <AuctionItemList AuctionItemData={AuctionItemData} />}</div>;
}

export default AuctionItemListContainer;
