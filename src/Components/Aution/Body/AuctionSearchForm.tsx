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
    <div className="m-auto flex items-center justify-center w-2/4 h-16 border-4 border-yellow-300 border-solid rounded-full shadow-md mt-common">
      <input type="search" className="w-2/3 h-12 ml-5 outline-0" onChange={onChange} onKeyPress={handleKeyPress} />

      <button className="w-9 h-12 ml-5" onClick={auctionButtonOnClick}>
        검색
      </button>
    </div>
  );
}

export default AuctionSearchForm;
