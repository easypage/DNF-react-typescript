import React from 'react';
import AuctionContainer from '../Components/Aution/AuctionContainer';
import AuctionFooter from '../Components/Aution/Footer/AuctionFooter';
import AuctionHeader from '../Components/Aution/Header/AuctionHeader';

function AuctionPage() {
  return (
    <div>
      <AuctionHeader />
      <AuctionContainer />
      <AuctionFooter />
    </div>
  );
}

export default AuctionPage;
