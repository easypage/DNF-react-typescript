import React, { useState } from 'react';

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
      <input type="search" className="w-[585px] h-12 outline-0 flex justify-start" onChange={onChange} onKeyPress={handleKeyPress} value={auctionItemName} placeholder="아이템을 입력해 주세요." />
      <button className="w-[40px] h-12 flex items-center  ml-5 " onClick={auctionButtonOnClick}>
        검색
      </button>
    </div>
  );
}

export default AuctionSearchForm;
