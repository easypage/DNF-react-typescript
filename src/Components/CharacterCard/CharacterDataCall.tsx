import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCardList from './CharacterCardList';
import { CharacterCardInterface } from '../Types/CharacterObjectType';

function CharacterDataCall() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');

  const [characterDataValue, setCharacterDataValue] = useState<CharacterCardInterface[]>([]);

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(characterData => {
      setCharacterDataValue(characterData.data.rows);
    });
  }, []);

  return <CharacterCardList characterDataValue={characterDataValue} />;
}

export default CharacterDataCall;
