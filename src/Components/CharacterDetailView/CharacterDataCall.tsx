import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CharacterAvatarData } from '../Types/CharacterAvatarType';
import { CharactrCreatureData } from '../Types/CharacterCreatureType';
import { CharacterEquipmentData } from '../Types/CharacterEquipmentType';
import { CharacterTalismanData } from '../Types/CharacterTalismanType';
import { CharacterDetailData } from '../Types/CharacterType';
import CharacterDetailView from './CharacterDetailView';

function CharViewData() {
  let loop = '';
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');

  const [characterData, setCharacterData] = useState<CharacterDetailData[]>([]);
  const [characterEquipment, setcharacterEquipment] = useState<CharacterEquipmentData[]>([]);
  const [characterAvatar, setcharacterAvatar] = useState<CharacterAvatarData[]>([]);
  const [charactercreature, setCharactercreature] = useState<CharactrCreatureData[]>([]);
  const [characterTalismans, setCharacterTalismans] = useState<CharacterTalismanData[]>([]);

  useEffect(() => {
    if (loop !== '1') {
      axios.get(`https://dnf-react-typescript.herokuapp.com/character/default?serverId=${CharacterserverId}&characterId=${CharacterId}`).then(result => {
        setCharacterData(result.data.character);
        setcharacterEquipment(result.data.equipment);
        setcharacterAvatar(result.data.avatar);
        setCharactercreature(result.data.creature);
        setCharacterTalismans(result.data.talismans);

        loop = '1';
      });
    }
  }, []);

  return (
    <CharacterDetailView
      characterData={characterData}
      characterEquipment={characterEquipment}
      characterAvatar={characterAvatar}
      charactercreature={charactercreature}
      characterTalismans={characterTalismans}
    />
  );
}

export default CharViewData;
