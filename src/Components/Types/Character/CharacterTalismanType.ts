import { characterTalismanRuneData } from './CharacterTalismanRunesType';
import { CharacterTalismansData } from './CharacterTalismanTypes';

export interface CharacterTalismanData {
  talisman: CharacterTalismansData;
  runes: characterTalismanRuneData[];
}
