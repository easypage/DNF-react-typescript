import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharView from './CharView';

function CharViewData() {
  let loop = '';
  const params = new URLSearchParams(window.location.search);
  const server = params.get('serverId');
  const charId = params.get('characterId');

  const [CharacterView, setCharacterView] = useState([]);

  useEffect(() => {
    if (loop !== '1') {
      axios.get(`https://dnf-react-typescript.herokuapp.com/character/default?serverId=${server}&characterId=${charId}`).then(result => {
        console.log(result.data);

        loop = '1';
      });
    }
  }, []);
  console.log(CharacterView);

  return <div></div>;
}

export default CharViewData;
