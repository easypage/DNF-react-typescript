export interface AuctionData {
  averagePrice: number; //아이템 평균가격
  count: number; //수량
  currentPrice: number; //즉시 구매 가격
  itemId: string;
  itemName: string;
  itemRarity: string;
  itemTypeDetail: string;
  price: number; //즉시구매
  unitPrice: number; //즉시구매 개당가격
}
