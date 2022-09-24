import { CharacterEquipmentEnchantlData } from './CharacterEquipmentEnchantType';

export interface CharacterEquipmentData {
  itemAvailableLevel: number;
  itemGradeName: string;
  itemId: string;
  itemName: string;
  itemRarity: '커먼' | '언커먼' | '레어' | '유니크' | '에픽' | '크로니클' | '레전더리';
  itemType: string;
  itemTypeDetail: string;
  slotName: string;
  enchant: CharacterEquipmentEnchantlData | undefined;
}
