import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharSearch from './CharSearch';
import { Data } from './types';

function CharSearchData() {
  let loop = '';
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');

  const [characterSearchData, setCharacterSearchData] = useState<Data[]>([]);

  useEffect(() => {
    if (loop !== '1') {
      axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(charData => {
        setCharacterSearchData(charData.data.rows);
        loop = '1';
      });
    }
  }, []);

  return (
    <div>
      <CharSearch characterSearchData={characterSearchData} />
    </div>
  );
}

export default CharSearchData;
