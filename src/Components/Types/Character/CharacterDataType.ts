import { CharacterAvatarData } from './CharacterAvatarType';
import { characterCreatureData } from './CharacterCreatureType';
import { CharacterDetailData } from './CharacterDetailType';
import { CharacterEquipmentData } from './CharacterEquipmentType';
import { CharacterFlagData } from './CharacterFlagType';
import { CharacterTalismanData } from './CharacterTalismanType';
export interface CharacterDataType {
  avatar: Array<CharacterAvatarData>;
  character: CharacterDetailData | undefined;
  creature: characterCreatureData;
  equipment: Array<CharacterEquipmentData>;
  flag: CharacterFlagData;
  talismans: Array<CharacterTalismanData>;
}
