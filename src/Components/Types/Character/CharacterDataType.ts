import { CharacterAvatarData } from './CharacterAvatarType';
import { CharacterDetailData } from './CharacterDetailType';
import { CharacterEquipmentData } from './CharacterEquipmentType';
import { CharacterTalismanData } from './CharacterTalismanType';
export interface CharacterDataType {
  avatar: Array<CharacterAvatarData>;
  character: CharacterDetailData | undefined;
  creature: string;
  equipment: Array<CharacterEquipmentData>;
  flag: string;
  talismans: Array<CharacterTalismanData>;
}
