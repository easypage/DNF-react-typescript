import { CharacterCreatureArtifactData } from './CharacterCreatureArtifactType';

export interface characterCreatureData {
  itemId: string;
  itemName: string;
  itemRarity: string;
  artifact: CharacterCreatureArtifactData[];
}
