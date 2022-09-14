import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { CharacterCardInterface } from '../Types/Character/CharacterObjectType';

function CharacterCardContainer() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');

  const [characterDataValue, setCharacterDataValue] = useState<CharacterCardInterface[]>([]);

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(characterData => {
      setCharacterDataValue(characterData.data.rows);
    });
  }, []);

  return <CharacterCard characterDataValue={characterDataValue} />;
}

export default CharacterCardContainer;
