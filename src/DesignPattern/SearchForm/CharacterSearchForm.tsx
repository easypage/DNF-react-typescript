import React, { useState } from 'react';
import { serverList } from '../../asset/js/serverList';
import './../../css/searchForm.css';

import { Link } from 'react-router-dom';

function CharacterSearchForm() {
  const [characterNickname, setCharacterNickname] = useState('');
  const [Selected, setSelected] = useState('all');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCharacterNickname(e.currentTarget.value);
  };
  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelected(e.currentTarget.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      window.location.href = `characterSearch?serverId=${Selected}&nickname=${characterNickname}`;
    }
  };
  return (
    <div className="m-auto flex items-center justify-center w-4/6 h-16 border-4 border-yellow-300 border-solid rounded-full shadow-md mt-common">
      <select name="charServer" id="charServer" className=" w-28 h-10 mr-2 text-center focus:outline-none cursor-pointer" onChange={handleSelect}>
        {serverList.map(server => (
          <option value={server.value} key={server.value}>
            {server.text}
          </option>
        ))}
      </select>

      <input type="search" className="w-2/3 h-12 outline-0" onChange={onChange} onKeyPress={handleKeyPress} />

      <Link to={`/characterSearch?serverId=${Selected}&nickname=${characterNickname}`} className="ml-4">
        <button className="w-9 h-12">검색</button>
      </Link>
    </div>
  );
}

export default CharacterSearchForm;
