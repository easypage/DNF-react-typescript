import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AuctionSearchForm() {
  const [auctionItemName, setAuctionItemName] = useState('');
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAuctionItemName(e.currentTarget.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && auctionItemName !== '') {
      window.location.href = `auction?itemName=${auctionItemName}`;
    }
  };
  const auctionButtonOnClick = () => {
    window.location.href = `/auction?itemName=${auctionItemName}`;
  };
  return (
    <div className="w-AuctionSearchForm h-14 flex items-center justify-center border-4 border-yellow-300 border-solid rounded-full shadow-md mt-common m-auto ">
      <input type="search" className="w-2/3 h-12 outline-0 flex justify-start" onChange={onChange} onKeyPress={handleKeyPress} value={auctionItemName} />
      <button className="w-20 h-12 flex items-center justify-center ml-5 " onClick={auctionButtonOnClick}>
        검색
      </button>
    </div>
  );
}

export default AuctionSearchForm;
