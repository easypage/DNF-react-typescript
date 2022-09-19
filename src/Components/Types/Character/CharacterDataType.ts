import { CharacterAvatarData } from './CharacterAvatarType';
import { CharacterDetailData } from './CharacterDetailType';
export interface CharacterDataType {
  avatar: Array<CharacterAvatarData>;
  character: CharacterDetailData | undefined;
  creature: string;
  equipment: string;
  flag: string;
  talismans: string;
}
