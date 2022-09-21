import { CharacterCreatureArtifactData } from './CharacterCreatureArtifactType';

export interface CharactrCreatureData {
  itemId: string;
  itemName: string;
  itemRarity: string;
  artifact: CharacterCreatureArtifactData[];
}
