import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharSearch from './CharSearch';

function CharSearchData() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');
  let loop = '';
  const [characterSearchData, setCharacterSearchData] = useState([]);

  useEffect(() => {
    if (loop !== '1') {
      axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(result => {
        setCharacterSearchData(result.data.rows);
        loop = '1';
      });
    }
  }, []);

  return <div>{characterSearchData.map(charData => (console.log(charData), (<CharSearch key={charData} data={charData} />)))}</div>;
}

export default CharSearchData;
