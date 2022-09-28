import React from 'react';
import LoadingBar from '../../../DesignPattern/Loding/LoadingBar';
import { AuctionData } from '../../Types/Auction/AuctionType';
import noItemLogo from '../../../asset/images/noitem.png';
import AuctionItem from './AuctionItem';

interface AuctionItemDataProps {
  AuctionItemData: AuctionData[];
  loading: boolean;
}

function AuctionItemList({ AuctionItemData, loading }: AuctionItemDataProps) {
  return (
    <div className="w-full mt-5">
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="w-full flex justify-center text-center m-auto  ">
          {AuctionItemData.length === 0 ? (
            <div className="h-[300px] flex justify-center items-center">
              <img src={noItemLogo} alt="" />
            </div>
          ) : (
            <AuctionItem AuctionItemData={AuctionItemData} />
          )}
        </div>
      )}
    </div>
  );
}

export default AuctionItemList;
