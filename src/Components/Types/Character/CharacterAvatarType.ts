import { CharacterAvatarClonData } from './CharacterAvartarClonType';
import { CharacterAvatarEmblemData } from './CharacterAvatarEmblemType';

export interface CharacterAvatarData {
  itemId: string;
  itemName: string;
  itemRarity: string;
  optionAbility: string;
  slotName: string;
  clone: CharacterAvatarClonData;
  emblems: CharacterAvatarEmblemData[];
}
