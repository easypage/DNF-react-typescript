import React from 'react';
import AuctionContainer from '../Components/Aution/Body/AuctionItemListContainer';
import AuctionFooter from '../Components/Aution/Footer/AuctionFooter';
import AuctionHeader from '../Components/Aution/AuctionHeader';
import AuctionBody from '../Components/Aution/Body/AuctionBody';

function AuctionPage() {
  return (
    <div>
      <AuctionHeader />
      <AuctionBody />
      <AuctionFooter />
    </div>
  );
}

export default AuctionPage;
