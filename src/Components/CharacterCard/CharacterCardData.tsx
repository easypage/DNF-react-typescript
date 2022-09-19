import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VerticalAdBanner from '../../DesignPattern/AdBanner/VerticalAdBanner';
import { CharacterCardInterface } from '../Types/Character/CharacterObjectType';
import CharacterCard from './CharacterCardList';

function CharacterCardData() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');
  const [characterDataValue, setCharacterDataValue] = useState<CharacterCardInterface[]>([]);

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(characterData => {
      setCharacterDataValue(characterData.data.rows);
    });
  }, []);
  return (
    <div className="relative">
      <CharacterCard characterDataValue={characterDataValue} />
      <VerticalAdBanner />
    </div>
  );
}
export default CharacterCardData;
