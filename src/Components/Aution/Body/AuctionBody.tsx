import React from 'react';
import AuctionContainer from './AuctionItemListContainer';
import AuctionSearchForm from './AuctionSearchForm';

function AuctionBody() {
  return (
    <div className="w-Container m-auto">
      <AuctionSearchForm />
      <AuctionContainer />
    </div>
  );
}

export default AuctionBody;
