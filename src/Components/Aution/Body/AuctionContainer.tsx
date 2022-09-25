import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AuctionData } from '../../Types/Auction/AuctionType';
import Auction from './Auction';

function AuctionContainer() {
  const params = new URLSearchParams(window.location.search);
  const auctionItemName = params.get('itemName');
  const [AuctionItemData, setAuctionItemData] = useState<AuctionData[]>([]);

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=${auctionItemName}`).then(auctionData => {
      setAuctionItemData(auctionData.data.rows);
    });
  }, []);

  return <div className="w-Container"> {auctionItemName === null ? <div></div> : <Auction AuctionItemData={AuctionItemData} />}</div>;
}

export default AuctionContainer;
