import { CharacterFlagGemData } from './CharacterFlagGemType';

export interface CharacterFlagData {
  itemAbility: string;
  itemAvailableLevel: number;
  itemId: string;
  itemName: string;
  itemRarity: string;
  gems: CharacterFlagGemData[];
}
