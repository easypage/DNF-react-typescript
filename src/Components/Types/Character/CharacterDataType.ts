import { CharacterAvatarData } from './CharacterAvatarType';
import { CharacterDetailData } from './CharacterType';
export interface CharacterDataType {
  avatar: Array<CharacterAvatarData>;
  character: string;
  creature: string;
  equipment: string;
  flag: string;
  talismans: string;
}
