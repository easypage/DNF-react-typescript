import { CharacterAvatarData } from './CharacterAvatarType';
import { CharactrCreatureData } from './CharacterCreatureType';
import { CharacterDetailData } from './CharacterDetailType';
import { CharacterEquipmentData } from './CharacterEquipmentType';
import { CharacterFlagData } from './CharacterFlagType';
import { CharacterTalismanData } from './CharacterTalismanType';
export interface CharacterDataType {
  avatar: Array<CharacterAvatarData>;
  character: CharacterDetailData | undefined;
  creature: CharactrCreatureData;
  equipment: Array<CharacterEquipmentData>;
  flag: CharacterFlagData;
  talismans: Array<CharacterTalismanData>;
}
