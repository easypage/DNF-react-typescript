import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCardList from './CharacterCardView';
import { CharacterCardInterface } from '../Types/Character/CharacterObjectType';

function CharacterDataCall() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');

  const [characterDataValue, setCharacterDataValue] = useState<CharacterCardInterface[]>([]);

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(characterData => {
      setCharacterDataValue(characterData.data.rows);
    });
  }, []);
  console.log(characterDataValue);

  return <CharacterCardList characterDataValue={characterDataValue} />;
}

export default CharacterDataCall;