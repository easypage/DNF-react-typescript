import { characterDeafaultStatusData } from './CharacterDefaulStatusType';
import { CharacterAttributeEnchantData } from './CharacterAttributeEnchantType';

export interface characterStatusData {
  default: characterDeafaultStatusData[];
  attributeEnhancement: CharacterAttributeEnchantData[];
}
