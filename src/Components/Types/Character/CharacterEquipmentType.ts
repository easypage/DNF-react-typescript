import { CharacterEquipmentEnchantlData } from './CharacterEquipmentEnchantType';

export interface CharacterEquipmentData {
  itemAvailableLevel: number;
  itemGradeName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  itemType: string;
  itemTypeDetail: string;
  slotName: string;
  enchant: CharacterEquipmentEnchantlData | undefined;
}
