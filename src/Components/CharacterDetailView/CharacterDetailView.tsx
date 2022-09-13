import React from 'react';
import { CharacterAvatarData } from '../Types/CharacterAvatarType';
import { CharactrCreatureData } from '../Types/CharacterCreatureType';
import { CharacterEquipmentData } from '../Types/CharacterEquipmentType';
import { CharacterTalismanData } from '../Types/CharacterTalismanType';
import { CharacterDetailData } from './../Types/CharacterType';

interface CharacterDetailInterface {
  characterData: CharacterDetailData[] | undefined;
  characterEquipment: CharacterEquipmentData[] | undefined;
  characterAvatar: CharacterAvatarData[] | undefined;
  charactercreature: CharactrCreatureData[] | undefined;
  characterTalismans: CharacterTalismanData[] | undefined;
}
function CharacterDetailView({ characterData, characterEquipment, characterAvatar, charactercreature, characterTalismans }: CharacterDetailInterface) {
  return (
    <div className="flex flex-row ">
      {/* {(console.log(characterData), (<div></div>))} */}
      {characterData && characterData.map(ss => <div>{ss.guildId}</div>)}
      {/* {console.log(characterData && characterData.map(ss => ss.characterName))}; */}
    </div>
  );
}

export default CharacterDetailView;
