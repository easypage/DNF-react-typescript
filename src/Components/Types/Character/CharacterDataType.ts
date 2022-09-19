import { CharacterAvatarData } from './CharacterAvatarType';
export interface CharacterDataType {
  avatar: Array<CharacterAvatarData>;
  character: string;
  creature: string;
  equipment: string;
  flag: string;
  talismans: string;
}
